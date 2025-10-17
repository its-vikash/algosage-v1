import React from 'react';
import './App.css';
import './App.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import About from './components/About/About';
import Clients from './components/Clients/Clients';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ThreeDots from './components/Effects/ThreeDots';
import MouseFollower from './components/Effects/MouseFollower';

function App() {
  return (
    <div className="App relative">
      <ThreeDots />
      <MouseFollower />
      <Header />
      <Hero />
      <Services />
      <About />
      <Clients />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;