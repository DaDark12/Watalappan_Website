import React from 'react';
import WatalappanSVG from '../assets/WatalappanSVG';

export default function WatalappanLanding() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">🍮 Watalappan</div>
        <div className="links">
          <a href="#hero">Home</a>
          <a href="#recipe">Recipe</a>
          <a href="#history">History</a>
          <a href="#gallery">Gallery</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <h1>Watalappan: The Royal Dessert of Sri Lanka</h1>
        <p>A creamy, caramel-rich pudding made with coconut milk, jaggery, and fragrant spices, treasured across Sri Lanka for generations.</p>
        <WatalappanSVG />
      </section>

      {/* Recipe Section */}
      <section id="recipe" className="section">
        <h2>Recipe</h2>
        <div className="card">
          <p>Ingredients: Coconut milk, jaggery, eggs, cardamom, nutmeg, pandan leaves.</p>
          <p>Method: Mix ingredients → steam gently → chill → serve with coconut cream drizzle.</p>
        </div>
      </section>

      {/* History Section */}
      <section id="history" className="section">
        <h2>History</h2>
        <div className="card">
          <p>Watalappan originated in Sri Lanka influenced by Malay desserts, becoming a signature coconut-jaggery custard served at festive occasions and weddings.</p>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="section">
        <h2>Gallery</h2>
        <div className="card">
          <img src="./src/assets/watalappan.svg" alt="Watalappan Dish" className="w-full" />
        </div>
      </section>

      {/* Footer */}
      <footer>
        &copy; 2025 Watalappan Website • Sri Lanka 🇱🇰
      </footer>
    </div>
  );
}
