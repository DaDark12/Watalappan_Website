// ========== DARK/LIGHT THEME TOGGLE ==========
const body = document.body;

// Create a toggle button in navbar
const navbar = document.querySelector('.navbar');
const themeBtn = document.createElement('button');
themeBtn.innerText = '🌙';
themeBtn.classList.add('theme-toggle');
themeBtn.style.marginLeft = '1rem';
themeBtn.style.padding = '0.3rem 0.7rem';
themeBtn.style.border = 'none';
themeBtn.style.borderRadius = '8px';
themeBtn.style.cursor = 'pointer';
themeBtn.style.background = 'rgba(255,255,255,0.6)';
navbar.appendChild(themeBtn);

themeBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  if(body.classList.contains('dark-mode')) {
    themeBtn.innerText = '☀️';
  } else {
    themeBtn.innerText = '🌙';
  }
});

// Dark mode CSS changes
const style = document.createElement('style');
style.innerHTML = `
  body.dark-mode {
    background: #1a1a1a;
    color: #f0f0f0;
  }
  body.dark-mode .card {
    background: rgba(30,30,30,0.85);
    box-shadow: 0 10px 20px rgba(255,255,255,0.05);
  }
  body.dark-mode .navbar {
    background: rgba(20,20,20,0.95);
  }
  body.dark-mode .navbar a {
    color: #f0f0f0;
  }
  body.dark-mode .navbar a:hover {
    color: #ffcc66;
  }
`;
document.head.appendChild(style);

// ========== SMOOTH SCROLL FOR NAV LINKS ==========
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    if(target){
      window.scrollTo({
        top: target.offsetTop - 70, // adjust for navbar
        behavior: 'smooth'
      });
    }
  });
});

// ========== OPTIONAL SUBTLE BG ANIMATION ==========
const hero = document.getElementById('hero');
if(hero){
  const bubbles = [];
  for(let i=0;i<15;i++){
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    bubble.style.left = Math.random()*100+'%';
    bubble.style.animationDelay = Math.random()*5+'s';
    bubble.style.width = bubble.style.height = 20 + Math.random()*20 + 'px';
    hero.appendChild(bubble);
    bubbles.push(bubble);
  }

  // CSS for bubbles
  const bubbleStyle = document.createElement('style');
  bubbleStyle.innerHTML = `
    .bubble {
      position: absolute;
      bottom: -40px;
      background: rgba(255,255,255,0.2);
      border-radius: 50%;
      pointer-events: none;
      animation: rise 8s linear infinite;
    }
    @keyframes rise {
      0% { transform: translateY(0) scale(1); opacity:0.2; }
      50% { opacity:0.4; }
      100% { transform: translateY(-400px) scale(1.2); opacity:0; }
    }
  `;
  document.head.appendChild(bubbleStyle);
}
