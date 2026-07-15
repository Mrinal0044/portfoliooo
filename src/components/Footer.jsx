import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container flex flex-col items-center gap-4">
        
        <motion.button 
          className="back-to-top btn flex items-center justify-center"
          onClick={scrollToTop}
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Back to Top"
        >
          <ArrowUp size={20} />
        </motion.button>
        
        <div className="footer-socials flex gap-4">
          <a href="https://github.com/Mrinal0044" target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/mrinal54b83b" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href="mailto:mrinal0821@gmail.com" aria-label="Email">
            <Mail size={20} />
          </a>
        </div>

        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} K Mrinal. Built with premium React & Framer Motion.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
