const donorForm = document.getElementById('donor-form');
const errorMessage = document.getElementById('error-message');
const donorBtn = document.getElementById('donorBtn');

function setError(message) {
    if (errorMessage) {
        errorMessage.textContent = message;
    }
}

function isTenDigit(value) {
    return /^\d{10}$/.test(value);
}

function isSixDigit(value) {
    return /^\d{6}$/.test(value);
}

function isTwelveDigit(value) {
    return /^\d{12}$/.test(value);
}

if (donorForm) {
    donorForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const fullName = document.getElementById('fullName').value.trim();
        const email = document.getElementById('email').value.trim();
        const city = document.getElementById('city').value.trim();
        const address = document.getElementById('address').value.trim();
        const contact1 = document.getElementById('contact1').value.trim();
        const contact2 = document.getElementById('contact2').value.trim();
        const pincode = document.getElementById('pincode').value.trim();
        const bloodgroup = document.getElementById('bloodgroup').value.trim();
        const aadhaar = document.getElementById('aadhaar').value.trim();

        if (!fullName || !email || !city || !address || !contact1 || !contact2 || !pincode || !bloodgroup || !aadhaar) {
            setError('Please fill in every field before submitting.');
            return;
        }

        if (!/^[A-Za-z][A-Za-z\s.'-]*$/.test(fullName)) {
            setError('Full name should contain only letters and standard name punctuation.');
            return;
        }

        if (!isTenDigit(contact1)) {
            setError('Contact Number 1 must be exactly 10 digits.');
            return;
        }

        if (!isTenDigit(contact2)) {
            setError('Contact Number 2 must be exactly 10 digits.');
            return;
        }

        if (contact1 === contact2) {
            setError('Both contact numbers must be different.');
            return;
        }

        if (!isSixDigit(pincode)) {
            setError('Pincode must be exactly 6 digits.');
            return;
        }

        if (!isTwelveDigit(aadhaar)) {
            setError('Aadhaar number must be exactly 12 digits.');
            return;
        }

        if (!bloodgroup) {
            setError('Please select a blood group.');
            return;
        }

        setError('');
        donorBtn.disabled = true;
        donorBtn.textContent = 'Submitting profile...';

        const formData = new FormData(donorForm);

        try {
            const response = await fetch('https://health-sewa-backend.onrender.com/donor/create', {
                method: 'POST',
                body: formData
            });

            const data = await response.json();

            if (!response.ok) {
                setError(data.msg || 'Something went wrong while creating your donor profile.');
                donorBtn.disabled = false;
                donorBtn.textContent = 'Register as Donor';
                return;
            }

            donorForm.reset();
            window.location.href = './../HomePage/home.html';
        } catch (error) {
            console.error('Network or unexpected error:', error);
            setError('An unexpected error occurred. Please try again later.');
            donorBtn.disabled = false;
            donorBtn.textContent = 'Register as Donor';
        }
    });
}
