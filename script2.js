// =========================
// ANIMASI SCROLL SECTION
// =========================
const uiSections = document.querySelectorAll(".ui-main section");
function showUISections(){
  const trigger = window.innerHeight * 0.85;
  uiSections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < trigger) sec.classList.add("visible");
  });
}
window.addEventListener("scroll", showUISections);
showUISections();


// =========================
// SMOOTH SCROLL TOMBOL HEADER
// =========================
const uiBtn = document.querySelector('.ui-header .ui-btn');
if (uiBtn) {
  uiBtn.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector('#ui-program-studi');
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}


let currentSlide = 0;

const slides = document.querySelectorAll(".slide-img");
const track = document.querySelector(".slider-track");

function updateSlide() {
  track.style.transform = `translateX(-${currentSlide * 100}%)`;
}

document.querySelector(".next-btn").onclick = () => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlide();
};

document.querySelector(".prev-btn").onclick = () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlide();
};
