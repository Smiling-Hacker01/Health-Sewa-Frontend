const Donor_Form =  document.getElementById('donor-form');
    Donor_Form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const fullName = document.getElementById('fullName').value.trim();
        const contact1 = document.getElementById('contact1').value.trim();
        const contact2 = document.getElementById('contact2').value.trim();
        const pincode = document.getElementById('pincode').value.trim();
        const aadhaar = document.getElementById('aadhaar').value.trim();
        const errorMessage = document.getElementById('error-message');

        
        for (let char of fullName) {
            if (!((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z') || char === ' ')) {
                errorMessage.innerText = "Full name should contain only letters!";
                return;
            }
        }

        if (contact1.length !== 10 || isNaN(contact1)) {
            errorMessage.innerText = "Invalid Contact Number 1! Must be 10 digits.";
            return;
        }

        if (contact2.length !== 10 || isNaN(contact2)) {
            errorMessage.innerText = "Invalid Contact Number 2! Must be 10 digits.";
            return;
        }

        if (contact1 === contact2) {
            errorMessage.innerText = "Both contact numbers must be different!";
            return;
        }

        if (pincode.length !== 6 || isNaN(pincode)) {
            errorMessage.innerText = "Invalid Pincode! It must be 6 digits.";
            return;
        }

        if (aadhaar.length !== 12 || isNaN(aadhaar)) {
            errorMessage.innerText = "Invalid Aadhaar Number! It must be 12 digits.";
            return;
        }
        // alert("You have been registered as a blood recepient");
        // setTimeout(() => {
        //     window.location.href= './recepient.html'
        // }, 2000);
        // errorMessage.innerText = "";  
        
         //Collecting form data from the user
        const formData = new FormData(Donor_Form);
        console.log(formData);
        
        //fetching rest api here
        async function fetchData(url) {
    try {
        const response = await fetch(url, {
            method: "POST",
            body: formData,
        });

        const data = await response.json();

        if (!response.ok) {
            // Handle 409 Conflict (Duplicate Key Error)
            if (response.status === 409) {
                alert(data.msg);  // e.g. "Duplicate entry for contact1: '9876543210'. Please use a different one."
            } else {
                alert("Something went wrong: " + data.msg);
            }
            return;
        }

        // Success flow
        console.log("Response received from frontend:", data);
        alert("You have been registered as a blood recipient");

        setTimeout(() => {
            window.location.href = './recepient.html';
        }, 2000);
        errorMessage.innerText = "";

    } catch (err) {
        console.error("Network or unexpected error:", err);
        alert("An unexpected error occurred. Please try again later.");
    }
}
    // calling fetching function
         fetchData('https://health-sewa-backend.onrender.com/recepient/create');
        this.reset();
    });