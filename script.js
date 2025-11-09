// Optional: subtle floating card animations
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width/2;
    const cy = rect.height/2;
    const dx = (x - cx)/20;
    const dy = (y - cy)/20;
    card.style.transform = `translateY(-5px) rotateX(${-dy}deg) rotateY(${dx}deg)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0) rotateX(0) rotateY(0)';
  });
});
