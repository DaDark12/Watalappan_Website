import React from 'react';

export default function Gallery() {
  const images = [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/8/81/Watalappan-Sri_Lanka.jpg",
      alt: "Watalappan Dessert"
    },
    {
      url: "https://www.hungrylankan.com/wp-content/uploads/2025/09/Sri-Lankan-watalappam-3.jpg",
      alt: "Watalappan Slice"
    },
    {
      url: "https://i.pinimg.com/originals/4d/07/39/4d0739457b7290f1be6e04b0eb7ef327.jpg",
      alt: "Watalappan Closeup"
    }
  ];

  return (
    <section id="gallery" className="section">
      <h2>Gallery</h2>
      <div className="gallery-grid">
        {images.map((img, idx) => (
          <div key={idx} className="card gallery-card">
            <img src={img.url} alt={img.alt} className="gallery-img" />
          </div>
        ))}
      </div>
    </section>
  );
}
