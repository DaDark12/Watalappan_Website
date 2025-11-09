// Smooth scrolling and navbar animation
document.querySelectorAll(".navbar a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    window.scrollTo({
      top: target.offsetTop - 60,
      behavior: "smooth",
    });
  });
});

// Add scroll effect to navbar
const nav = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  nav.style.backdropFilter = window.scrollY > 50 ? "blur(20px)" : "blur(12px)";
  nav.style.background = window.scrollY > 50
    ? "rgba(255, 255, 255, 0.4)"
    : "rgba(255, 255, 255, 0.3)";
});
