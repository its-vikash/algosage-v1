import React from 'react';
import { motion } from 'framer-motion';
import { HiChip, HiCloud, HiRefresh } from 'react-icons/hi';
import './Solutions.css';

const Solutions = () => {
  const solutions = [
    {
      icon: <HiChip />,
      title: 'Dynamics 365 Zenith',
      subtitle: 'Elevate to new heights',
      description: 'Where AI-driven excellence meets infinite potential to scale your business operations.',
      color: 'cyan'
    },
    {
      icon: <HiCloud />,
      title: 'Power Apps Genesis',
      description: 'Forge the start of smart innovation with custom low-code apps that transform how you work.',
      color: 'purple'
    },
    {
      icon: <HiRefresh />,
      title: 'Managed Evolution',
      subtitle: 'The leap towards constant',
      description: "The leap towards constant innovation and stable growth through our expert managed solutions.",
      color: 'pink'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="solutions section" id="solutions">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            <span className="gradient-text">IGNITE YOUR</span><br/>
            ENTERPRISE FUTURE
          </h2>
          <p className="section-subtitle">
            Where AI-Driven Insights Meet Human-Centric Innovation.<br/>
            Powered by Dynamics 365 & Power Apps
          </p>
        </motion.div>

        <motion.div 
          className="solutions-actions"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <a href="#contact" className="btn btn-secondary">TRANSFORM NOW</a>
          <a href="#services" className="btn btn-primary">EXPLORE THE NEXUS</a>
        </motion.div>

        <motion.div 
          className="neon-container"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          <div className="section-header">
            <h3 className="section-title" style={{ fontSize: '2.5rem' }}>
              Intelligent Solutions. <span className="gradient-text">Infinite Possibilities</span>
            </h3>
          </div>

          <motion.div 
            className="solutions-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                className={`solution-card solution-${solution.color}`}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="solution-icon-container">
                  <div className={`solution-icon icon-bg-${solution.color}`}>
                    {solution.icon}
                  </div>
                </div>
                
                <h4 className="solution-title">{solution.title}</h4>
                
                {solution.subtitle && (
                  <p className="solution-subtitle">{solution.subtitle}</p>
                )}
                
                <p className="solution-description">{solution.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Solutions;
