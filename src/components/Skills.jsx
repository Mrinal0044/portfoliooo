import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Database, Cloud, Cpu, BarChart3, Users, HelpCircle } from 'lucide-react';
import './Skills.css';

const skillCategories = [
  {
    title: 'Languages',
    icon: Code2,
    skills: ['Python', 'Java', 'C', 'C++', 'SQL', 'R']
  },
  {
    title: 'Web & Backend',
    icon: Server,
    skills: ['React.js', 'FastAPI', 'REST API Design']
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['SQL', 'PostgreSQL', 'MongoDB Atlas']
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    skills: ['AWS', 'Docker', 'Vercel', 'Render', 'Git/GitHub']
  },
  {
    title: 'Data & AI',
    icon: Cpu,
    skills: ['Pandas', 'PyTorch', 'LLM Orchestration', 'Predictive Modeling', 'Data Analytics']
  },
  {
    title: 'Visualization & Tools',
    icon: BarChart3,
    skills: ['Power BI', 'Tableau', 'Matplotlib', 'Jupyter Notebook', 'Google Colab']
  },
  {
    title: 'Soft Skills',
    icon: Users,
    skills: ['Communication', 'Stakeholder Management', 'Leadership', 'Time Management', 'Team Collaboration', 'Adaptability', 'Resilience']
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 15 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
  }
};

const Skills = () => {
  return (
    <section className="section" id="skills">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        
        <motion.div 
          className="skills-container grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {skillCategories.map((category, idx) => {
            const IconComponent = category.icon || HelpCircle;
            return (
              <motion.div 
                className="skill-card glass-panel"
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -5, scale: 1.01 }}
              >
                <div className="skill-card-header flex items-center gap-3">
                  <div className="skill-icon-wrapper">
                    <IconComponent size={20} />
                  </div>
                  <h3 className="skill-category-title">{category.title}</h3>
                </div>
                
                <div className="skill-tag-list flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <span className="skill-item-tag" key={sIdx}>
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
