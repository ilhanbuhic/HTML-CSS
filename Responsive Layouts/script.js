//selectors
const qualityTitle = document.querySelector(".quality-title");
const qualityText = document.querySelector(".quality-text");
const text1 = document.querySelector(".presentation__text1");
const text2 = document.querySelector(".presentation__text2");

window.addEventListener("scroll", function () {
  value = window.scrollY;

  //texts opacity
  qualityTitle.style.opacity = value * 0.002;
  qualityText.style.opacity = value * 0.0012;

  //texts fade in
  if (value < 1700) {
    text2.style.transform = `translateX(${value - 1700}px)`;
  }

  if (value < 1200) {
    text1.style.transform = `translateX(${value - value - value + 1200}px)`;
  }
});
