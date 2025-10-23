import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Global Retail Transformation',
      category: 'Retail & E-commerce',
      description: 'Implemented Dynamics 365 Commerce and CRM for a multinational retailer, resulting in 40% increase in customer engagement.',
      technologies: ['Dynamics 365', 'Power BI', 'Azure'],
      impact: '40% Growth'
    },
    {
      title: 'Manufacturing ERP Solution',
      category: 'Manufacturing',
      description: 'End-to-end ERP implementation streamlining supply chain and production processes for improved efficiency.',
      technologies: ['Finance & Operations', 'Supply Chain', 'IoT'],
      impact: '35% Efficiency'
    },
    {
      title: 'Healthcare Patient Portal',
      category: 'Healthcare',
      description: 'Custom Power Apps solution for patient management and telehealth services with HIPAA compliance.',
      technologies: ['Power Apps', 'Power Automate', 'Dataverse'],
      impact: '50% Faster'
    },
    {
      title: 'Financial Services Cloud',
      category: 'Financial Services',
      description: 'Cloud migration and implementation of Dynamics 365 for Financial Services with advanced analytics.',
      technologies: ['Azure', 'Power BI', 'AI Builder'],
      impact: '60% Cost Reduction'
    },
    {
      title: 'Real Estate CRM Platform',
      category: 'Real Estate',
      description: 'Comprehensive CRM solution for property management and customer relationship tracking.',
      technologies: ['Dynamics 365 Sales', 'Power Apps', 'SharePoint'],
      impact: '45% Sales Growth'
    },
    {
      title: 'Education LMS Integration',
      category: 'Education',
      description: 'Learning management system integration with Dynamics 365 for student and course management.',
      technologies: ['Power Platform', 'Teams', 'Azure'],
      impact: '70% Engagement'
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="projects section" id="projects">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Successful transformations across industries
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
            className="projects-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="project-card card"
                variants={cardVariants}
                whileHover={{ y: -10 }}
              >
                <div className="project-header">
                  <span className="project-category">{project.category}</span>
                  <span className="project-impact">{project.impact}</span>
                </div>
                
                <h3 className="project-title">{project.title}</h3>
                
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <a href="#contact" className="project-link">
                  Learn More <HiArrowRight />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;