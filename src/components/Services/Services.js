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
      description: 'Expert Dynamics 365 implementation tailored to your business needs with seamless integration and deployment.',
      features: ['Custom Configuration', 'Data Migration', 'System Integration', 'Go-Live Support']
    },
    {
      icon: <HiCloud />,
      title: 'Cloud Migration',
      description: 'Secure and efficient migration to Microsoft cloud platforms with zero downtime and complete data integrity.',
      features: ['Azure Migration', 'Hybrid Solutions', 'Security Setup', 'Performance Optimization']
    },
    {
      icon: <HiChartBar />,
      title: 'Business Intelligence',
      description: 'Transform data into actionable insights with Power BI and advanced analytics for smarter decision-making.',
      features: ['Power BI Dashboards', 'Predictive Analytics', 'Real-time Reporting', 'Data Visualization']
    },
    {
      icon: <HiShieldCheck />,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security solutions ensuring your data protection and regulatory compliance.',
      features: ['Security Audits', 'Compliance Management', 'Access Control', 'Data Encryption']
    },
    {
      icon: <HiCog />,
      title: 'System Optimization',
      description: 'Enhance performance and efficiency of your existing Dynamics 365 systems with expert optimization.',
      features: ['Performance Tuning', 'Workflow Automation', 'Custom Development', 'Integration Enhancement']
    },
    {
      icon: <HiLightningBolt />,
      title: 'Training & Support',
      description: '24/7 support and comprehensive training programs to ensure your team maximizes platform potential.',
      features: ['User Training', 'Technical Support', 'Documentation', 'Best Practices']
    }
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
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
            Comprehensive solutions designed to transform your business operations and drive sustainable growth
          </p>
        </motion.div>

        <motion.div 
          className="neon-container"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
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
        </motion.div>
      </div>
    </section>
  );
};

export default Services;