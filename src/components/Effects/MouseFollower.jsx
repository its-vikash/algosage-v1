import React, { useEffect, useState } from 'react';

const MouseFollower = () => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const dots = Array(5).fill(0).map((_, i) => ({ x: 0, y: 0 }));
    let mouseX = 0, mouseY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      // Leader dot follows mouse directly
      dots[0].x += (mouseX - dots[0].x) * 0.1;
      dots[0].y += (mouseY - dots[0].y) * 0.1;

      // Other dots follow the previous dot
      for (let i = 1; i < dots.length; i++) {
        dots[i].x += (dots[i-1].x - dots[i].x) * 0.3;
        dots[i].y += (dots[i-1].y - dots[i].y) * 0.3;
      }

      setPositions([...dots]);
      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {positions.map((pos, index) => (
        <div
          key={index}
          className="mouse-dot"
          style={{
            left: pos.x,
            top: pos.y,
            width: 8 - index,
            height: 8 - index,
            opacity: 1 - (index * 0.2),
            background: `rgba(99, 102, 241, ${1 - (index * 0.2)})`
          }}
        />
      ))}
    </>
  );
};

export default MouseFollower;