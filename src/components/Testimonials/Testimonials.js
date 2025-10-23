import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiStar, HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
      position: 'Operations Director, Global Retail Inc.',
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
      content: 'Dynamics Square is a fantastic partner and helped us move from an existing CRM to Dynamics 365. The process improvement was significant, and the visibility to our company performance was exactly what we needed.',
      rating: 5,
      company: 'HealthCare Plus',
      image: 'https://i.pravatar.cc/150?img=26'
    },
    {
      name: 'David Kumar',
      position: 'Project Manager, FinanceHub',
      content: 'We had an excellent experience with Dynamics Square. The team was incredibly helpful and responsive, ensuring our needs were met quickly. They expertly translated our requirements into effective solutions.',
      rating: 5,
      company: 'FinanceHub',
      image: 'https://i.pravatar.cc/150?img=60'
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-12" id="testimonials">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            What our clients say about working with us
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Slider Container */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-card-bg backdrop-blur-md border border-primary-cyan/20 rounded-3xl p-8 md:p-12"
              >
                {/* Rating */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <HiStar key={i} className="text-yellow-400 text-2xl drop-shadow-[0_0_5px_rgba(255,215,0,0.5)]" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-lg md:text-xl text-gray-300 italic text-center mb-8 leading-relaxed">
                  "{testimonials[currentIndex].content}"
                </p>

                {/* Author Info */}
                <div className="flex flex-col items-center">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name}
                    className="w-20 h-20 rounded-full border-4 border-primary-cyan shadow-lg shadow-primary-cyan/30 mb-4"
                  />
                  <div className="text-center">
                    <div className="text-xl font-semibold text-white mb-1">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-sm text-gray-400 mb-1">
                      {testimonials[currentIndex].position}
                    </div>
                    <div className="text-sm text-primary-cyan">
                      {testimonials[currentIndex].company}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-primary-cyan/20 hover:bg-primary-cyan/40 border-2 border-primary-cyan rounded-full p-3 transition-all duration-300 hover:scale-110"
            aria-label="Previous testimonial"
          >
            <HiChevronLeft className="text-2xl text-white" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-primary-cyan/20 hover:bg-primary-cyan/40 border-2 border-primary-cyan rounded-full p-3 transition-all duration-300 hover:scale-110"
            aria-label="Next testimonial"
          >
            <HiChevronRight className="text-2xl text-white" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary-cyan w-8' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
