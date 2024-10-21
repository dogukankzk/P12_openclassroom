import React from 'react';
import profileImage from '../assets/IMG_3733.webp';
import Contact from './contact'; // Import du composant Contact

export default function About() {
  return (
    <section id="about" className="w-full h-auto py-10 lg:py-20 bg-[#ede0d200] font-jost">
      <div className="container mx-auto px-6 flex flex-col items-center lg:flex-row lg:items-start lg:justify-center lg:space-x-16">
        
        {/* Carte avec image de profil */}
        <div className="mb-6 lg:mb-0">
          <img
            src={profileImage}
            loading="lazy"
            alt="Photo de profil"
            className="w-[330px] h-[550px] object-cover rounded-[45px] mx-auto"
          />
        </div>

        {/* Texte à droite de l'image */}
        <div className="text-center lg:text-left -mt-2 lg:ml-20 max-w-lg lg:max-w-xl">
          {/* Nom et Prénom avec Playfair Display */}
          <h1 className="text-3xl lg:text-8xl font-bold mb-4 font-playfair">KAZKONDU DOGUKAN</h1>

          {/* Description - Premier paragraphe */}
          <p className="text-lg lg:text-xl leading-relaxed mb-4">
            Je m'appelle Kazkondu Dogukan, j'ai 22 ans, je suis diplômé de la formation de développeur front-end chez 
            <a href="https://openclassrooms.com/fr/paths/900-integrateur-web?utm_source=google&utm_medium=cpc&utm_campaign=display_google_fr_fr_b2c_prospecting_perf-max-track-developpement_230117_00_adgroup-is-&utm_source=google&utm_medium=cpc&gad_source=1&gclid=CjwKCAjwjsi4BhB5EiwAFAL0YNGrTK3MQEdDDf5Kn-3D8mbYwJDUqRI9UigikPtrMt2GqVPqVttAoxoCxxYQAvD_BwE" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 underline"> OpenClassrooms</a>. 
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
