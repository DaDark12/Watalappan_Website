// Hero Image Tilt
const heroImg = document.getElementById('hero-img');
if(heroImg){
  heroImg.addEventListener('mousemove', e => {
    const rect = heroImg.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const dx = (x - cx) /40;
    const dy = (y - cy) /40;
    heroImg.style.transform = `rotateX(${-dy}deg) rotateY(${dx}deg)`;
  });
  heroImg.addEventListener('mouseleave', () => {
    heroImg.style.transform = 'rotateX(0) rotateY(0)';
  });
}

// Card 3D Hover
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width /2;
    const cy = rect.height /2;
    const dx = (x - cx)/20;
    const dy = (y - cy)/20;
    card.style.transform = `translateY(-5px) rotateX(${-dy}deg) rotateY(${dx}deg)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0) rotateX(0) rotateY(0)';
  });
});
