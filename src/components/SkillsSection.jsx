import React from 'react';
import htmlLogo from '../assets/html-5.webp';
import cssLogo from '../assets/css.webp';
import jsLogo from '../assets/javascript.webp';
import reactLogo from '../assets/physics.webp';
import GitLogo from '../assets/icons8-github-80.webp';
import TaillwindLogo from '../assets/icons8-tailwind-css-80-_1_.webp';

export default function SkillsSection() {
  return (
    <section id="skills" className="w-full py-10 lg:py-20 bg-[#ede0d200] font-jost">
      <div className="container mx-auto px-6">
        {/* Contenu de la section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Skills Section */}
          <div className="flex flex-col items-center">
            <h2 className="text-4xl lg:text-5xl font-semibold mb-8">SKILLS</h2>
            <div className="flex flex-wrap gap-8 justify-center">
              <div className="relative group flex flex-col items-center">
                <img src={htmlLogo} alt="HTML" className="w-16 h-16 hover:scale-110 transition-transform duration-300" loading="lazy" />
                <span className="opacity-0 group-hover:opacity-100 mt-2 text-sm text-black transition-opacity duration-300">
                  HTML
                </span>
              </div>
              <div className="relative group flex flex-col items-center">
                <img src={cssLogo} alt="CSS" className="w-16 h-16 hover:scale-110 transition-transform duration-300" loading="lazy" />
                <span className="opacity-0 group-hover:opacity-100 mt-2 text-sm text-black transition-opacity duration-300">
                  CSS
                </span>
              </div>
              <div className="relative group flex flex-col items-center">
                <img src={jsLogo} alt="JavaScript" className="w-16 h-16 hover:scale-110 transition-transform duration-300" loading="lazy" />
                <span className="opacity-0 group-hover:opacity-100 mt-2 text-sm text-black transition-opacity duration-300">
                  JavaScript
                </span>
              </div>
              <div className="relative group flex flex-col items-center">
                <img src={reactLogo} alt="React" className="w-16 h-16 hover:scale-110 transition-transform duration-300" loading="lazy" />
                <span className="opacity-0 group-hover:opacity-100 mt-2 text-sm text-black transition-opacity duration-300">
                  React
                </span>
              </div>
              <div className="relative group flex flex-col items-center">
                <img src={GitLogo} alt="GitHub" className="w-16 h-16 hover:scale-110 transition-transform duration-300" loading="lazy" />
                <span className="opacity-0 group-hover:opacity-100 mt-2 text-sm text-black transition-opacity duration-300">
                  GitHub
                </span>
              </div>
              <div className="relative group flex flex-col items-center">
                <img src={TaillwindLogo} alt="Tailwind CSS" className="w-16 h-16 hover:scale-110 transition-transform duration-300" loading="lazy" />
                <span className="opacity-0 group-hover:opacity-100 mt-2 text-sm text-black transition-opacity duration-300">
                  Tailwind CSS
                </span>
              </div>
            </div>
          </div>

          {/* Langues Section */}
          <div className="flex flex-col items-center">
            <h2 className="text-4xl lg:text-5xl font-semibold mb-8">LANGUES</h2>
            <ul className="space-y-4 text-2xl lg:text-3xl">
              <li>Français (natif)</li>
              <li>Türkçe (natif)</li>
              <li>English (courant)</li>
            </ul>
          </div>

          {/* Education Section */}
          <div className="flex flex-col items-center">
            <h2 className="text-4xl lg:text-5xl font-semibold mb-8">EDUCATION</h2>
            <p className="text-2xl lg:text-3xl leading-relaxed text-center">
              Bac +2 développeur Frontend chez Openclassrooms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
