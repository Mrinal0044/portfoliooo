import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';
import './Education.css';

const Education = () => {
  return (
    <section className="section" id="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        
        <div className="education-layout flex flex-col gap-6">
          
          <motion.div 
            className="education-card glass-panel"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -4 }}
          >
            <div className="card-top flex justify-between items-start flex-wrap gap-2">
              <div className="institution-info flex items-center gap-3">
                <div className="edu-icon-wrapper">
                  <GraduationCap size={22} />
                </div>
                <div>
                  <h3 className="institution-name text-gradient">Vellore Institute of Technology, Chennai</h3>
                  <h4 className="degree-title">B.Tech in Computer Science and Engineering (Data Science)</h4>
                </div>
              </div>
              <span className="badge edu-date">2023 – 2027</span>
            </div>
            
            <div className="card-details">
              <div className="gpa-metric flex items-center gap-2">
                <Award size={16} />
                <span>CGPA: <strong>8.84</strong></span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="education-card glass-panel"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -4 }}
          >
            <div className="card-top flex justify-between items-start flex-wrap gap-2">
              <div className="institution-info flex items-center gap-3">
                <div className="edu-icon-wrapper">
                  <GraduationCap size={22} />
                </div>
                <div>
                  <h3 className="institution-name text-gradient">Krishna Public School, Raipur</h3>
                  <h4 className="degree-title">Higher Secondary & High School Education</h4>
                </div>
              </div>
            </div>
            
            <div className="card-details flex gap-6 flex-wrap">
              <div className="grade-metric">
                Class XII: <strong>91.6%</strong> <span className="grade-year">(2023)</span>
              </div>
              <div className="grade-metric">
                Class X: <strong>95.2%</strong> <span className="grade-year">(2021)</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Education;
