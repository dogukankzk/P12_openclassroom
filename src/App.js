import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import SkillsSection from './components/SkillsSection';
import Droit_auteur from './components/Droit_auteur';
import './style.css';

function App() {
  return (
    <div className=" min-h-screen">
      <Header />
      <About />
      <SkillsSection/>
      <Projects />
      <Droit_auteur/>
    </div>
  );
}

export default App;
