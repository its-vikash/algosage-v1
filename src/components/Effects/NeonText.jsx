import React from 'react';

const NeonText = ({ 
  children, 
  color = '#6366f1', 
  className = '',
  animation = true 
}) => {
  const neonStyle = {
    textShadow: `
      0 0 5px ${color},
      0 0 10px ${color},
      0 0 15px ${color},
      0 0 20px ${color},
      0 0 35px ${color},
      0 0 40px ${color}
    `,
    animation: animation ? 'neon 2s ease-in-out infinite alternate' : 'none'
  };

  return (
    <span className={`neon-text ${className}`} style={neonStyle}>
      {children}
    </span>
  );
};

export default NeonText;