import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/contact';
import './style.css';

function App() {
  return (
    <div className=" min-h-screen">
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
