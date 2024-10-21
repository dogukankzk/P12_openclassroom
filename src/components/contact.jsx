import React, { useEffect, useState } from 'react';
import Phonelogo from '../assets/phone-call.webp'; 
import instagramLogo from '../assets/instagram (1).webp'; 
import Maillogo from '../assets/email.webp'; 

export default function Contact() {
  // Utiliser le state pour stocker les bonnes informations
  const [contactInfo, setContactInfo] = useState({
    phone: "Erreur numéro",
    email: "Erreur email",
    instagram: "Erreur Instagram"
  });

  // Utiliser useEffect pour mettre à jour les informations après le chargement de la page
  useEffect(() => {
    setTimeout(() => {
      setContactInfo({
        phone: "+33 7 76 30 54 39",  // 
        email: "dogukan.kazkondu.dev@gmail.com",  // 
        instagram: "https://www.instagram.com/dogukan_kzk"  // 
      });
    }, 1000); // Simuler un délai d'une seconde avant de remplir les infos
  }, []);

  return (
    <section id="contact" className="w-full pb-2.5 text-black">
      <div className="container mx-auto">
        <p className="mb- text-3xl pt-2">CONTACT</p>

        <div className="flex flex-col space-y-4 information">
          {/* Numéro téléphone */}
          <div className="flex items-center space-x-4 mt-2">
            <img
              src={Phonelogo}
              loading="lazy"
              alt="Phone"
              className="w-7 h-7 hover:scale-110 transition-transform duration-300"
            />
            <p>{contactInfo.phone}</p> {/* Affichage dynamique du numéro de téléphone */}
          </div>

          {/* Lien vers Instagram */}
          <div className="flex items-center space-x-4">
            <img
              src={instagramLogo}
              loading="lazy"
              alt="Instagram"
              className="w-7 h-7 hover:scale-110 transition-transform duration-300"
            />
            <a
              href={contactInfo.instagram}  // Lien dynamique vers Instagram
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Instagram.com/dogukan_kzk
            </a>
          </div>

          {/* Lien vers mail */}
          <div className="flex items-center space-x-4">
            <img
              src={Maillogo}
              loading="lazy"
              alt="Email"
              className="w-7 h-7 hover:scale-110 transition-transform duration-300"
            />
            <a href={`mailto:${contactInfo.email}`} className="hover:underline">
              {contactInfo.email} {/* Affichage dynamique de l'email */}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
