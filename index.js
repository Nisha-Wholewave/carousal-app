const track = document.getElementById("carousal-track");
const slides = Array.from(document.querySelectorAll(".slide")); //HTML Collection -> Convert to Array
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
let currentIndex = 0;
function updateCarousal() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
}
nextBtn.addEventListener("click", function() {
  currentIndex = (currentIndex + 1) % slides.length; // (0 + 1) % 3 = 1
  updateCarousal();
});
prevBtn.addEventListener("click", function() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length; // (0 - 1 + 3) % 3 = 2
  updateCarousal();
});