import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { motion, useAnimation } from "framer-motion";
import handNeon from "../../assets/hand-ai1.png";

export default function NeonTouchScene() {
  const mountRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    // === THREE Setup ===
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    // Safely append renderer
    if (mountRef.current) mountRef.current.appendChild(renderer.domElement);

    // Particle geometry
    const geometry = new THREE.SphereGeometry(1.2, 32, 32);
    const material = new THREE.PointsMaterial({
      color: 0x00ffff,
      size: 0.03,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(geometry, material);
    scene.add(particles);
    camera.position.z = 5;

    // Animation loop
    let frameId;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      particles.rotation.x += 0.002;
      particles.rotation.y += 0.003;
      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      if (!mountRef.current) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // ✅ Safe Cleanup
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();

      if (mountRef.current?.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  // Hand hover animation
  const handleTouch = async () => {
    await controls.start({
      y: -30,
      scale: 1.05,
      transition: { duration: 0.4, ease: "easeInOut" },
    });
    await controls.start({
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeInOut" },
    });
  };

  return (
    <div className="relative h-screen w-full flex items-center justify-center bg-gradient-to-b from-black to-[#050018] overflow-hidden">
      {/* THREE Canvas */}
      <div ref={mountRef} className="absolute inset-0"></div>

      {/* Text Overlay */}
      <div className="z-10 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold text-cyan-400 drop-shadow-[0_0_15px_rgba(0,255,255,0.8)]">
          IGNITE YOUR ENTERPRISE FUTURE
        </h1>
        <p className="text-gray-400 mt-4">
          Where AI-Driven Insights Meet Human-Centric Innovation.
        </p>
      </div>

      {/* Animated Neon Hand */}
      <motion.img
        src={handNeon}
        alt="Neon Hand"
        className="absolute bottom-0 right-[20%] w-[320px] md:w-[420px] pointer-events-none drop-shadow-[0_0_25px_rgba(0,255,255,0.6)]"
        initial={{ y: 0 }}
        animate={controls}
        onMouseEnter={handleTouch}
      />
    </div>
  );
}
