// Password toggle
const togglePw = document.getElementById('togglePw');
const passwordInput = document.getElementById('password');

if (togglePw && passwordInput) {
    togglePw.addEventListener('click', () => {
        const isHidden = passwordInput.type === 'password';
        passwordInput.type = isHidden ? 'text' : 'password';
        togglePw.textContent = isHidden ? '🙈' : '👁️';
    });
}

// Remember me styling
const checkActive = document.getElementById('remember-me');
if (checkActive) {
    checkActive.addEventListener('change', () => {
        const label = checkActive.closest('.remember-label');
        if (label) {
            label.style.color = checkActive.checked ? '#e74c3c' : '#666';
        }
    });
}

// Login form submit
const form = document.getElementById('loginForm');
if (form) {
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const loginBtn = document.getElementById('loginBtn');

        loginBtn.textContent = 'Logging in...';
        loginBtn.disabled = true;

        try {
            const res = await fetch('https://health-sewa-backend.onrender.com/user/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            const data = await res.json();

            if (res.ok) {
                localStorage.setItem('token', data.token);
                localStorage.setItem('justLoggedIn', 'true');
                window.location.href = '../HomePage/home.html';
            } else {
                alert(`Login failed: ${data.msg}`);
                loginBtn.textContent = 'Login';
                loginBtn.disabled = false;
            }
        } catch (err) {
            alert('Network error. Please try again.');
            loginBtn.textContent = 'Login';
            loginBtn.disabled = false;
        }
    });
}
