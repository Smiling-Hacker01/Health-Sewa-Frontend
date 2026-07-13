const hospitalList = document.getElementById("hospitalList");
const messageElement = document.querySelector(".message");
const homeButton = document.getElementById("button");

function renderEmptyState(message) {
    if (hospitalList) {
        hospitalList.innerHTML = `<div class="empty-state">${message}</div>`;
    }
}

function displayHospitals(data) {
    if (!hospitalList) return;

    hospitalList.innerHTML = "";

    const filteredHospitals = data.filter((hospital) =>
        hospital.tags.name &&
        hospital.tags["addr:full"] &&
        hospital.tags["addr:district"] &&
        hospital.tags["addr:state"] &&
        hospital.tags["addr:postcode"]
    );

    if (filteredHospitals.length === 0) {
        renderEmptyState("No hospitals with complete address details were found in your area.");
        return;
    }

    filteredHospitals.forEach((hospital) => {
        const hospitalDiv = document.createElement("article");
        hospitalDiv.classList.add("hospital");

        hospitalDiv.innerHTML = `
            <p><strong>Name:</strong> ${hospital.tags.name || "Unknown"}</p>
            <p><strong>Address:</strong> ${hospital.tags["addr:full"] || "Not Available"}</p>
            <p><strong>District:</strong> ${hospital.tags["addr:district"] || "Not Available"}</p>
            <p><strong>State:</strong> ${hospital.tags["addr:state"] || "Not Available"}</p>
            <p><strong>Post Code:</strong> ${hospital.tags["addr:postcode"] || "Not Available"}</p>
        `;

        hospitalList.appendChild(hospitalDiv);
    });
}

if (homeButton) {
    homeButton.addEventListener("click", () => {
        window.location.href = "./../HomePage/home.html";
    });
}

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        async (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            if (messageElement) {
                messageElement.textContent = "Location approved. Searching for hospitals near you now.";
            }

            try {
                const url = `https://overpass-api.de/api/interpreter?data=[out:json];node(around:15000,${latitude},${longitude})["amenity"="hospital"];out;`;
                const response = await fetch(url);
                const data = await response.json();
                displayHospitals(data.elements || []);

                if (messageElement) {
                    messageElement.textContent = "Showing nearby hospitals and blood banks based on your current location.";
                }
            } catch (error) {
                console.error("Error fetching hospital data:", error);
                if (messageElement) {
                    messageElement.textContent = "We could not fetch hospital data right now. Please check your connection and try again.";
                }
                renderEmptyState("Data could not be loaded at the moment.");
            }
        },
        (error) => {
            console.error("Error getting location:", error.message);
            if (messageElement) {
                if (error.code === 1) {
                    messageElement.textContent = "Location access was denied. Please allow location permission to view nearby hospitals.";
                } else {
                    messageElement.textContent = "We could not read your location right now. Please try again.";
                }
            }
            renderEmptyState("Location access is required to show nearby hospitals.");
        }
    );
} else if (messageElement) {
    messageElement.textContent = "Your browser does not support location lookup.";
    renderEmptyState("Location lookup is unavailable in this browser.");
}
