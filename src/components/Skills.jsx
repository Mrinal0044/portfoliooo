import React from 'react';
import './Skills.css';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['Python', 'Java', 'C', 'C++', 'SQL', 'R']
  },
  {
    title: 'Web & Backend',
    skills: ['React.js', 'FastAPI', 'REST API Design']
  },
  {
    title: 'Databases',
    skills: ['SQL', 'PostgreSQL', 'MongoDB Atlas']
  },
  {
    title: 'Cloud & DevOps',
    skills: ['AWS', 'Docker', 'Vercel', 'Render', 'Git/GitHub']
  },
  {
    title: 'Data & AI',
    skills: ['Pandas', 'PyTorch', 'LLM Orchestration', 'Predictive Modeling', 'Data Analytics']
  },
  {
    title: 'Visualization & Tools',
    skills: ['Power BI', 'Tableau', 'Matplotlib', 'Jupyter', 'Colab']
  }
];

const Skills = () => {
  return (
    <section className="section" id="skills">
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-grid grid">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="skill-category glass-panel">
            <h3 className="skill-title">{category.title}</h3>
            <div className="skill-tags flex flex-wrap gap-2">
              {category.skills.map((skill, sIdx) => (
                <span key={sIdx} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
