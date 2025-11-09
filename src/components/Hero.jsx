import React from 'react';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-bg"></div>
      <div className="swirl-overlay"></div>
      <h1>Watalappan: Sri Lanka’s Liquid Gold Dessert</h1>
      <p>Watalappan is Sri Lanka’s signature coconut-jaggery custard, often called “liquid gold” for its rich, caramel color and silky texture. Made from a delicate blend of coconut milk, jaggery, eggs, and aromatic spices like cardamom and nutmeg, it is a dessert that balances sweetness and spice perfectly. Traditionally served at weddings, festive gatherings, and religious celebrations, Watalappan is more than a dessert—it’s a cultural icon, passed down through generations of Sri Lankan families. Each bite tells a story of heritage, tradition, and culinary artistry.</p>
      <div className="hero-img-container">
        <img src="https://upload.wikimedia.org/wikipedia/commons/8/81/Watalappan-Sri_Lanka.jpg" alt="Watalappan Dessert" className="hero-img" />
        <p className="attribution">Photo by Ji‑Elle / Wikimedia Commons (CC‑BY‑SA 3.0)</p>
      </div>
    </section>
  );
}
