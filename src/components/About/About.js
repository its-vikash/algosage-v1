import React from 'react';
import { motion } from 'framer-motion';
import { HiCheckCircle, HiUsers, HiTrendingUp, HiGlobe } from 'react-icons/hi';
import './About.css';

const About = () => {
  const stats = [
    { icon: <HiUsers />, number: '500+', label: 'Happy Clients' },
    { icon: <HiTrendingUp />, number: '95%', label: 'Success Rate' },
    { icon: <HiGlobe />, number: '50+', label: 'Countries' }
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We stay ahead of technology trends to deliver cutting-edge solutions.'
    },
    {
      title: 'Quality',
      description: 'Every project meets the highest standards of excellence and reliability.'
    },
    {
      title: 'Partnership',
      description: 'We build long-term relationships based on trust and mutual success.'
    }
  ];

  return (
    <section id="about" className="about section-padding">
      <div className="container">
        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">About AlgoSage</h2>
            <p className="about-description">
              For over a decade, we've been at the forefront of digital transformation, 
              helping businesses of all sizes leverage technology to achieve their goals. 
              Our team of experts combines technical excellence with business acumen to 
              deliver solutions that drive real results.
            </p>

            <div className="about-features">
              <div className="feature">
                <HiCheckCircle className="feature-icon" />
                <span>10+ Years of Experience</span>
              </div>
              <div className="feature">
                <HiCheckCircle className="feature-icon" />
                <span>Certified Experts</span>
              </div>
              <div className="feature">
                <HiCheckCircle className="feature-icon" />
                <span>24/7 Support</span>
              </div>
              <div className="feature">
                <HiCheckCircle className="feature-icon" />
                <span>Proven Methodologies</span>
              </div>
            </div>

            <motion.button 
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More About Us
            </motion.button>
          </motion.div>

          <motion.div 
            className="about-visual"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="visual-main">
              <div className="team-illustration">
                <div className="person person-1"></div>
                <div className="person person-2"></div>
                <div className="person person-3"></div>
                <div className="collaboration-lines"></div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div 
          className="about-stats"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.label}
              className="stat-card"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Values Section */}
        <motion.div 
          className="about-values"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3>Our Values</h3>
          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div 
                key={value.title}
                className="value-card"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <h4>{value.title}</h4>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;