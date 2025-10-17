import React from 'react';
import { motion } from 'framer-motion';
import './Clients.css';

const Clients = () => {
  const clients = [
    { name: 'TechCorp', logo: 'TC' },
    { name: 'InnovateLabs', logo: 'IL' },
    { name: 'GlobalSoft', logo: 'GS' },
    { name: 'DataSystems', logo: 'DS' },
    { name: 'CloudNet', logo: 'CN' },
    { name: 'SecureTech', logo: 'ST' },
    { name: 'FutureWorks', logo: 'FW' },
    { name: 'DigitalPlus', logo: 'DP' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="clients" className="clients section-padding">
      <div className="container">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Trusted by Industry Leaders</h2>
          <p className="section-subtitle">
            We're proud to partner with forward-thinking companies across various industries 
            to deliver exceptional digital solutions.
          </p>
        </motion.div>

        <motion.div 
          className="clients-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              className="client-card"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.1,
                y: -5
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="client-logo">
                {client.logo}
              </div>
              <div className="client-name">{client.name}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="clients-stats"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="stat">
            <div className="stat-number">98%</div>
            <div className="stat-label">Client Retention</div>
          </div>
          <div className="stat">
            <div className="stat-number">4.9/5</div>
            <div className="stat-label">Customer Satisfaction</div>
          </div>
          <div className="stat">
            <div className="stat-number">150+</div>
            <div className="stat-label">Projects Delivered</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;