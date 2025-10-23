import React from 'react';
import { motion } from 'framer-motion';
import { HiCheckCircle, HiUsers, HiTrendingUp, HiGlobe } from 'react-icons/hi';

const Stats = () => {
  const stats = [
    { 
      number: '500+', 
      label: 'Businesses Helped', 
      icon: <HiCheckCircle />,
      description: 'Different businesses have achieved expected ROI'
    },
    { 
      number: '2X', 
      label: 'Efficiency Boost', 
      icon: <HiUsers />,
      description: 'Due to centralized data structure'
    },
    { 
      number: '40%', 
      label: 'Cost Savings', 
      icon: <HiTrendingUp />,
      description: 'Improved cost savings while limiting resources'
    },
    { 
      number: '150+', 
      label: 'Certified Consultants', 
      icon: <HiGlobe />,
      description: 'Microsoft-certified experts'
    }
  ];

  return (
    <section className="py-12" id="stats">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Proven <span className="bg-gradient-to-r from-primary-cyan to-primary-purple bg-clip-text text-transparent">Results</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-card-bg backdrop-blur-md border border-primary-cyan/20 rounded-3xl p-6 text-center transition-all duration-300 hover:border-primary-cyan hover:shadow-lg hover:shadow-primary-cyan/10 hover:scale-105"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl text-primary-cyan mb-3 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-cyan to-primary-purple bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-white font-semibold mb-2">{stat.label}</div>
              <div className="text-sm text-gray-400">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
