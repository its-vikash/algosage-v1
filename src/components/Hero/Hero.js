import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';
import './Hero.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-stars"></div>
      
      <div className="container">
        <motion.div 
          className="neon-container hero-wrapper"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="hero-content">
            <motion.h1 className="hero-title" variants={itemVariants}>
              Empowering Tomorrow's<br />
              <span className="gradient-text">Business Today</span> with<br />
              Dynamics 365 & Power Apps
            </motion.h1>

            <motion.p className="hero-subtitle" variants={itemVariants}>
              Transforming Visions into Reality, from Development to Unwavering Support
            </motion.p>

            <motion.div className="hero-buttons" variants={itemVariants}>
              <a href="#solutions" className="btn btn-primary">
                Explore Our Solutions <HiArrowRight />
              </a>
              <a href="#contact" className="btn btn-secondary">
                Get a Free Consultation
              </a>
            </motion.div>
          </div>

          <motion.div 
            className="hero-visual"
            variants={itemVariants}
          >
            {/* Neon Hand SVG - Matching Your Image */}
            <svg className="neon-hand-svg" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <filter id="neonGlow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
                
                <linearGradient id="handGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor: '#00f3ff'}} />
                  <stop offset="50%" style={{stopColor: '#b967ff'}} />
                  <stop offset="100%" style={{stopColor: '#ff2e8b'}} />
                </linearGradient>

                <linearGradient id="screenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor: '#00f3ff', stopOpacity: 0.3}} />
                  <stop offset="100%" style={{stopColor: '#b967ff', stopOpacity: 0.3}} />
                </linearGradient>
              </defs>

              {/* Digital Grid Lines */}
              <g className="grid-lines" opacity="0.15">
                {[...Array(20)].map((_, i) => (
                  <line 
                    key={`h-${i}`}
                    x1="0" 
                    y1={i * 20} 
                    x2="400" 
                    y2={i * 20}
                    stroke="url(#handGradient)"
                    strokeWidth="0.5"
                  />
                ))}
                {[...Array(20)].map((_, i) => (
                  <line 
                    key={`v-${i}`}
                    x1={i * 20} 
                    y1="0" 
                    x2={i * 20} 
                    y2="400"
                    stroke="url(#handGradient)"
                    strokeWidth="0.5"
                  />
                ))}
              </g>

              {/* Screen/Device */}
              <g className="device">
                <rect 
                  x="250" 
                  y="100" 
                  width="120" 
                  height="180" 
                  rx="15" 
                  fill="url(#screenGradient)"
                  stroke="url(#handGradient)"
                  strokeWidth="3"
                  filter="url(#neonGlow)"
                />
                
                {/* Screen Content Lines */}
                <line x1="265" y1="120" x2="355" y2="120" stroke="#00f3ff" strokeWidth="2" opacity="0.6"/>
                <line x1="265" y1="140" x2="340" y2="140" stroke="#b967ff" strokeWidth="2" opacity="0.6"/>
                <line x1="265" y1="160" x2="355" y2="160" stroke="#ff2e8b" strokeWidth="2" opacity="0.6"/>
                <line x1="265" y1="180" x2="320" y2="180" stroke="#00f3ff" strokeWidth="2" opacity="0.6"/>
                
                {/* Screen Icon */}
                <circle cx="310" cy="220" r="20" fill="none" stroke="#00f3ff" strokeWidth="2" opacity="0.6"/>
                <path d="M 310 210 L 310 230 M 300 220 L 320 220" stroke="#00f3ff" strokeWidth="2" opacity="0.6"/>
              </g>

              {/* Hand Pointing */}
              <g className="neon-hand" filter="url(#neonGlow)">
                {/* Palm */}
                <ellipse 
                  cx="150" 
                  cy="220" 
                  rx="40" 
                  ry="50" 
                  fill="url(#handGradient)"
                  opacity="0.7"
                  transform="rotate(-15 150 220)"
                />
                
                {/* Index Finger (pointing) */}
                <path 
                  d="M 170 200 Q 200 180, 230 165 Q 245 158, 255 160 L 258 165 Q 250 168, 238 175 Q 210 190, 180 210 Z"
                  fill="url(#handGradient)"
                  stroke="#00f3ff"
                  strokeWidth="1.5"
                  opacity="0.9"
                />
                
                {/* Thumb */}
                <ellipse 
                  cx="130" 
                  cy="200" 
                  rx="15" 
                  ry="25" 
                  fill="url(#handGradient)"
                  opacity="0.7"
                  transform="rotate(30 130 200)"
                />
                
                {/* Other Fingers (folded) */}
                <ellipse cx="155" cy="235" rx="12" ry="20" fill="url(#handGradient)" opacity="0.6" transform="rotate(-10 155 235)"/>
                <ellipse cx="145" cy="245" rx="12" ry="20" fill="url(#handGradient)" opacity="0.6" transform="rotate(-5 145 245)"/>
                <ellipse cx="135" cy="250" rx="12" ry="18" fill="url(#handGradient)" opacity="0.6"/>
                
                {/* Wrist */}
                <rect 
                  x="110" 
                  y="255" 
                  width="45" 
                  height="30" 
                  rx="10" 
                  fill="url(#handGradient)"
                  opacity="0.6"
                  transform="rotate(-10 130 270)"
                />
              </g>

              {/* Connection Lines/Particles */}
              <g className="particles">
                <circle cx="240" cy="170" r="3" fill="#00f3ff" className="particle-float p1">
                  <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite"/>
                </circle>
                <circle cx="220" cy="155" r="2" fill="#b967ff" className="particle-float p2">
                  <animate attributeName="opacity" values="0.5;1;0.5" dur="2.5s" repeatCount="indefinite"/>
                </circle>
                <circle cx="260" cy="180" r="2.5" fill="#ff2e8b" className="particle-float p3">
                  <animate attributeName="opacity" values="0.4;1;0.4" dur="3s" repeatCount="indefinite"/>
                </circle>
                
                {/* Connection lines */}
                <path 
                  d="M 255 165 Q 260 150, 270 135"
                  stroke="#00f3ff"
                  strokeWidth="1"
                  fill="none"
                  opacity="0.3"
                  strokeDasharray="5,5"
                >
                  <animate attributeName="stroke-dashoffset" from="0" to="20" dur="1s" repeatCount="indefinite"/>
                </path>
              </g>

              {/* Data Flow Animation */}
              <g className="data-flow">
                <circle cx="0" cy="0" r="2" fill="#00f3ff">
                  <animateMotion 
                    path="M 255 165 Q 260 150, 270 135"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
            </svg>
          </motion.div>
        </motion.div>

        {/* Our Expertise Section */}
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ marginTop: '4rem' }}
        >
          <h2 className="section-title">
            Our <span className="gradient-text">Expertise</span>
          </h2>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;