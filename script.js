// Floating card hover effect
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width/2;
    const cy = rect.height/2;
    const dx = (x-cx)/20;
    const dy = (y-cy)/20;
    card.style.transform = `translateY(-5px) rotateX(${-dy}deg) rotateY(${dx}deg)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0) rotateX(0) rotateY(0)';
  });
});

// Hero SVG subtle tilt
const heroSvg = document.querySelector('.hero-svg');
if(heroSvg){
  heroSvg.addEventListener('mousemove', e=>{
    const rect = heroSvg.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width/2;
    const cy = rect.height/2;
    const dx = (x-cx)/40;
    const dy = (y-cy)/40;
    heroSvg.style.transform = `rotateX(${-dy}deg) rotateY(${dx}deg)`;
  });
  heroSvg.addEventListener('mouseleave', ()=>{ heroSvg.style.transform = 'rotateX(0) rotateY(0)'; });
}
