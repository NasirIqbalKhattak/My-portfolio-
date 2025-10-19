// Animated Typing Text
const text = "I am Nasir Iqbal, a student of I.C.S and a front end web developer";
let index = 0;

function typeText() {
  if (index < text.length) {
    document.getElementById("animated-text").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeText, 50);
  }
}
typeText();

// Auto Slide Images
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide() {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
  });
  slides[currentSlide].classList.add("active");
  currentSlide = (currentSlide + 1) % slides.length;
}
setInterval(showSlide, 3000);
