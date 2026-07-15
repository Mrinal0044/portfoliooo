import React from 'react';

const Achievements = () => {
  const certifications = [
    'Oracle Certified Data Science Professional',
    'Spoken Tutorial Certifications (IIT Bombay): Python, C, C++',
    'Finalist, HACKRONYX National Level Hackathon – Top 35 of 3,800+ teams',
    'Summer Research Internship, “Key Challenges in Recommender Systems”',
    'Filed research patent: “Dairy product packaging system with real-time spoilage detection and shelf-life enhancement”'
  ];

  return (
    <section className="section" id="achievements">
      <h2 className="section-title">Certifications & Achievements</h2>
      <div className="flex flex-col gap-6" style={{ maxWidth: '900px', margin: '0 auto' }}>
        
        <div className="glass-panel" style={{ padding: '2rem' }}>
          <ul style={{ listStyleType: 'none' }} className="flex flex-col gap-3">
            {certifications.map((cert, index) => (
              <li key={index} style={{ position: 'relative', paddingLeft: '1.5rem', color: '#cbd5e1' }}>
                <span style={{ position: 'absolute', left: 0, color: 'var(--accent-color)' }}>🏆</span>
                {cert}
              </li>
            ))}
          </ul>
        </div>

        <div className="glass-panel" style={{ padding: '2rem', marginTop: '1rem' }}>
          <h3 style={{ fontSize: '1.3rem', color: 'var(--accent-color)', marginBottom: '1rem' }}>Extra-Curricular Activities</h3>
          <p style={{ color: '#cbd5e1', lineHeight: '1.6' }}>
            <strong>Executive Board Member and Sponsorship Lead, AVR Club – VIT Chennai:</strong> Led 50+ members and secured sponsorships from 5+ organizations, demonstrating leadership and teamwork. National/State-level Kathak dance competition winner.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Achievements;
