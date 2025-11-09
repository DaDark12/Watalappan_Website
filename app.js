// App.js: Adds interactive glow + smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(anchor.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

window.addEventListener('scroll', () => {
  const header = document.querySelector('.nav-glass');
  if (window.scrollY > 50) header.style.backdropFilter = 'blur(30px)';
  else header.style.backdropFilter = 'blur(20px)';
});
