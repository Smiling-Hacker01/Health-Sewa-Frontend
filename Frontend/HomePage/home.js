document.addEventListener("DOMContentLoaded", async () => {
  const token = localStorage.getItem("token");

  if (!token) {
    alert("No token found, please login.");
    window.location.href = "../UserRegister/login.html";
    return;
  }

  try {
    const res = await fetch("https://health-sewa-backend.onrender.com/user/verify", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    const data = await res.json();
    const justLoggedIn = localStorage.getItem("justLoggedIn");

    if (res.ok) {
      if (justLoggedIn === "true") {
        if (data.isFirstLogin === true) {
          alert(`Welcome to Health Sewa, ${data.username}! Let's work together for a healthier tomorrow.`);
        } else {
          alert(`Welcome back, ${data.username}! Great to have you on the homepage.`);
        }
        localStorage.setItem("justLoggedIn", "false");
      }
    } else {
      alert("Unauthorized. Please login again.");
      window.location.href = "../UserRegister/login.html";
      return;
    }
  } catch (error) {
    alert("Unable to verify your session right now. Please login again.");
    window.location.href = "../UserRegister/login.html";
    return;
  }
});

let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const slider = document.querySelector(".slider");

const slide1 = document.getElementById("slide1");
const slide2 = document.getElementById("slide2");
const slide3 = document.getElementById("slide3");
const slide4 = document.getElementById("slide4");

if (slide1) {
  slide1.addEventListener("click", () => {
    window.location = "./../BloodBank/bloodBank.html";
  });
}

if (slide2) {
  slide2.addEventListener("click", () => {
    window.location = "./../Meal%20Planner/meal.html";
  });
}

if (slide3) {
  slide3.addEventListener("click", () => {
    window.location = "./../Exercise_page/Exercise.html";
  });
}

if (slide4) {
  slide4.addEventListener("click", () => {
    window.location = "./../DeseaseInfo/desease.html";
  });
}

function showSlide(index) {
  const totalSlides = slides.length;
  if (!totalSlides || !slider) return;

  if (index >= totalSlides) currentIndex = 0;
  else if (index < 0) currentIndex = totalSlides - 1;
  else currentIndex = index;

  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

setInterval(nextSlide, 5000);

const hamburger = document.getElementById("ham-icon");
const navbar = document.getElementById("navbar");

if (hamburger && navbar) {
  hamburger.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });
}
