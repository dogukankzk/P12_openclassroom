import React from 'react';
import profileImage from '../assets/IMG_3733.JPG'; // Chemin vers ton image de profil
import htmlLogo from '../assets/html-5.png';  // Chemin vers ton logo HTML
import cssLogo from '../assets/css.png';    // Chemin vers ton logo CSS
import jsLogo from '../assets/javascript.png';  // Chemin vers ton logo JavaScript
import reactLogo from '../assets/physics.png';  // Chemin vers ton logo React
import Contact from './contact'; // Import du composant Contact

export default function About() {
  return (
    <section id="about" className="w-full h-auto py-10 lg:py-20 bg-[#ede0d200] font-jost">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-start justify-center lg:space-x-16">
        
        {/* Carte avec image de profil */}
        <div>
          <img
            src={profileImage}
            alt="Photo de profil"
            className="w-[330px] h-[550px] object-cover rounded-[45px] mx-auto"
          />
        </div>

        {/* Texte à droite de l'image */}
        <div className="lg:ml-20 max-w-lg lg:max-w-2xl lg:text-left mt-6 lg:mt-0">
          {/* Nom et Prénom avec Playfair Display */}
          <h1 className="text-3xl lg:text-8xl font-bold mb-4 font-playfair">KAZKONDU DOGUKAN</h1>

          {/* Description - Premier paragraphe */}
          <p className="text-lg lg:text-xl leading-relaxed mb-4">
            Je m'appelle Kazkondu Dogukan, j'ai 22 ans, et je suis diplômé de la formation de développeur front-end chez 
            <a href="lien-vers-ta-formation" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 underline"> OpenClassrooms</a>. 
          </p>

          {/* Description - Second paragraphe */}
          <p className="text-lg lg:text-xl leading-relaxed">
            N'hésitez pas à explorer mon portfolio pour découvrir mes réalisations et mes compétences en développement front-end. Si vous êtes intéressé par mon profil, n'hésitez pas à me contacter pour discuter d'opportunités.
          </p>

          {/* Composant Contact en dessous de la description */}
          <Contact />
        </div>
      </div>
    </section>
  );
}
