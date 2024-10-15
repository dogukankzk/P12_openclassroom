import React from 'react';

export default function Header() {
  return (
    <header className="w-full h-20 flex items-center justify-between p-6 text-black font-jost">
      {/* Logo ou texte à gauche */}
      <div className="text-2xl">Mon Portfolio</div>
      
      {/* Nom et Prénom au centre */}
      <div className="absolute inset-x-0 text-center">
        <p className="text-lg font-light tracking-wide">
         KAZKONDU DOGUKAN
        </p>
      </div>

      {/* Navigation */}
      <nav className="space-x-6">
        <a href="#about" className="text-lg hover:text-blue-500 transition duration-300">À propos</a>
        <a href="#projects" className="text-lg hover:text-blue-500 transition duration-300">Projets</a>
        <a href="#contact" className="text-lg hover:text-blue-500 transition duration-300">Contact</a>
      </nav>
    </header>
  );
}
