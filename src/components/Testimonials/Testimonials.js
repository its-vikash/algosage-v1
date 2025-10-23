import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiStar, HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import './Testimonials.css';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const testimonials = [
    {
      name: 'John Anderson',
      position: 'CTO, TechCorp Solutions',
      content: 'We were using an outgrown legacy system with potential chances of errors. Dynamics Square successfully implemented Dynamics 365 Finance and Operations in the stated time without any after-sales cost.',
      rating: 5,
      company: 'TechCorp',
      image: 'https://i.pravatar.cc/150?img=12'
    },
    {
      name: 'Sarah Mitchell',
      position: 'Operations Director, Global Retail',
      content: 'The NAV to Business Central upgrade was our best choice for business growth and simplified operations. Dynamics Square made the entire process smooth and efficient.',
      rating: 5,
      company: 'Global Retail',
      image: 'https://i.pravatar.cc/150?img=47'
    },
    {
      name: 'Michael Chen',
      position: 'IT Manager, Manufacturing Pro',
      content: 'Dynamics Square understood our requirements and suggested Microsoft Power BI for our data analytics needs. They also integrated this with our existing ERP solution for continuous data flow.',
      rating: 5,
      company: 'Manufacturing Pro',
      image: 'https://i.pravatar.cc/150?img=33'
    },
    {
      name: 'Emily Rodriguez',
      position: 'CEO, HealthCare Plus',
      content: 'Dynamics Square is a fantastic partner and helped us move from an existing CRM to Dynamics 365. The process improvement was significant.',
      rating: 5,
      company: 'HealthCare Plus',
      image: 'https://i.pravatar.cc/150?img=26'
    },
    {
      name: 'David Kumar',
      position: 'Project Manager, FinanceHub',
      content: 'We had an excellent experience with Dynamics Square. The team was incredibly helpful and responsive, ensuring our needs were met quickly.',
      rating: 5,
      company: 'FinanceHub',
      image: 'https://i.pravatar.cc/150?img=60'
    },
    {
      name: 'Lisa Thompson',
      position: 'VP Operations, Logistics World',
      content: 'AlgoSage delivered a comprehensive supply chain solution that improved our efficiency by 45%. True professionals!',
      rating: 5,
      company: 'Logistics World',
      image: 'https://i.pravatar.cc/150?img=45'
    }
  ];

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-scroll every 5 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying, isMobile]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = isMobile ? testimonials.length - 1 : testimonials.length - 2;
      if (prevIndex >= maxIndex) {
        return 0;
      }
      return prevIndex + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = isMobile ? testimonials.length - 1 : testimonials.length - 2;
      if (prevIndex === 0) {
        return maxIndex;
      }
      return prevIndex - 1;
    });
  };

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  // Determine how many cards to show
  const visibleTestimonials = isMobile 
    ? [testimonials[currentIndex]] 
    : [testimonials[currentIndex], testimonials[currentIndex + 1]].filter(Boolean);

  return (
    <section className="testimonials section" id="testimonials">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="section-subtitle">
            What our clients say about working with us
          </p>
        </motion.div>

        <div 
          className="testimonials-slider-wrapper"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="testimonials-slider">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className={`testimonials-grid ${isMobile ? 'single-card' : ''}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                {visibleTestimonials.map((testimonial, index) => (
                  <div key={index} className="testimonial-card card">
                    <div className="testimonial-rating">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <HiStar key={i} className="star-icon" />
                      ))}
                    </div>

                    <p className="testimonial-content">"{testimonial.content}"</p>

                    <div className="testimonial-author">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="author-avatar"
                      />
                      <div className="author-info">
                        <div className="author-name">{testimonial.name}</div>
                        <div className="author-position">{testimonial.position}</div>
                        <div className="author-company">{testimonial.company}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="slider-btn slider-btn-prev"
            aria-label="Previous testimonials"
          >
            <HiChevronLeft />
          </button>

          <button
            onClick={nextSlide}
            className="slider-btn slider-btn-next"
            aria-label="Next testimonials"
          >
            <HiChevronRight />
          </button>

          {/* Indicators */}
          <div className="slider-indicators">
            {[...Array(isMobile ? testimonials.length : Math.ceil((testimonials.length - 1)))].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`indicator ${index === currentIndex ? 'active' : ''}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
