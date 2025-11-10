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

// --- NAVIGATION CODE UPDATE ---
const links = document.querySelectorAll("header a");
links.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetText = link.textContent.trim().toLowerCase();
    
    if (targetText === "about") {
      window.location.href = "#history"; // Scrolls to History section
    } else if (targetText === "ingredients") {
      window.location.href = "#ingredients";
    } else if (targetText === "recipe") {
      window.location.href = "#recipe";
    } else if (targetText === "gallery") {
      window.location.href = "#gallery";
    }
  });
});

// Buttons
document.querySelectorAll('button span').forEach(span => {
  const parentButton = span.parentElement;
  if (span.textContent.includes("View the Recipe")) {
    parentButton.addEventListener("click", () => {
      window.location.href = "#recipe";
    });
  }
  if (span.textContent.includes("Contact Us")) {
    parentButton.addEventListener("click", () => {
      window.open("https://github.com/DaDark12/Watalappan_Website/issues", "_blank");
    });
  }

  // 3D tilt effect on hover
  parentButton.addEventListener("mousemove", e => {
    const rect = parentButton.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const dx = (x - cx) / cx;
    const dy = (y - cy) / cy;
    parentButton.style.transform = `perspective(500px) rotateX(${dy*8}deg) rotateY(${dx*8}deg) scale(1.03)`;
  });
  parentButton.addEventListener("mouseleave", () => {
    parentButton.style.transform = "perspective(500px) rotateX(0deg) rotateY(0deg) scale(1)";
  });
});

// --- Footer update ---
const footer = document.querySelector("footer p");
if (footer) {
  footer.innerHTML = 'Made by <a href="https://github.com/DaDark12" class="text-primary hover:underline">Ali</a>. All rights reserved.';
}
