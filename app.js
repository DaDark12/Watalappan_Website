// ===== DARK/LIGHT MODE TOGGLE =====
const body = document.body;
const navbar = document.querySelector('.navbar');

const themeBtn = document.createElement('button');
themeBtn.innerText = '🌙';
themeBtn.classList.add('theme-toggle');
navbar.appendChild(themeBtn);

themeBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  themeBtn.innerText = body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    if(target){
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior:'smooth'
      });
    }
  });
});

// ===== HERO BUBBLES ANIMATION =====
const hero = document.getElementById('hero');
if(hero){
  for(let i=0;i<15;i++){
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    bubble.style.left = Math.random()*100+'%';
    bubble.style.width = bubble.style.height = 20+Math.random()*30+'px';
    bubble.style.animationDelay = Math.random()*5+'s';
    hero.appendChild(bubble);
  }
}

// ===== CARD 3D HOVER =====
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width/2;
    const cy = rect.height/2;
    const dx = (x-cx)/20;
    const dy = (y-cy)/20;
    card.style.transform = `translateY(-10px) rotateX(${-dy}deg) rotateY(${dx}deg)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0) rotateX(0) rotateY(0)';
  });
});

// ===== HERO IMAGE 3D TILT =====
const heroImg = document.getElementById('hero-img');
if(heroImg){
  heroImg.addEventListener('mousemove', e => {
    const rect = heroImg.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width/2;
    const cy = rect.height/2;
    const dx = (x-cx)/40;
    const dy = (y-cy)/40;
    heroImg.style.transform = `rotateX(${-dy}deg) rotateY(${dx}deg) scale(1.03)`;
  });
  heroImg.addEventListener('mouseleave', () => {
    heroImg.style.transform = 'rotateX(0) rotateY(0) scale(1)';
  });
});
