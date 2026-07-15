import React from 'react';

const Education = () => {
  return (
    <section className="section" id="education">
      <h2 className="section-title">Education</h2>
      <div className="flex flex-col gap-6" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div className="glass-panel" style={{ padding: '2rem' }}>
          <div className="flex justify-between items-center" style={{ marginBottom: '1rem' }}>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--accent-color)' }}>Vellore Institute of Technology, Chennai</h3>
            <span className="badge">2023 – 2027</span>
          </div>
          <p style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>B.Tech in Computer Science and Engineering (Data Science)</p>
          <p style={{ color: 'var(--text-secondary)' }}>CGPA: <strong>8.84</strong></p>
        </div>

        <div className="glass-panel" style={{ padding: '2rem' }}>
          <div className="flex justify-between items-center" style={{ marginBottom: '1rem' }}>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--accent-color)' }}>Krishna Public School, Raipur</h3>
          </div>
          <div className="flex gap-8">
            <p>Class XII – <strong>91.6%</strong> (2023)</p>
            <p>Class X – <strong>95.2%</strong> (2021)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
