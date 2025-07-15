const checkActive = document.getElementById('remember-me');
const labelRememberMe = document.getElementById('label-remember-me');
const logingHeading = document.getElementById('login-heading');
const form = document.querySelector('.form');

    let clickCount = 0;
    // console.log(labelRememberMe);
    checkActive.addEventListener('click', (event) => {
        if (clickCount == 0) {
            labelRememberMe.style.color = '#691eaf';
            clickCount = 1;
        }
        else{
            labelRememberMe.style.color = '#555555';
            clickCount = 0;
        }
    });


   form.addEventListener("submit", async (e) => {
       e.preventDefault();
  
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      const res = await fetch("https://health-sewa-backend.onrender.com/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
          });

      const data = await res.json();

      if (res.ok) {
         localStorage.setItem("token", data.token);
         localStorage.setItem("justLoggedIn", "true");
         window.location.href = "../HomePage/home.html";
        } else {
            alert(`Login failed, ${data.msg}`);
          }
    });
