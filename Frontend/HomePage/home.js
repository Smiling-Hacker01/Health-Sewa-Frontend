
//checking if the user is authenticated to see homepage

document.addEventListener("DOMContentLoaded", async () => {
  const token = localStorage.getItem("token");
  // console.log("Token:", token);  to check whether the login page has sent any token or to check whether any token is present already

  if (!token) {
    alert("No token found, please login.");
    window.location.href = "../UserRegister/login.html";
    return;
  }

  const res = await fetch("https://health-sewa-backend.onrender.com/user/verify", {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}` 
    }
  });

  const data = await res.json();
  console.log(data); //just to check wether we are receiving correcct data or not
  const justLoggedIn = localStorage.getItem("justLoggedIn");
  if (res.ok) {
    // console.log("Verified user:", data); // to check we are receiving a correct response
    if (justLoggedIn === "true") {
      
      if (data.isFirstLogin === true) {
        alert(`Welcome to Health Sewa, ${data.username}! Let’s work together for a healthier tomorrow`);
      }else if (data.isFirstLogin === false) {
        alert(`Welcome back, ${data.username}! Great to have you on the homepage.`);
      }
      localStorage.setItem("justLoggedIn" , "false");
      
    }
  } else {
    alert("Unauthorized. Please login again.");
    window.location.href = "../UserRegister/login.html";
  }
});

let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const slide1 = document.getElementById("slide1")
const slide2 = document.getElementById("slide2")
const slide3 = document.getElementById("slide3")
const slide4 = document.getElementById("slide4")

slide1.addEventListener("click", (event) =>{
    window.location = './../BloodBank/bloodBank.html';
})

slide2.addEventListener("click", (event) =>{
    window.location = './../Meal%20Planner/meal.html';
})

slide3.addEventListener("click", (event) =>{
    window.location = './../Exercise_page/Exercise.html';
})

slide4.addEventListener("click", (event) =>{
    window.location = './../DeseaseInfo/desease.html';
})
function showSlide(index) {
    const totalSlides = slides.length;
    if (index >= totalSlides) currentIndex = 0;
    else if (index < 0) currentIndex = totalSlides - 1;
    else currentIndex = index;
    
    document.querySelector(".slider").style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

/* Auto Slide Change */
setInterval(nextSlide, 5000);

const hamburger = document.getElementById("ham-icon");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// function to logout will take care of this in future

// function logout() {
//   localStorage.removeItem("token");
//   window.location.href = "login.html";
// }


