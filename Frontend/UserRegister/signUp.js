// ── Password show/hide toggles ──────────────────────────────
function setupPasswordToggle(toggleId, inputId) {
    const toggle = document.getElementById(toggleId);
    const input = document.getElementById(inputId);
    if (!toggle || !input) return;
    toggle.addEventListener('click', () => {
        const isHidden = input.type === 'password';
        input.type = isHidden ? 'text' : 'password';
        toggle.textContent = isHidden ? '🙈' : '👁️';
    });
}

setupPasswordToggle('togglePw', 'password');
setupPasswordToggle('toggleConfirmPw', 'confirm-password');

// ── Live password-match indicator ───────────────────────────
const passwordInput = document.getElementById('password');
const confirmInput  = document.getElementById('confirm-password');
const pwMatchMsg    = document.getElementById('pwMatchMsg');

function checkPasswordMatch() {
    const val = passwordInput.value;
    const confirm = confirmInput.value;

    if (confirm.length === 0) {
        pwMatchMsg.textContent = '';
        pwMatchMsg.className = 'pw-match-msg';
        return;
    }

    if (val === confirm) {
        pwMatchMsg.textContent = '✓ Passwords match';
        pwMatchMsg.className = 'pw-match-msg match';
    } else {
        pwMatchMsg.textContent = '✗ Passwords do not match';
        pwMatchMsg.className = 'pw-match-msg no-match';
    }
}

if (confirmInput) confirmInput.addEventListener('input', checkPasswordMatch);
if (passwordInput) passwordInput.addEventListener('input', checkPasswordMatch);

// ── Form Submit ──────────────────────────────────────────────
const form = document.getElementById('signupForm');
if (form) {
    form.addEventListener('submit', async function (event) {
        event.preventDefault();

        // Block if passwords don't match
        const pw      = document.getElementById('password').value;
        const confirm = document.getElementById('confirm-password').value;
        if (pw !== confirm) {
            alert('Passwords do not match. Please try again.');
            return;
        }

        const signupBtn = document.getElementById('signupBtn');
        signupBtn.textContent = 'Creating account...';
        signupBtn.disabled = true;

        const formData = new FormData(form);

        try {
            const response = await fetch('https://health-sewa-backend.onrender.com/user/create', {
                method: 'POST',
                body: formData
            });

            const data = await response.json();

            if (!response.ok) {
                if (response.status === 409) {
                    alert(data.msg);
                } else if (response.status === 400) {
                    alert(`Something didn't go as expected: ${data.msg}`);
                } else {
                    alert('Something went wrong: ' + data.msg);
                }
                signupBtn.textContent = 'Create Account';
                signupBtn.disabled = false;
                return;
            }

            alert('You have been successfully registered! Please log in to continue.');
            window.location.href = './login.html';

        } catch (error) {
            console.error('Network or unexpected error:', error);
            alert('An unexpected error occurred. Please try again later.');
            signupBtn.textContent = 'Create Account';
            signupBtn.disabled = false;
        }
    });
}