import React from 'react';
import { motion } from 'framer-motion';
import { HiCheckCircle, HiUsers, HiTrendingUp, HiGlobe } from 'react-icons/hi';
import './About.css';

const About = () => {
  const stats = [
    { 
      number: '500+', 
      label: 'Businesses Helped', 
      icon: <HiCheckCircle />,
      description: 'Achieved expected ROI'
    },
    { 
      number: '2X', 
      label: 'Efficiency Boost', 
      icon: <HiUsers />,
      description: 'Centralized data structure'
    },
    { 
      number: '40%', 
      label: 'Cost Savings', 
      icon: <HiTrendingUp />,
      description: 'Improved cost savings'
    },
    { 
      number: '150+', 
      label: 'Certified Consultants', 
      icon: <HiGlobe />,
      description: 'Microsoft-certified Experts'
    }
  ];

  const features = [
    'Microsoft Certified Experts',
    'Agile Development Methodology',
    '24/7 Technical Support',
    'Customized Solutions',
    'Scalable Architecture',
    'Data-Driven Insights'
  ];

  return (
    <section className="about section" id="about">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            About <span className="gradient-text">AlgoSage</span>
          </h2>
          <p className="section-subtitle">
            Your trusted partner in digital transformation
          </p>
        </motion.div>

        <motion.div 
          className="neon-container"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <div className="about-content">
            <motion.div 
              className="about-text"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h3 className="about-heading">
                Empowering Businesses Through Innovation
              </h3>
              
              <p className="about-paragraph">
                For over a decade, we've been at the forefront of digital transformation, 
                helping businesses of all sizes leverage Microsoft Dynamics 365 and Power 
                Platform technologies to achieve their goals.
              </p>
              
              <p className="about-paragraph">
                Our team of certified experts combines technical excellence with business 
                acumen to deliver solutions that drive real results. We don't just implement 
                technology – we partner with you to transform your business operations and 
                unlock new opportunities for growth.
              </p>

              <div className="about-features">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="feature-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  >
                    <span className="feature-check">✓</span>
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="about-stats"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="stat-card"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                  <div className="stat-description">{stat.description}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
