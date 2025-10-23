import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiMail, HiPhone, HiLocationMarker, HiClock } from 'react-icons/hi';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you! We will get back to you soon.');
    setFormData({ name: '', email: '', company: '', phone: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <HiMail />,
      title: 'Email Us',
      content: 'info@algosage.com',
      link: 'mailto:info@algosage.com'
    },
    {
      icon: <HiPhone />,
      title: 'Call Us',
      content: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: <HiLocationMarker />,
      title: 'Visit Us',
      content: '123 Business Ave, Suite 100, New York, NY 10001',
      link: null
    },
    {
      icon: <HiClock />,
      title: 'Business Hours',
      content: 'Mon-Fri: 9AM-6PM EST',
      link: null
    }
  ];

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subtitle">
            Let's discuss how we can transform your business
          </p>
        </motion.div>

        <motion.div 
          className="neon-container"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          <div className="contact-content">
            <motion.div 
              className="contact-info-section"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h3 className="contact-heading">Contact Information</h3>
              <p className="contact-description">
                Fill out the form and our team will get back to you within 24 hours.
              </p>

              <div className="contact-info-grid">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="contact-info-item"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="info-icon">{info.icon}</div>
                    <div className="info-details">
                      <div className="info-title">{info.title}</div>
                      {info.link ? (
                        <a href={info.link} className="info-content">{info.content}</a>
                      ) : (
                        <div className="info-content">{info.content}</div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.form 
              className="contact-form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group form-group-full">
                <textarea
                  name="message"
                  placeholder="Your Message *"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="form-input form-textarea"
                ></textarea>
              </div>

              <motion.button 
                type="submit" 
                className="btn btn-primary btn-submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;