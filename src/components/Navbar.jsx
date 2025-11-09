import React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">🍮 Watalappan</div>
      <div className="links">
        <a href="#hero">Home</a>
        <a href="#recipe">Recipe</a>
        <a href="#history">History</a>
        <a href="#gallery">Gallery</a>
      </div>
    </nav>
  );
}
