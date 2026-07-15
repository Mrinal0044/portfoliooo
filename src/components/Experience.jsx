import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section className="section" id="experience">
      <h2 className="section-title">Work Experience</h2>
      <div className="timeline">
        <div className="timeline-item glass-panel">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <div className="timeline-header flex justify-between items-center">
              <div>
                <h3>MedXAI</h3>
                <h4>Intern</h4>
              </div>
              <span className="timeline-date badge">April 2025 – July 2025</span>
            </div>
            <ul className="timeline-list">
              <li>Engineered <strong>MATLAB</strong>-based simulation logic to model transdermal/mucosal drug formulation behaviour across 4 environmental parameters (temperature, pressure, humidity, light exposure), improving repeatability of stability testing workflows.</li>
              <li>Designed and developed a production-ready <strong>FastAPI</strong> backend for a molecular modeling platform, implementing RESTful microservices for molecular docking (AutoDock Vina) and AI-based protein–ligand binding affinity prediction (DeepPurpose), with modular architecture, <strong>JWT</strong> authentication, and <strong>PostgreSQL</strong> integration.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
