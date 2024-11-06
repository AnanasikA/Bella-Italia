import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import FullMenu from './components/FullMenu';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FunFacts from './components/FunFacts';
import FeaturedDish from './components/FeaturedDish';
import Counter from './components/Counter';
import Reservation from './components/Reservation';

function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedDish />
      <About />
      <FunFacts />
      <Counter />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<FullMenu />} />
        <Route path="/reservation" element={<Reservation />} />
      </Routes>
    </Router>
  );
}

export default App;



