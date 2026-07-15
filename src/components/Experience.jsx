import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckSquare } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  return (
    <section className="section" id="experience">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        
        <div className="experience-timeline">
          <div className="timeline-line"></div>
          
          <motion.div 
            className="experience-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="timeline-icon-wrapper">
              <Briefcase size={20} />
            </div>
            
            <div className="experience-card glass-panel">
              <div className="experience-header flex justify-between items-start flex-wrap gap-2">
                <div>
                  <h3 className="company-name text-gradient">MedXAI</h3>
                  <h4 className="job-role">Intern</h4>
                </div>
                <div className="experience-date flex items-center gap-1">
                  <Calendar size={14} />
                  <span>April 2025 – July 2025</span>
                </div>
              </div>
              
              <ul className="experience-details flex flex-col gap-3">
                <li className="flex gap-2">
                  <div className="detail-icon"><CheckSquare size={16} /></div>
                  <p>
                    Engineered <strong>MATLAB</strong>-based simulation logic to model transdermal/mucosal drug formulation behaviour across 4 environmental parameters (temperature, pressure, humidity, light exposure), improving repeatability of stability testing workflows and communicating findings to research stakeholders in weekly cross-team reviews.
                  </p>
                </li>
                <li className="flex gap-2">
                  <div className="detail-icon"><CheckSquare size={16} /></div>
                  <p>
                    Designed and developed a production-ready <strong>FastAPI</strong> backend for a molecular modeling platform, implementing RESTful microservices for molecular docking (AutoDock Vina) and AI-based protein–ligand binding affinity prediction (DeepPurpose), with modular architecture, <strong>JWT</strong> authentication, and <strong>PostgreSQL</strong> integration.
                  </p>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
