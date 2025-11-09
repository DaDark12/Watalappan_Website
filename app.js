// Add 3D parallax scroll and glass glow effects
document.addEventListener("scroll", () => {
  const scroll = window.scrollY;
  document.body.style.backgroundPositionY = `${scroll * 0.3}px`;
});

const nav = document.querySelector(".glass-nav");
window.addEventListener("scroll", () => {
  if (window.scrollY > 80) nav.classList.add("active");
  else nav.classList.remove("active");
});
