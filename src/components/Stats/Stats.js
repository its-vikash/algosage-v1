import React from 'react';
import { motion } from 'framer-motion';
import { HiCheckCircle, HiUsers, HiTrendingUp, HiGlobe } from 'react-icons/hi';
import './Stats.css';

const Stats = () => {
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
      description: 'Microsoft-certified experts'
    }
  ];

  return (
    <section className="stats section" id="stats">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Proven <span className="gradient-text">Results</span>
          </h2>
        </motion.div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="stat-icon">
                {stat.icon}
              </div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-description">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
