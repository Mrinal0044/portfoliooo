import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown, FileText } from 'lucide-react';
import './Hero.css';

const roles = [
  'Data Scientist',
  'Full-Stack Developer',
  'AI/ML Engineer',
  'CS (Data Science) Student'
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section flex items-center justify-center">
      {/* Background Blobs */}
      <div className="hero-blob hero-blob-indigo"></div>
      <div className="hero-blob hero-blob-cyan"></div>
      
      <div className="container hero-content-wrapper flex flex-col items-center text-center">
        
        {/* Intro Badge */}
        <motion.div
          className="hero-badge flex items-center gap-2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="pulse-dot"></span>
          <span>Available for Internships & Opportunities</span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="hero-heading"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          Hi, I'm <span className="text-gradient">K Mrinal</span>
        </motion.h1>

        {/* Animated Role */}
        <div className="hero-role-container">
          <AnimatePresence mode="wait">
            <motion.h2
              key={roles[roleIndex]}
              className="hero-role"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              {roles[roleIndex]}
            </motion.h2>
          </AnimatePresence>
        </div>

        {/* Summary Description */}
        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          B.Tech Computer Science (Data Science) student passionate about transforming data into product insights through analytics, predictive modeling, and AI-driven solutions. Skilled in Python, FastAPI, React, and SQL, with experience building cloud-deployed applications using AWS and Docker. Strong collaborator delivering data-driven solutions to solve real-world problems.
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          className="hero-buttons flex gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <a href="#projects" className="btn btn-primary">
            Explore Work <ArrowDown size={16} style={{ marginLeft: 8 }} />
          </a>
          <a href="mailto:mrinal0821@gmail.com" className="btn btn-outline">
            Get In Touch
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="hero-socials flex gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <a href="https://github.com/Mrinal0044" target="_blank" rel="noreferrer" className="hero-social-link" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/mrinal54b83b" target="_blank" rel="noreferrer" className="hero-social-link" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href="mailto:mrinal0821@gmail.com" className="hero-social-link" aria-label="Email">
            <Mail size={20} />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
