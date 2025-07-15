 // yhn pr yeh function dekhega ki information daalni hai div bana kr vo bhi tb agr full information hai
 function displayHospitals(data) {
    const hospitalList = document.getElementById("hospitalList");
    hospitalList.innerHTML = ""; //pehle ka content hatana hai

    const filteredHospitals = data.filter(hospital => 
        hospital.tags.name &&
        hospital.tags["addr:full"] &&
        hospital.tags["addr:district"] &&
        hospital.tags["addr:state"] &&
        hospital.tags["addr:postcode"]
    );

    if (filteredHospitals.length === 0) {
        hospitalList.innerHTML = "<p>No hospitals found in your area.</p>";
        return;
    }

    filteredHospitals.forEach(hospital => {
        const hospitalDiv = document.createElement("div");
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

// yhn se location le rhe hain user se.. abhi aise hi kr rhe hain baad mein search dekheinge

navigator.geolocation.getCurrentPosition(
    (position) => {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        console.log("User's Location:", latitude, longitude);

        // OpenStreetMap ki Api use kri hai maine(google haramkhor paise mang rha tha)
        setTimeout(()=>{
            const messageElement = document.querySelector('.message');
            const backHome = document.querySelector('#button');
            const url = `https://overpass-api.de/api/interpreter?data=[out:json];node(around:15000,${latitude},${longitude})["amenity"="hospital"];out;`;
            fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log("Received Data:", data);
                displayHospitals(data.elements);
                messageElement.textContent = "";
                backHome.classList.remove('home');
                backHome.classList.add('popup');
                backHome.addEventListener('click', (event) => {
                    window.location.href = './../HomePage/home.html';
                })
            })
            .catch(error => {
                messageElement.textContent = "Error! could not fetch data. Try checking your Internet Connection."
                console.error("Error fetching hospital data:", error);
                backHome.classList.remove('home');
                backHome.classList.add('popup');
                backHome.addEventListener('click', (event) => {
                    window.location.href = './../HomePage/home.html';
                })
            });
        },5000);
    },
    (error) => {
        console.error("Error getting location:", error.message);
    }
);

