import React from 'react';

const NeonBorder = ({ children, color = 'blue', className = '' }) => {
  const getBorderColor = () => {
    switch (color) {
      case 'blue': return 'border-cyan-400';
      case 'purple': return 'border-purple-400';
      case 'pink': return 'border-pink-400';
      default: return 'border-cyan-400';
    }
  };

  const getGlowColor = () => {
    switch (color) {
      case 'blue': return 'shadow-[0_0_15px_#00f3ff]';
      case 'purple': return 'shadow-[0_0_15px_#b967ff]';
      case 'pink': return 'shadow-[0_0_15px_#ff2e8b]';
      default: return 'shadow-[0_0_15px_#00f3ff]';
    }
  };

  return (
    <div className={`relative ${className}`}>
      <div className={`absolute inset-0 border-2 ${getBorderColor()} ${getGlowColor()} rounded-lg opacity-60`}></div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default NeonBorder;