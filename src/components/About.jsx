import React from 'react';
import profileImage from '../assets/image.png'; // Chemin vers ton image

export default function About() {
  return (
    <section id="about" className="w-full h-[70vh] flex items-center justify-center text-black font-jost">
      <div className="flex items-center space-x-16 mx-auto">
        {/* Photo de profil avec bords arrondis pour supprimer la démarcation */}
        <img
          src={profileImage}
          alt="Photo de profil"
          className="w-[400px] h-[550px] object-cover rounded-lg"  // Bords arrondis pour une transition fluide avec le fond
        />

        {/* Texte à droite de la photo */}
        <div className="max-w-lg">
          {/* Nom et Prénom */}
          <h1 className="text-5xl font-bold mb-4">KAZKONDU DOGUKAN</h1>

          {/* Dev Front-End */}
          <h2 className="text-2xl font-light mb-4">Développeur Front-End</h2>

          {/* Description développée */}
          <p className="text-lg leading-relaxed">
            Je suis un développeur passionné de 22 ans. Diplômé en développement web chez OpenClassrooms, avec une spécialisation en React, Javascript, Redux, Node.js, et la création de projets web modernes.
          </p>
        </div>
      </div>
    </section>
  );
}
