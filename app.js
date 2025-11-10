document.addEventListener('DOMContentLoaded', () => {

  // --- 1. Interactive 3D Card Tilt Effect ---
  const cards = document.querySelectorAll('.card-3d');

  // Prevent default "tilt" on mobile
  if (window.innerWidth > 768) {
    cards.forEach(card => {
      const maxTilt = 15; // Max degrees of tilt

      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left; // Mouse X position within the card
        const y = e.clientY - rect.top;  // Mouse Y position within the card

        const width = rect.width;
        const height = rect.height;

        // Calculate rotation:
        // (x / width) gives a value from 0 to 1.
        // ((x / width) - 0.5) gives -0.5 to 0.5.
        // * 2 gives -1 to 1.
        // * maxTilt gives -15 to 15.
        const rotateY = maxTilt * (((x / width) - 0.5) * 2);
        const rotateX = maxTilt * (((y / height) - 0.5) * -2); // Invert Y-axis

        // Apply the 3D transform
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });

      // Reset the card when the mouse leaves
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
      });
    });
  }


  // --- 2. Cursor Trail Effect ---
  const trailContainer = document.getElementById('cursor-trail-container');
  // Don't run this on mobile devices
  if (trailContainer && window.innerWidth > 768) {
    
    // Throttling to prevent creating too many elements
    let canCreateDot = true;

    window.addEventListener('mousemove', (e) => {
      if (!canCreateDot) return;

      canCreateDot = false;
      setTimeout(() => {
        canCreateDot = true;
      }, 35); // Create a new dot every 35ms max

      // Create the dot element
      const dot = document.createElement('div');
      dot.className = 'trail-dot';

      // Randomize dot size
      const size = Math.random() * 10 + 5; // Size between 5px and 15px
      
      dot.style.width = `${size}px`;
      dot.style.height = `${size}px`;
      
      // Position it at the cursor, adjusting for size
      dot.style.left = `${e.clientX - size / 2}px`;
      dot.style.top = `${e.clientY - size / 2}px`;

      trailContainer.appendChild(dot);

      // Remove the dot after its animation (1s)
      setTimeout(() => {
        trailContainer.removeChild(dot);
      }, 1000);
    });
  }
});
