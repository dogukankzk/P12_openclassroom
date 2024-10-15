import React from 'react';

export default function Projects() {
  const projects = [
    {
    title: "Améliorez l'interface d'un site mobile avec des animations CSS"
    ,
    description: "Ce projet vous amène à travailler sur l'interface mobile-first d'une start-up, en utilisant Sass et des animations CSS.",
    skills: [
        "Intégrer une maquette en mobile-first",
        "Mettre en œuvre des animations CSS",
        "Versionner son projet avec Git et GitHub",
        ],
    languages: ['Sass', 'CSS', 'Git', 'GitHub'],
    link: 'https://github.com/dogukankzk/OpenClassroom_projet4.git',
    },
    {
       title: 'Créez une page web dynamique avec JavaScript',
       description: 'Ce projet vous engage à créer une page web dynamique pour une architecte d\'intérieur en utilisant JavaScript et en communiquant avec une API.',
       skills: [
          'Gérer les événements utilisateurs avec JavaScript',
          'Manipuler les éléments du DOM avec JavaScript',
          'Récupérer les données utilisateurs via des formulaires'
        ],
      languages: ['JavaScript', 'API', 'HTML', 'CSS'],
      link: 'https://github.com/dogukankzk/Projet_6_OC.git',
    },
    {
        title: 'Créez une application web de location immobilière avec React',
        description: 'Dans ce projet, vous allez implémenter le front-end d\'une application en utilisant React et React Router pour une expérience utilisateur moderne et réactive.',
        skills: [
          'Initialiser une application avec Create React App',
          'Configurer la navigation entre les pages avec React Router',
          'Développer des composants React pour l\'interface utilisateur',
          'Mettre en œuvre des animations CSS',
          'Développer une interface web avec Sass'
        ],
        languages: ['React', 'React Router', 'JavaScript', 'Sass', 'CSS'],
      link: 'https://github.com/dogukankzk/kasa_New.git',
    },
    {
        title: 'Implémentez le front-end d\'une application bancaire avec React',
        description: 'Dans ce projet, vous travaillerez sur le développement front-end d\'une application bancaire en utilisant React et Redux pour créer une expérience utilisateur dynamique et réactive.',
        skills: [
          'Afficher les données du back end sur l\'interface via des appels API',
          'Configurer des routes API pour la communication client / serveur',
          'Implémenter la gestion des données avec Redux pour assurer le fonctionnement du front'
        ],
        languages: ['React', 'Redux', 'API', 'Swagger', 'JavaScript'],
      link: 'https://github.com/dogukankzk/P10_openclassroom.git',
    },
  ];

  return (
    <section id="projects" className="w-full py-20 bg-[#cec2b573] font-jost">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">Mes Projets</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-[#b9aa9d] shadow-lg rounded-lg p-6 transform transition-transform duration-300 hover:scale-105"
            >
              {/* Titre du projet */}
              <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>

              {/* Description rapide */}
              <p className="text-lg mb-4">{project.description}</p>

              {/* Compétences utilisées */}
              <div className="mb-4">
                <h4 className="font-semibold">Compétences utilisées :</h4>
                <ul className="list-disc list-inside">
                  {project.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>

              {/* Langages utilisés */}
              <div className="mb-4">
                <h4 className="font-semibold">Langages utilisés :</h4>
                <ul className="list-disc list-inside">
                  {project.languages.map((language, index) => (
                    <li key={index}>{language}</li>
                  ))}
                </ul>
              </div>

              {/* Lien vers le projet */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black-500 hover:text-black-600 underline"
              >
                Voir le projet
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
