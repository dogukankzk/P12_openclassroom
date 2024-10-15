import React, { useEffect, useState } from 'react';

export default function Contact() {
  const [phoneNumber, setPhoneNumber] = useState('Loading...');
  const [email, setEmail] = useState('Loading...');

  useEffect(() => {
    // Remplacer par les vraies informations lors du chargement de la page
    setPhoneNumber('06 12 34 56 78'); // Numéro de téléphone réel
    setEmail('contact@proemail.com'); // Adresse email réelle
  }, []);

  return (
    <section id="contact" className="w-full py-16  text-black font-jost">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">Contactez-moi</h2>

        <div className="flex flex-col items-center space-y-8">
          {/* Lien LinkedIn */}
          <a
            href="https://www.linkedin.com/in/profil-linkedin" // Remplace par ton lien LinkedIn
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-4 text-lg hover:text-blue-400 transition-colors duration-300"
          >
            <span>Mon LinkedIn</span>
          </a>

          {/* Email */}
          <a
            href={`mailto:${email}`}
            className="flex items-center space-x-4 text-lg hover:text-blue-400 transition-colors duration-300"
          >
           
            <span>{email}</span>
          </a>

          {/* Téléphone */}
          <div className="flex items-center space-x-4 text-lg">
           
            <span>{phoneNumber}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
