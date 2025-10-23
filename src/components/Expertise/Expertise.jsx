import React from 'react';
import { motion } from 'framer-motion';
import { HiCode, HiLightningBolt, HiShieldCheck } from 'react-icons/hi';
import './Expertise.css';

const Expertise = () => {
  const expertiseData = [
    {
      icon: <HiCode />,
      title: 'Dynamics 365 Development',
      description: 'Tailored CRM & ERP solutions that streamline your operations and drive growth across sales, service, finance, and supply chain.',
      features: ['Custom CRM Solutions', 'ERP Integration', 'Sales Automation', 'Supply Chain']
    },
    {
      icon: <HiLightningBolt />,
      title: 'Power Apps Innovation',
      description: 'Rapidly build custom low-code applications that solve unique business challenges and empower teams with intuitive tools.',
      features: ['Low-Code Development', 'Custom Applications', 'Workflow Automation', 'Team Empowerment']
    },
    {
      icon: <HiShieldCheck />,
      title: 'Project Management & Support',
      description: 'From concept to deployment and beyond, we provide end-to-end project management and continuous, proactive support.',
      features: ['Project Planning', 'Implementation', 'Continuous Support', 'Your Success']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
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
    <section className="expertise section" id="expertise">
      <div className="container">
        <motion.div 
          className="expertise-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {expertiseData.map((item, index) => (
            <motion.div
              key={index}
              className="expertise-card card"
              variants={cardVariants}
              whileHover={{ y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <div className="expertise-icon-wrapper">
                <div className={`expertise-icon icon-${index + 1}`}>
                  {item.icon}
                </div>
              </div>
              
              <h3 className="expertise-title">{item.title}</h3>
              
              <p className="expertise-description">{item.description}</p>
              
              <ul className="expertise-features">
                {item.features.map((feature, idx) => (
                  <li key={idx}>
                    <span className="feature-dot">●</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Expertise;