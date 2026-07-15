import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <header className="hero section">
      <div className="container flex flex-col items-center justify-center text-center">
        <h1 className="hero-title animate-slide-up">
          Hi, I'm <span className="text-gradient">K Mrinal</span>
        </h1>
        <h2 className="hero-subtitle animate-slide-up delay-100">
          Data Science & Full-Stack Developer
        </h2>
        <p className="hero-summary animate-slide-up delay-200">
          B.Tech Computer Science (Data Science) student passionate about transforming data into product insights through analytics, predictive modeling, and AI-driven solutions. Skilled in Python, FastAPI, React, and SQL, with experience building cloud-deployed applications. Strong collaborator delivering data-driven solutions that solve real-world problems.
        </p>
        <div className="hero-actions animate-slide-up delay-300 flex gap-4">
          <a href="mailto:mrinal0821@gmail.com" className="btn btn-primary">Get In Touch</a>
          <a href="https://linkedin.com/in/mrinal54b83b" target="_blank" rel="noreferrer" className="btn btn-outline">LinkedIn</a>
          <a href="https://github.com/Mrinal0044" target="_blank" rel="noreferrer" className="btn btn-outline">GitHub</a>
        </div>
      </div>
    </header>
  );
};

export default Hero;
