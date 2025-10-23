import React from 'react';
import { motion } from 'framer-motion';
import { 
  HiCode, 
  HiCloud, 
  HiChartBar, 
  HiShieldCheck, 
  HiCog, 
  HiLightningBolt 
} from 'react-icons/hi';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <HiCode />,
      title: 'Implementation Services',
      description: 'Expert Dynamics 365 implementation tailored to your business needs with seamless integration.',
      features: ['Custom Configuration', 'Data Migration', 'System Integration', 'Go-Live Support']
    },
    {
      icon: <HiCloud />,
      title: 'Upgrade Services',
      description: 'Modernize your business with Dynamics 365 Upgrade Services. We assess, recommend, and upgrade.',
      features: ['System Assessment', 'Upgrade Planning', 'Migration Support', 'Testing & Validation']
    },
    {
      icon: <HiChartBar />,
      title: 'Support Services',
      description: 'Access proactive Dynamics 365 Support services from 150+ Microsoft-certified consultants.',
      features: ['24/7 Support', 'Issue Resolution', 'System Monitoring', 'Performance Optimization']
    },
    {
      icon: <HiShieldCheck />,
      title: 'Consulting Services',
      description: 'Maximize ROI with comprehensive strategies and expert implementation.',
      features: ['Business Analysis', 'Solution Design', 'Best Practices', 'ROI Optimization']
    },
    {
      icon: <HiCog />,
      title: 'Audit Services',
      description: 'Evaluate business effectiveness with business-centric Dynamics 365 Audit services.',
      features: ['System Health Check', 'Performance Review', 'Security Audit', 'Compliance Check']
    },
    {
      icon: <HiLightningBolt />,
      title: 'Training Services',
      description: 'Reap utmost value by utilizing advanced features with 360-degree training approach.',
      features: ['User Training', 'Admin Training', 'Custom Workshops', 'Documentation']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="services section" id="services">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="section-subtitle">
            Comprehensive solutions designed to transform your business operations
          </p>
        </motion.div>

        <motion.div 
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card card"
              variants={cardVariants}
              whileHover={{ y: -10 }}
            >
              <div className="service-icon">
                {service.icon}
              </div>
              
              <h3 className="service-title">{service.title}</h3>
              
              <p className="service-description">{service.description}</p>
              
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>
                    <span className="check-icon">✓</span>
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

export default Services;
