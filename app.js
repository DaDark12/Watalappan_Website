document.addEventListener("DOMContentLoaded", () => {
  console.log("Watalappan Website loaded successfully!");
  
  // Smooth scroll between nav sections
  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
