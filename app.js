// Cursor Trail Effect
const trailContainer = document.createElement("div");
trailContainer.className = "fixed top-0 left-0 pointer-events-none z-50";
document.body.appendChild(trailContainer);

const trailCount = 10;
const trailDots = [];

for (let i = 0; i < trailCount; i++) {
  const dot = document.createElement("div");
  dot.className = "trail-dot bg-primary rounded-full w-4 h-4 opacity-80 absolute";
  trailContainer.appendChild(dot);
  trailDots.push({ el: dot, x: 0, y: 0 });
}

let mouseX = 0, mouseY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateTrail() {
  let x = mouseX, y = mouseY;
  trailDots.forEach((dot, i) => {
    dot.x += (x - dot.x) * 0.2;
    dot.y += (y - dot.y) * 0.2;
    dot.el.style.transform = `translate(${dot.x - 8}px, ${dot.y - 8}px)`;
    x = dot.x;
    y = dot.y;
  });
  requestAnimationFrame(animateTrail);
}
animateTrail();

// Navigation Buttons
document.querySelectorAll("header a").forEach(a => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
    const target = a.getAttribute("href");
    if (target.startsWith("#")) {
      document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// View the Recipe button scrolls to Recipe section
document.querySelectorAll('button span').forEach(span => {
  const parentButton = span.parentElement;
  if (span.textContent.includes("View the Recipe")) {
    parentButton.addEventListener("click", () => {
      document.querySelector("#recipe")?.scrollIntoView({ behavior: "smooth" });
    });
  }
  if (span.textContent.includes("Contact Us")) {
    parentButton.addEventListener("click", () => {
      window.open("https://github.com/DaDark12/Watalappan_Website/issues", "_blank");
    });
  }
});
