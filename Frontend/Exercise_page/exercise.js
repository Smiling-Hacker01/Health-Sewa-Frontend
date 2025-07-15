
document.getElementById("gym-btn").addEventListener("click", function() {
    document.getElementById("gym-workout").style.display = "block";
    document.getElementById("home-workout").style.display = "none";
});

document.getElementById("home-btn").addEventListener("click", function() {
    document.getElementById("home-workout").style.display = "block";
    document.getElementById("gym-workout").style.display = "none";
});

