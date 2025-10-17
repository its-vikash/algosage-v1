import React, { useEffect, useState } from 'react';

const MouseParallax = ({ children, intensity = 1 }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * intensity;
      const y = (e.clientY / window.innerHeight - 0.5) * intensity;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [intensity]);

  const transform = `translate3d(${mousePosition.x * 50}px, ${mousePosition.y * 50}px, 0)`;

  return (
    <div className="parallax-element" style={{ transform }}>
      {children}
    </div>
  );
};

export default MouseParallax;