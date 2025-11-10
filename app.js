// app.js — adds a smooth cursor trail glow effect
document.addEventListener("DOMContentLoaded", () => {
  const trailContainer = document.createElement("div");
  trailContainer.id = "cursor-trail-container";
  trailContainer.style.position = "fixed";
  trailContainer.style.top = "0";
  trailContainer.style.left = "0";
  trailContainer.style.width = "100%";
  trailContainer.style.height = "100%";
  trailContainer.style.pointerEvents = "none";
  trailContainer.style.overflow = "hidden";
  document.body.appendChild(trailContainer);

  if (window.innerWidth <= 768) return; // Disable for mobile

  let canCreateDot = true;

  window.addEventListener("mousemove", (e) => {
    if (!canCreateDot) return;
    canCreateDot = false;
    setTimeout(() => (canCreateDot = true), 25);

    const dot = document.createElement("div");
    const size = Math.random() * 8 + 6; // 6–14px
    const colors = ["#f49d25", "#ffb84d", "#ffcc80"];
    const color = colors[Math.floor(Math.random() * colors.length)];

    dot.style.position = "absolute";
    dot.style.width = `${size}px`;
    dot.style.height = `${size}px`;
    dot.style.borderRadius = "50%";
    dot.style.background = color;
    dot.style.left = `${e.clientX - size / 2}px`;
    dot.style.top = `${e.clientY - size / 2}px`;
    dot.style.opacity = "0.9";
    dot.style.pointerEvents = "none";
    dot.style.transition = "transform 1s ease-out, opacity 1s ease-out";
    dot.style.zIndex = "9999";
    dot.style.transform = "scale(1)";
    trailContainer.appendChild(dot);

    requestAnimationFrame(() => {
      dot.style.opacity = "0";
      dot.style.transform = "scale(3)";
    });

    setTimeout(() => {
      dot.remove();
    }, 1000);
  });
});
