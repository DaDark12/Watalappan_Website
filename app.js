const body = document.body;
const navbar = document.querySelector('.navbar');

// Theme toggle
const themeBtn = document.createElement('button');
themeBtn.innerText = '🌙';
themeBtn.classList.add('theme-toggle');
themeBtn.style.marginLeft = '1rem';
themeBtn.style.border = 'none';
themeBtn.style.background = 'rgba(255,255,255,0.4)';
themeBtn.style.borderRadius = '10px';
themeBtn.style.cursor = 'pointer';
themeBtn.style.padding = '0.3rem 0.7rem';
navbar.appendChild(themeBtn);

themeBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  themeBtn.innerText = body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Smooth scroll
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 100,
        behavior: 'smooth',
      });
    }
  });
});

// Hero bubbles animation
const hero = document.getElementById('hero');
if (hero) {
  for (let i = 0; i < 15; i++) {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    bubble.style.left = Math.random() * 100 + '%';
    bubble.style.width = bubble.style.height = 20 + Math.random() * 25 + 'px';
    bubble.style.animationDelay = Math.random() * 5 + 's';
    hero.appendChild(bubble);
  }
}
