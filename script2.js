// Scroll animation untuk sections
const uiSections = document.querySelectorAll(".ui-main section");
function showUISections(){
  const trigger = window.innerHeight * 0.85;
  uiSections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if(top < trigger) sec.classList.add("visible");
  });
}
window.addEventListener("scroll", showUISections);
showUISections();

// Smooth scroll untuk tombol Lihat Program Studi
const uiBtn = document.querySelector('.ui-header .ui-btn');
uiBtn.addEventListener('click', function(e) {
  e.preventDefault();
  const target = document.querySelector('#ui-program-studi');
  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

