import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeDots = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // Create dots
    const dots = [];
    const dotGeometry = new THREE.SphereGeometry(0.05, 8, 8);
    const dotMaterial = new THREE.MeshBasicMaterial({
      color: 0x6366f1,
      transparent: true,
      opacity: 0.6,
    });

    for (let i = 0; i < 100; i++) {
      const dot = new THREE.Mesh(dotGeometry, dotMaterial);
      dot.position.x = Math.random() * 10 - 5;
      dot.position.y = Math.random() * 10 - 5;
      dot.position.z = Math.random() * 10 - 5;
      scene.add(dot);
      dots.push(dot);
    }

    camera.position.z = 5;

    // Mouse move effect
    const handleMouseMove = (event) => {
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

      dots.forEach((dot, index) => {
        dot.position.x += mouseX * 0.01;
        dot.position.y += mouseY * 0.01;
        dot.position.z = Math.sin(Date.now() * 0.001 + index) * 2;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      dots.forEach((dot, index) => {
        dot.rotation.x += 0.01;
        dot.rotation.y += 0.01;
        dot.position.z = Math.sin(Date.now() * 0.001 + index) * 2;
      });

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // ✅ Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);

      if (mountRef.current && renderer.domElement.parentNode === mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }

      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default ThreeDots;
