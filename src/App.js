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
import './App.css';
// import AnimatedDots from './components/Effects/AnimatedDots'
import Particles from './components/Effects/Particles'
import SplashCursor from './components/Effects/SplashCursor'

function App() {
  return (
    <div className="App">
      <SplashCursor />
      {/* <AnimatedDots /> */}
      <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
        <Particles
          particleColors={['#07e6ccff', '#1076fbff']}
          particleCount={6000}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
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