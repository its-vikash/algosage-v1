import React from 'react';

const AnimatedDots = () => {
  return (
    <div className="fixed inset-0 dots-bg z-0">
      {/* Animated dots overlay */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-pulse-soft"
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: i % 3 === 0 ? '#00f3ff' : i % 3 === 1 ? '#b967ff' : '#ff2e8b',
              opacity: 0.6,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${Math.random() * 3 + 2}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedDots;