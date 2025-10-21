import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowRight, HiCode, HiCloud, HiShieldCheck } from 'react-icons/hi';

const Expertise = () => {
  const expertise = [
    {
      icon: <HiCode className="text-3xl" />,
      title: 'Dynamics 365 Development',
      description: 'Tailored CRM & ERP solutions that streamline your operations and drive growth across sales, service, finance, and supply chain.',
      features: ['Custom CRM Solutions', 'ERP Integration', 'Sales Automation'],
      color: 'blue'
    },
    {
      icon: <HiCloud className="text-3xl" />,
      title: 'Power Apps Innovation',
      description: 'Rapidly build custom low-code applications that solve unique business challenges, empowering teams with intuitive tools.',
      features: ['Low-Code Development', 'Custom Applications', 'Workflow Automation'],
      color: 'purple'
    },
    {
      icon: <HiShieldCheck className="text-3xl" />,
      title: 'Project Management & Support',
      description: 'From concept to deployment and beyond, we provide end-to-end project management and continuous, proactive support.',
      features: ['Project Planning', 'Implementation', 'Ongoing Support'],
      color: 'pink'
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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="expertise" className="py-20 relative">
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
                  Expertise
                </span>
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Specialized solutions designed to transform your business operations and drive sustainable growth
              </p>
            </motion.div>

            {/* Expertise Grid */}
            <motion.div 
              className="grid lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {expertise.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="glass-card rounded-2xl p-8 border border-gray-800 hover:border-neon-blue/50 transition-all duration-500 group relative overflow-hidden"
                  variants={cardVariants}
                  whileHover={{ y: -10 }}
                >
                  {/* Hover Effect */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${
                    item.color === 'blue' ? 'bg-neon-blue' :
                    item.color === 'purple' ? 'bg-neon-purple' :
                    'bg-neon-pink'
                  }`}></div>
                  
                  {/* Icon */}
                  <motion.div 
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                      item.color === 'blue' ? 'bg-neon-blue/20 text-neon-blue' :
                      item.color === 'purple' ? 'bg-neon-purple/20 text-neon-purple' :
                      'bg-neon-pink/20 text-neon-pink'
                    }`}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5
                    }}
                  >
                    {item.icon}
                  </motion.div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{item.description}</p>
                  
                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <div className={`w-2 h-2 rounded-full mr-3 ${
                          item.color === 'blue' ? 'bg-neon-blue' :
                          item.color === 'purple' ? 'bg-neon-purple' :
                          'bg-neon-pink'
                        }`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <motion.button 
                    className={`flex items-center space-x-2 font-semibold group-hover:translate-x-2 transition-transform duration-300 ${
                      item.color === 'blue' ? 'text-neon-blue' :
                      item.color === 'purple' ? 'text-neon-purple' :
                      'text-neon-pink'
                    }`}
                    whileHover={{ x: 5 }}
                  >
                    <span>Learn More</span>
                    <HiArrowRight className="text-lg group-hover:scale-110 transition-transform" />
                  </motion.button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;