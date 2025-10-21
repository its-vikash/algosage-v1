import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowRight, HiChip, HiDatabase, HiRefresh } from 'react-icons/hi';

const Solutions = () => {
  const solutions = [
    {
      icon: <HiChip className="text-3xl" />,
      title: 'AI-Powered Analytics',
      description: 'Leverage artificial intelligence to gain deep insights and make data-driven decisions.',
      features: ['Predictive Analytics', 'Machine Learning', 'Real-time Insights']
    },
    {
      icon: <HiDatabase className="text-3xl" />,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions that grow with your business needs.',
      features: ['Cloud Migration', 'Infrastructure Setup', 'Security Management']
    },
    {
      icon: <HiRefresh className="text-3xl" />,
      title: 'Digital Transformation',
      description: 'Complete digital overhaul to modernize your business processes and operations.',
      features: ['Process Automation', 'Digital Strategy', 'Change Management']
    }
  ];

  return (
    <section id="solutions" className="py-20 relative">
      <div className="w-[95%] max-w-6xl mx-auto">
        <div className="page-fold rounded-3xl glass-effect overflow-hidden relative">
          {/* Container Border */}
          <div className="absolute inset-0 rounded-3xl neon-border pointer-events-none"></div>
          
          <div className="p-8 md:p-12 lg:p-16">
            {/* Section Header */}
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-black mb-6">
                <span className="text-white">Our </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-pink">
                  Solutions
                </span>
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Comprehensive solutions designed to address your unique business challenges and drive innovation
              </p>
            </motion.div>

            {/* Solutions Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.title}
                  className="glass-card rounded-2xl p-8 border border-gray-800 hover:border-neon-purple/50 transition-all duration-500 group"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  {/* Icon */}
                  <div className="w-14 h-14 bg-gradient-to-br from-neon-purple to-neon-pink rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                    {solution.icon}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-4">{solution.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{solution.description}</p>
                  
                  {/* Features */}
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-neon-purple text-sm">
                        <div className="w-1.5 h-1.5 bg-neon-purple rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Hover Arrow */}
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <HiArrowRight className="text-neon-purple text-xl" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom CTA */}
            <motion.div 
              className="text-center mt-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.button 
                className="px-8 py-4 bg-gradient-to-r from-neon-purple to-neon-pink text-white font-bold rounded-lg hover:shadow-lg hover:shadow-neon-purple/25 transition-all duration-300 neon-border"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Solutions
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;