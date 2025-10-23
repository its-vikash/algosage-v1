import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Expertise from './components/Expertise/Expertise';
import Solutions from './components/Solutions/Solutions';
import Services from './components/Services/Services';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ParticleBackground from './components/Effects/ParticleBackground';
import './App.css';

function App() {
  return (
    <div className="App">
      <ParticleBackground />
      <Header />
      <main className="main-content">
        <Hero />
        <Expertise />
        <Solutions />
        <Services />
        <About />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;