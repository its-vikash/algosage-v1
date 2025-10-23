import React from 'react';
import { motion } from 'framer-motion';
import { HiChip, HiCloud, HiRefresh } from 'react-icons/hi';
import './Solutions.css';

const Solutions = () => {
  const solutions = [
    {
      icon: <HiChip />,
      title: 'Business Central',
      subtitle: 'All-in-one business management',
      description: 'An all-in-one business management solution designed for SMBs that offers a 360-degree holistic view of the entire business.',
      color: 'cyan'
    },
    {
      icon: <HiCloud />,
      title: 'Finance & Operations',
      subtitle: 'Simplify financial operations',
      description: 'Simplify complex financial operations while getting real-time data analytics and accurate insights.',
      color: 'purple'
    },
    {
      icon: <HiRefresh />,
      title: 'Supply Chain Management',
      subtitle: 'Automate supply chain',
      description: 'Automate your entire supply chain process. Boost efficiency, cut costs, enhance accuracy.',
      color: 'pink'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
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
            Intelligent Solutions. <span className="gradient-text">Infinite Possibilities</span>
          </h2>
          <p className="section-subtitle">
            Comprehensive solutions designed to transform your business operations
          </p>
        </motion.div>

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
      </div>
    </section>
  );
};

export default Solutions;
