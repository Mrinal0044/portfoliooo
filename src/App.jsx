import React from 'react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Achievements from './components/Achievements';

function App() {
  return (
    <div className="portfolio-app">
      <Hero />
      <div className="container">
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Achievements />
      </div>
    </div>
  );
}

export default App;
