import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiArrowRight, HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import './Hero.css';
import videoContent from '../../../src/assets/anime-final.mp4'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const heroSlides = [
    {
      title: "Empowering Tomorrow's",
      highlight: "Business Today",
      subtitle: "with Dynamics 365 & Power Apps",
      description: "Transforming Visions into Reality, from Development to Unwavering Support",
      primaryBtn: "Explore Our Solutions",
      secondaryBtn: "Get Free Consultation",
      badge: "AI-Powered Solutions"
    },
    {
      title: "Transform Your Business",
      highlight: "with Microsoft Cloud",
      subtitle: "Power Platform Solutions",
      description: "Unlock the full potential of your enterprise with cutting-edge technology",
      primaryBtn: "Start Your Journey",
      secondaryBtn: "Schedule Demo",
      badge: "Cloud-First Approach"
    },
    {
      title: "Drive Innovation",
      highlight: "at Scale",
      subtitle: "with Expert Consulting",
      description: "150+ certified consultants ready to elevate your business operations",
      primaryBtn: "Meet Our Team",
      secondaryBtn: "View Case Studies",
      badge: "Proven Excellence"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <section className="hero" id="home">
      {/* <div className="hero-bg-effects">
        <motion.div
          className="glow-orb glow-orb-1"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="glow-orb glow-orb-2"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className="glow-orb glow-orb-3"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, -50, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 7, repeat: Infinity }}
        />
      </div> */}
      <div className="container">
        <div className="hero-slider" onMouseEnter={() => setIsAutoPlaying(false)} onMouseLeave={() => setIsAutoPlaying(true)}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              className="hero-wrapper"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <div className="hero-content">
                <motion.div 
                  className="hero-badge"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="badge-icon">✨</span>
                  <span>{heroSlides[currentSlide].badge}</span>
                </motion.div>

                <motion.h1 
                  className="hero-title"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {heroSlides[currentSlide].title}<br />
                  <span className="gradient-text">{heroSlides[currentSlide].highlight}</span>&nbsp;
                  {heroSlides[currentSlide].subtitle}
                </motion.h1>

                <motion.p 
                  className="hero-subtitle"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {heroSlides[currentSlide].description}
                </motion.p>

                <motion.div 
                  className="hero-actions"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <a href="#solutions" className="btn btn-primary">
                    <span>{heroSlides[currentSlide].primaryBtn}</span>
                    <HiArrowRight />
                  </a>
                  
                  <a href="#contact" className="btn btn-secondary">
                    <span>{heroSlides[currentSlide].secondaryBtn}</span>
                  </a>
                </motion.div>
              </div>

              <motion.div 
                className="hero-visual"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                
                <video autoPlay="{true}" muted loop id="myVideo">
                  <source src={videoContent} type="video/mp4" />
                </video>
                {/* Enhanced Animated Visual with CSS Hands */}
                {/* <div className="neon-tech-visual"> */}
                  {/* Central Digital Interface */}
                  {/* <div className="digital-interface"> */}
                    {/* <div className="interface-ring ring-1"></div>
                    <div className="interface-ring ring-2"></div>
                    <div className="interface-ring ring-3"></div>
                    
                    <div className="interface-core">
                      <div className="core-pulse"></div>
                      <div className="core-icon">◆</div>
                    </div> */}

                    {/* Data Particles */}
                    {/* {[...Array(12)].map((_, i) => (
                      <div 
                        key={i} 
                        className="data-particle"
                        style={{
                          '--angle': `${i * 30}deg`,
                          '--delay': `${i * 0.1}s`
                        }}
                      ></div>
                    ))} */}
                  {/* </div> */}

                  {/* Left Hand */}
                  {/* <div className="tech-hand hand-left">
                    <div className="hand-glow"></div>
                    <svg viewBox="0 0 200 200" className="hand-svg">
                      <defs>
                        <linearGradient id="handGradientLeft" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#00f3ff" />
                          <stop offset="100%" stopColor="#b967ff" />
                        </linearGradient>
                      </defs>
                      <path 
                        className="hand-outline"
                        d="M 40 80 Q 60 50, 80 60 L 90 100 Q 80 120, 60 110 Z" 
                        fill="url(#handGradientLeft)"
                        stroke="#00f3ff"
                        strokeWidth="2"
                      />
                      <path 
                        className="hand-finger"
                        d="M 70 50 Q 85 25, 90 45"
                        stroke="url(#handGradientLeft)"
                        strokeWidth="12"
                        fill="none"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div> */}

                  {/* Right Hand */}
                  {/* <div className="tech-hand hand-right">
                    <div className="hand-glow"></div>
                    <svg viewBox="0 0 200 200" className="hand-svg">
                      <defs>
                        <linearGradient id="handGradientRight" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#b967ff" />
                          <stop offset="100%" stopColor="#ff2e8b" />
                        </linearGradient>
                      </defs>
                      <path 
                        className="hand-outline"
                        d="M 160 80 Q 140 50, 120 60 L 110 100 Q 120 120, 140 110 Z" 
                        fill="url(#handGradientRight)"
                        stroke="#b967ff"
                        strokeWidth="2"
                      />
                      <path 
                        className="hand-finger"
                        d="M 130 50 Q 115 25, 110 45"
                        stroke="url(#handGradientRight)"
                        strokeWidth="12"
                        fill="none"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div> */}

                  {/* Connection Lines */}
                  {/* <svg className="connection-lines" viewBox="0 0 400 400">
                    <line className="connect-line" x1="100" y1="200" x2="200" y2="200" stroke="#00f3ff" strokeWidth="2" />
                    <line className="connect-line" x1="300" y1="200" x2="200" y2="200" stroke="#b967ff" strokeWidth="2" />
                  </svg> */}
                {/* </div> */}
                {/* <img
                  src={imgGIF}
                  alt="Hand touching AI screen"
                  className="hero-gif-image"
                /> */}
              </motion.div>

            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          {/* <button className="hero-nav-btn hero-nav-prev" onClick={prevSlide} aria-label="Previous slide">
            <HiChevronLeft />
          </button>
          <button className="hero-nav-btn hero-nav-next" onClick={nextSlide} aria-label="Next slide">
            <HiChevronRight />
          </button> */}

          {/* Slide Indicators */}
          <div className="hero-indicators">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                className={`hero-indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
