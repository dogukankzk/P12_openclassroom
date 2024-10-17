import React, { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // État pour gérer l'ouverture/fermeture du menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Inverse l'état à chaque clic
  };

  return (
    <header className="w-full  flex items-center justify-between p-4 lg:p-6 text-black font-jost relative">
      {/* Logo ou texte à gauche */}
      <div className="text-lg lg:text-xl">Mon Portfolio</div>

      {/* Navigation pour grands écrans */}
      <nav className="hidden lg:flex space-x-6 items-center">
        <a href="#about" className="hover:text-blue-500 transition-colors duration-300">À propos</a>
        <a href="#projects" className="hover:text-blue-500 transition-colors duration-300">Projets</a>
      </nav>

      {/* Menu mobile (hamburger) */}
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Menu mobile avec croix pour fermer et ajustement de taille */}
      <div
        className={`fixed top-0 right-0 h-full transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } z-50 bg-white`}
        style={{ width: isMenuOpen ? '300px' : '80px' }} // Taille ajustée du menu
      >
        {/* Icône de fermeture en forme de croix */}
        <button onClick={toggleMenu} className="absolute top-4 right-4 text-black">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Contenu du menu */}
        <div className="flex flex-col items-center mt-16 space-y-6">
          <a href="#about" className="hover:text-gray-500 transition-colors duration-300 text-lg" onClick={toggleMenu}>
            À propos
          </a>
          <a href="#projects" className="hover:text-gray-500 transition-colors duration-300 text-lg" onClick={toggleMenu}>
            Projets
          </a>
          <a href="#contact" className="hover:text-gray-500 transition-colors duration-300 text-lg" onClick={toggleMenu}>
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}
