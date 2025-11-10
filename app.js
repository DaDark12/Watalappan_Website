document.addEventListener("DOMContentLoaded", () => {
  console.log("✨ Watalappan site ready.");

  // smooth section animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.3 });

  document.querySelectorAll(".card").forEach((el) => observer.observe(el));
});
