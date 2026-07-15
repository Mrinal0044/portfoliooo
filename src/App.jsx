import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="portfolio-app">
      {/* Scroll Progress Indicator */}
      <motion.div 
        className="scroll-progress" 
        style={{ 
          scaleX,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #6366f1, #22d3ee)',
          transformOrigin: '0%',
          zIndex: 999
        }} 
      />

      {/* Cursor Glow Tracker (Disabled on touch devices) */}
      <div 
        className="cursor-glow"
        style={{
          position: 'fixed',
          left: mousePosition.x - 200,
          top: mousePosition.y - 200,
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.06) 0%, rgba(34, 211, 238, 0.02) 50%, transparent 100%)',
          pointerEvents: 'none',
          zIndex: 3,
          transition: 'left 0.15s ease-out, top 0.15s ease-out'
        }}
      />

      {/* Background Grid & Blobs */}
      <div className="bg-grid"></div>
      <div className="bg-decorations">
        <div className="bg-blob bg-blob-1"></div>
        <div className="bg-blob bg-blob-2"></div>
      </div>

      <Navbar />
      
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
