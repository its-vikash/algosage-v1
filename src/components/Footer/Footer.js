import React from 'react';
import { motion } from 'framer-motion';
import { 
  HiMail, 
  HiPhone, 
  HiLocationMarker 
} from 'react-icons/hi';
import { 
  FaLinkedinIn, 
  FaTwitter, 
  FaFacebookF, 
  FaInstagram,
  FaGithub
} from 'react-icons/fa';
import './Footer.css';
import imgLogo from '../../assets/logo.png'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    solutions: [
      { name: 'Dynamics 365', href: '#solutions' },
      { name: 'Power Apps', href: '#solutions' },
      { name: 'Power BI', href: '#solutions' },
      { name: 'Azure Services', href: '#solutions' }
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Team', href: '#about' },
      { name: 'Careers', href: '#about' },
      { name: 'Blog', href: '#services' }
    ],
    support: [
      { name: 'Help Center', href: '#contact' },
      { name: 'Documentation', href: '#services' },
      { name: 'Contact Us', href: '#contact' },
      { name: 'FAQs', href: '#services' }
    ]
  };

  const socialLinks = [
    { icon: <FaLinkedinIn />, href: '#', name: 'LinkedIn' },
    { icon: <FaTwitter />, href: '#', name: 'Twitter' },
    { icon: <FaFacebookF />, href: '#', name: 'Facebook' },
    { icon: <FaInstagram />, href: '#', name: 'Instagram' },
    { icon: <FaGithub />, href: '#', name: 'GitHub' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div 
            className="footer-brand"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="footer-logo">
              {/* <span className="logo-icon">◆</span>
              <span className="logo-text">ALGOSAGE</span> */}
              <img src={imgLogo} alt='ALGOSAGE' /> 
            </div>
            <p className="footer-description">
              Empowering businesses through innovative Microsoft Dynamics 365 
              and Power Platform solutions.
            </p>
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="social-link"
                  aria-label={social.name}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="footer-links-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="footer-heading">Solutions</h4>
            <ul className="footer-links">
              {footerLinks.solutions.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            className="footer-links-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-links">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            className="footer-links-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="footer-heading">Support</h4>
            <ul className="footer-links">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            className="footer-contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="footer-heading">Contact</h4>
            <div className="contact-items">
              <div className="contact-item">
                <HiMail className="contact-icon" />
                <a href="mailto:info@algosage.com">info@algosage.com</a>
              </div>
              <div className="contact-item">
                <HiPhone className="contact-icon" />
                <a href="tel:+15551234567">+1 (555) 123-4567</a>
              </div>
              <div className="contact-item">
                <HiLocationMarker className="contact-icon" />
                <span>New York, NY 10001</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              © {currentYear} AlgoSage. All rights reserved.
            </p>
            <div className="footer-legal">
              <a href="#privacy">Privacy Policy</a>
              <span className="separator">|</span>
              <a href="#terms">Terms of Service</a>
              <span className="separator">|</span>
              <a href="#cookies">Cookie Policy</a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;