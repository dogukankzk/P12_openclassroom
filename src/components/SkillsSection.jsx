import React from 'react';
import htmlLogo from '../assets/html-5.png';  // Chemin vers ton logo HTML
import cssLogo from '../assets/css.png';    // Chemin vers ton logo CSS
import jsLogo from '../assets/javascript.png';  // Chemin vers ton logo JavaScript
import reactLogo from '../assets/physics.png';  // Chemin vers ton logo React

export default function SkillsSection() {
  return (
    <section id="skills" className="w-full py-10 lg:py-20 bg-[#ede0d200] font-jost">
      <div className="container mx-auto px-6">
        {/* Contenu de la section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Skills Section */}
          <div className="flex flex-col items-center">
            <h3 className="text-4xl lg:text-5xl font-semibold mb-8">SKILLS</h3>
            <div className="flex flex-wrap gap-8 justify-center">
              <img src={htmlLogo} alt="HTML" className="w-20 h-20 hover:scale-110 transition-transform duration-300" />
              <img src={cssLogo} alt="CSS" className="w-20 h-20 hover:scale-110 transition-transform duration-300" />
              <img src={jsLogo} alt="JavaScript" className="w-20 h-20 hover:scale-110 transition-transform duration-300" />
              <img src={reactLogo} alt="React" className="w-20 h-20 hover:scale-110 transition-transform duration-300" />
            </div>
          </div>

          {/* Langues Section */}
          <div className="flex flex-col items-center">
            <h3 className="text-4xl lg:text-5xl font-semibold mb-8">LANGUES</h3>
            <ul className="space-y-4 text-2xl lg:text-3xl">
              <li>Français (natif)</li>
              <li>Türkçe (natif)</li>
              <li>English (niveau B2)</li>
            </ul>
          </div>

          {/* Education Section */}
          <div className="flex flex-col items-center">
            <h3 className="text-4xl lg:text-5xl font-semibold mb-8">EDUCATION</h3>
            <p className="text-2xl lg:text-3xl leading-relaxed text-center">
              Formation Bac +2  developpeur Frontend chez Openclassroom.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
