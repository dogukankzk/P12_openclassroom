import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import SkillsSection from './components/SkillsSection';
import './style.css';

function App() {
  return (
    <div className=" min-h-screen">
      <Header />
      <About />
      <SkillsSection/>
      <Projects />
    </div>
  );
}

export default App;
