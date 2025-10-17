import React from 'react';
import { motion } from 'framer-motion';
import { HiPlay, HiArrowRight, HiCheckCircle } from 'react-icons/hi';
import NeonText from '../Effects/NeonText';
import MouseParallax from '../Effects/MouseParallax';

const Hero = () => {
  const features = [
    'Enterprise Solutions',
    'Cloud Services',
    '24/7 Support',
    'Custom Development'
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

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-indigo-600/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div 
            className="text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <MouseParallax intensity={0.3}>
              <motion.h1 
                variants={itemVariants}
                className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6"
              >
                Transform Your Business With{' '}
                <span className="bg-gradient-to-r from-indigo-600 to-emerald-500 bg-clip-text text-transparent">
                  Digital Excellence
                </span>
              </motion.h1>
            </MouseParallax>
            
            <MouseParallax intensity={0.2}>
              <motion.p 
                variants={itemVariants}
                className="text-xl text-gray-600 mb-8 leading-relaxed"
              >
                We provide cutting-edge business solutions that drive growth, 
                enhance efficiency, and transform your digital landscape. 
                Partner with us to unlock your business potential.
              </motion.p>
            </MouseParallax>

            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 gap-4 mb-8"
            >
              {features.map((feature, index) => (
                <MouseParallax key={feature} intensity={0.1}>
                  <div className="flex items-center space-x-2 text-gray-700">
                    <HiCheckCircle className="text-emerald-500 text-xl" />
                    <span className="font-medium">{feature}</span>
                  </div>
                </MouseParallax>
              ))}
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <motion.button 
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-indigo-600 to-emerald-500 shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Get Started</span>
                <HiArrowRight className="text-lg" />
              </motion.button>
              
              <motion.button 
                className="flex items-center space-x-3 text-gray-700 font-semibold hover:text-indigo-600 transition-colors group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-emerald-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <HiPlay className="text-white text-lg" />
                </div>
                <span>Watch Demo</span>
              </motion.button>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex justify-center lg:justify-start space-x-8"
            >
              {[
                { number: '500+', label: 'Happy Clients' },
                { number: '95%', label: 'Success Rate' },
                { number: '24/7', label: 'Support' }
              ].map((stat, index) => (
                <MouseParallax key={stat.label} intensity={0.1}>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-indigo-600 mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                </MouseParallax>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual Section */}
          <MouseParallax intensity={0.5}>
            <motion.div 
              className="relative h-96 lg:h-[500px]"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              {/* Floating Cards */}
              {[
                { top: '10%', left: '0%', delay: 0, icon: '📊', title: 'Analytics', desc: 'Real-time insights' },
                { top: '50%', right: '10%', delay: 1, icon: '🚀', title: 'Performance', desc: 'Boost efficiency' },
                { bottom: '20%', left: '20%', delay: 2, icon: '🔒', title: 'Security', desc: 'Enterprise-grade' }
              ].map((card, index) => (
                <motion.div
                  key={index}
                  className="absolute bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-xl transform-gpu"
                  style={{
                    top: card.top,
                    left: card.left,
                    right: card.right,
                    bottom: card.bottom,
                  }}
                  animate={{ 
                    y: [0, -20, 0],
                  }}
                  transition={{ 
                    duration: 4,
                    delay: card.delay,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="text-2xl mb-2">{card.icon}</div>
                  <h4 className="font-semibold text-gray-900">{card.title}</h4>
                  <p className="text-sm text-gray-600">{card.desc}</p>
                </motion.div>
              ))}

              {/* Main Dashboard Visual */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-48 bg-white rounded-3xl shadow-2xl p-6 transform-gpu hover:rotate-y-10 hover:rotate-x-5 transition-transform duration-500">
                <div className="w-full h-4 bg-gradient-to-r from-indigo-600 to-emerald-500 rounded-full mb-4"></div>
                <div className="flex space-x-2 items-end h-24">
                  {[60, 80, 40, 70].map((height, index) => (
                    <motion.div
                      key={index}
                      className="flex-1 bg-gradient-to-t from-indigo-600 to-emerald-500 rounded-t-lg"
                      style={{ height: `${height}%` }}
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ duration: 1, delay: 0.7 + index * 0.1 }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </MouseParallax>
        </div>
      </div>
    </section>
  );
};

export default Hero;