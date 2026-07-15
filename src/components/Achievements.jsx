import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldAlert, Sparkles, BookOpen, Compass } from 'lucide-react';
import './Achievements.css';

const achievementsList = [
  {
    title: 'Oracle Certified Data Science Professional',
    icon: Award,
    description: 'Professional industry-recognized certification demonstrating expertise in database management, machine learning, and data pipelines.'
  },
  {
    title: 'IIT Bombay Spoken Tutorial Certifications',
    icon: BookOpen,
    description: 'Certified proficiency in core computer science languages: Python, C, and C++.'
  },
  {
    title: 'Finalist, HACKRONYX National Level Hackathon',
    icon: Sparkles,
    description: 'Ranked in the top 35 out of 3,800+ participating teams nationwide.'
  },
  {
    title: 'Summer Research Internship',
    icon: Compass,
    description: 'Conducted research on "Key Challenges in Recommender Systems".'
  },
  {
    title: 'Filed Research Patent',
    icon: ShieldAlert,
    description: 'Filed patent on "Dairy product packaging system with real-time spoilage detection and shelf-life enhancement".'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

const Achievements = () => {
  return (
    <section className="section" id="achievements">
      <div className="container">
        <h2 className="section-title">Certifications & Achievements</h2>
        
        <motion.div 
          className="achievements-grid grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {achievementsList.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div 
                className="achievement-card glass-panel flex gap-4"
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4 }}
              >
                <div className="achievement-icon-wrapper flex-shrink-0">
                  <IconComponent size={20} />
                </div>
                <div>
                  <h3 className="achievement-title">{item.title}</h3>
                  <p className="achievement-description">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Extra Curricular Card */}
        <motion.div 
          className="extra-curricular-card glass-panel"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -4 }}
          style={{ marginTop: 'var(--space-6)' }}
        >
          <h3 className="extra-title text-gradient">Extra-Curricular Activities</h3>
          <p className="extra-description">
            <strong>Executive Board Member and Sponsorship Lead, AVR Club – VIT Chennai:</strong> Led 50+ members and successfully secured sponsorships from 5+ organizations, demonstrating leadership and teamwork. National/State-level Kathak dance competition winner.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
