document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".top-nav");

  window.addEventListener("scroll", () => {
    const scrolled = window.scrollY > 50;
    nav.style.backdropFilter = scrolled ? "blur(40px)" : "blur(20px)";
    nav.style.background = scrolled
      ? "rgba(255, 255, 255, 0.45)"
      : "rgba(255, 255, 255, 0.35)";
  });

  // Smooth fade-in animation
  const fadeItems = document.querySelectorAll("section");
  fadeItems.forEach((sec, i) => {
    sec.style.opacity = 0;
    sec.style.transform = "translateY(50px)";
    sec.style.transition = "0.8s ease";
    setTimeout(() => {
      sec.style.opacity = 1;
      sec.style.transform = "translateY(0)";
    }, 300 * i);
  });
});
