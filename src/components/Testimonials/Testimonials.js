import React from 'react';
import { motion } from 'framer-motion';
import { HiStar, HiChatAlt2 } from 'react-icons/hi';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CTO, TechInnovate',
      content: 'AlgoSage transformed our digital infrastructure. Their team delivered beyond our expectations with exceptional attention to detail.',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      position: 'Operations Director, GlobalCorp',
      content: 'The cloud migration was seamless. Their expertise and support throughout the process were invaluable to our business continuity.',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      position: 'Product Manager, StartUpScale',
      content: 'Outstanding service and technical excellence. They understood our vision and delivered a solution that perfectly matches our needs.',
      rating: 5,
      avatar: 'ER'
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
        duration: 0.6
      }
    }
  };

  return (
    <section id="testimonials" className="testimonials section-padding">
      <div className="container">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Don't just take our word for it. Here's what our clients have to say about 
            their experience working with us.
          </p>
        </motion.div>

        <motion.div 
          className="testimonials-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="testimonial-card"
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <HiChatAlt2 className="quote-icon" />
              
              <div className="rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <HiStar key={i} className="star-icon" />
                ))}
              </div>

              <p className="testimonial-content">"{testimonial.content}"</p>

              <div className="client-info">
                <div className="client-avatar">
                  {testimonial.avatar}
                </div>
                <div className="client-details">
                  <div className="client-name">{testimonial.name}</div>
                  <div className="client-position">{testimonial.position}</div>
                </div>
              </div>

              <div className="testimonial-hover-effect"></div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="testimonials-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3>Ready to join our satisfied clients?</h3>
          <motion.button 
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;