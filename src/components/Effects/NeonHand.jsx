import React from 'react';

const NeonHand = () => {
  return (
    <div className="absolute top-1/2 right-10 transform -translate-y-1/2 z-20 hand-animation">
      <div className="relative">
        {/* Hand SVG */}
        <svg 
          width="80" 
          height="80" 
          viewBox="0 0 24 24" 
          fill="none" 
          className="neon-text-soft text-neon-blue filter drop-shadow-lg"
        >
          <path 
            d="M8 13V11.5C8 10.1193 9.11929 9 10.5 9C11.8807 9 13 10.1193 13 11.5V13M8 13V16.5C8 17.8807 9.11929 19 10.5 19C11.8807 19 13 17.8807 13 16.5V13M8 13H13M13 13V11.5C13 10.1193 14.1193 9 15.5 9C16.8807 9 18 10.1193 18 11.5V16.5C18 19 16 21 12 21C8 21 6 19 6 16.5V11.5C6 10.1193 7.11929 9 8.5 9C9.88071 9 11 10.1193 11 11.5V13" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
        
        {/* Touch effect */}
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-neon-blue rounded-full animate-ping opacity-75"></div>
        
        {/* Connection line */}
        <div className="absolute top-1/2 -right-4 w-20 h-0.5 bg-gradient-to-l from-neon-blue to-transparent transform -translate-y-1/2"></div>
      </div>
    </div>
  );
};

export default NeonHand;