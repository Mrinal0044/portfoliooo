import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, FolderOpen } from 'lucide-react';
import './Projects.css';

const projectsData = [
  {
    title: 'InventoryIQ',
    subtitle: 'Full-Stack Inventory Optimization Platform',
    description: 'Built a full-stack analytics platform delivering demand-forecasting insights and inventory health metrics to end users. Designed and implemented 6+ REST API modules for inventory analysis, stock-health monitoring, and automated reorder recommendations, integrating an XGBoost forecasting model. Containerized the application with Docker and deployed backend on Render and frontend on Vercel.',
    tech: ['React', 'FastAPI', 'MongoDB Atlas', 'Docker', 'XGBoost', 'Render', 'Vercel'],
    links: { demo: 'https://github.com/Mrinal0044', github: 'https://github.com/Mrinal0044' }
  },
  {
    title: 'CaseForge',
    subtitle: 'AI Multi-Agent Investigation Platform',
    description: 'Designed a 7-agent AI orchestration pipeline (Python, FastAPI, Groq Llama 3.3, Pydantic) automating end-to-end investigation workflows, turning unstructured evidence into actionable insights. Engineered a cloud-backed backend with Firebase, Firestore, and Google Cloud Storage. Developed an investigation dashboard (Next.js, TypeScript, Tailwind CSS, Cytoscape.js, shadcn/ui) with interactive knowledge graphs.',
    tech: ['Next.js', 'FastAPI', 'Groq/Llama 3.3', 'Firebase', 'Cytoscape.js', 'Docker', 'Vercel'],
    links: { github: 'https://github.com/Mrinal0044' }
  },
  {
    title: 'LeafSense AI',
    subtitle: 'Cloud-Based Plant Health Management Platform',
    description: 'Built an end-to-end AI-powered product classifying 38 plant disease categories using EfficientNetB0, achieving 98.74% validation accuracy on 48,856+ leaf images. Deployed the application using AWS services (Amazon EC2, S3, RDS PostgreSQL, Amplify, and CloudWatch). Developed 10+ RESTful APIs with FastAPI for authentication, secured using JWT.',
    tech: ['PyTorch', 'FastAPI', 'AWS EC2/S3/RDS', 'Docker', 'JWT', 'CloudWatch'],
    links: { github: 'https://github.com/Mrinal0044' }
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

const Projects = () => {
  return (
    <section className="section" id="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        
        <motion.div 
          className="projects-grid grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {projectsData.map((project, index) => (
            <motion.div 
              className="project-card glass-panel flex flex-col"
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8 }}
            >
              <div className="project-header-section flex justify-between items-start">
                <div className="folder-icon-wrapper">
                  <FolderOpen size={24} />
                </div>
                <div className="project-links-wrapper flex gap-2">
                  {project.links.github && (
                    <a href={project.links.github} target="_blank" rel="noreferrer" className="project-link-icon" aria-label="GitHub">
                      <Github size={18} />
                    </a>
                  )}
                  {project.links.demo && (
                    <a href={project.links.demo} target="_blank" rel="noreferrer" className="project-link-icon" aria-label="Live Demo">
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>
              
              <div className="project-main-content">
                <h3 className="project-title-text">{project.title}</h3>
                <h4 className="project-subtitle-text">{project.subtitle}</h4>
                <p className="project-description-text">{project.description}</p>
              </div>

              <div className="project-footer-section">
                <div className="project-tech-tags flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="badge">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
