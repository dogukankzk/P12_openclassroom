import React from 'react';
import Phonelogo from '../assets/phone-call.png';  // Assure-toi du chemin correct
import instagramLogo from '../assets/instagram.png'; // Assure-toi du chemin correct
import Maillogo from '../assets/email.png' 

export default function Footer() {
  return (
    <section id="contact" className="w-full py-6 text-black">
      <div className="container mx-auto">
        <p className="mb- text-3xl">CONTACT</p>

        <div className="flex-collumn mt-3	">
          {/* Numéro téléphone */}
          <p> 
            <img
              src={Phonelogo}
              alt="LinkedIn"
              className="w-7 h-7 hover:scale-110 transition-transform duration-300"
            />
          </p>

          {/* Lien vers Instagram */}
          <div className="flex  space-x-4 mt-4	">
            <img
              src={instagramLogo}
              alt="Instagram"
              className="w-7 h-7 hover:scale-110 transition-transform duration-300"
            />
            <a
              href="https://www.instagram.com/ton-instagram"  // Remplace par ton lien Instagram
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Instagram
            </a>
          </div>
          {/* Lien vers mail */}
          <div className="flex items-center space-x-4 mt-4">
            <img
              src={Maillogo}
              alt="Email"
              className="w-7 h-7 hover:scale-110 transition-transform duration-300"
            />
            <a href="mailto:ton-email@example.com" className=" hover:underline">
              ton-email@example.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
