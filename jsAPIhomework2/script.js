let currentSlide = 0;
const slides = document.querySelectorAll(".slider img");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
const dots = document.querySelectorAll(".dot");

function showSlide(n) {
  slides.forEach((slide) => (slide.style.display = "none"));
  dots.forEach((dot) => dot.classList.remove("active"));
  if (n < 0) {
    currentSlide = slides.length - 1;
  } else if (n >= slides.length) {
    currentSlide = 0;
  } else {
    currentSlide = n;
  }
  slides[currentSlide].style.display = "block";
  dots[currentSlide].classList.add("active");
}

prevButton.addEventListener("click", () => showSlide(currentSlide - 1));
nextButton.addEventListener("click", () => showSlide(currentSlide + 1));

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => showSlide(index));
});

showSlide(currentSlide);