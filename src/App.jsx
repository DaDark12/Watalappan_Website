import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Recipe from './components/Recipe';
import History from './components/History';
import Gallery from './components/Gallery';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Recipe />
      <History />
      <Gallery />
    </>
  );
}
