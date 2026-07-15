import React from 'react';
import './Projects.css';

const projectsData = [
  {
    title: 'InventoryIQ',
    subtitle: 'Full-Stack Inventory Optimization Platform',
    description: 'Built a full-stack analytics platform delivering demand-forecasting insights and inventory health metrics. Designed REST API modules and integrated an XGBoost forecasting model. Containerized with Docker and deployed on Render/Vercel.',
    tech: ['React', 'FastAPI', 'MongoDB', 'Docker', 'XGBoost'],
    links: { demo: '#', github: '#' }
  },
  {
    title: 'CaseForge',
    subtitle: 'AI Multi-Agent Investigation Platform',
    description: 'Designed a 7-agent AI orchestration pipeline automating end-to-end investigation workflows. Engineered a secure backend with Firebase and Cloud Storage. Developed an interactive Next.js dashboard with knowledge graphs.',
    tech: ['Next.js', 'Python', 'FastAPI', 'Groq/Llama 3.3', 'Firebase'],
    links: { github: '#' }
  },
  {
    title: 'LeafSense AI',
    subtitle: 'Cloud-Based Plant Health Management Platform',
    description: 'End-to-end AI product classifying 38 plant disease categories using EfficientNetB0 (98.74% accuracy). Deployed using AWS (EC2, S3, RDS). Developed 10+ RESTful APIs secured with JWT.',
    tech: ['AWS', 'PyTorch', 'FastAPI', 'PostgreSQL', 'Docker'],
    links: { github: '#' }
  }
];

const Projects = () => {
  return (
    <section className="section" id="projects">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid grid">
        {projectsData.map((project, index) => (
          <div className="project-card glass-panel flex flex-col" key={index}>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p className="project-subtitle">{project.subtitle}</p>
              <p className="project-desc">{project.description}</p>
              
              <div className="project-tech flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span key={i} className="badge">{t}</span>
                ))}
              </div>
            </div>
            
            <div className="project-links flex gap-4">
              {project.links.demo && <a href={project.links.demo} className="btn-link">Live Demo</a>}
              {project.links.github && <a href={project.links.github} className="btn-link">GitHub</a>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
