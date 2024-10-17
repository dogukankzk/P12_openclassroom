import React, { useEffect, useState } from 'react';
import projectsData from '../data/projects.json'; // Assure-toi que le chemin est correct

export default function Projects() {
  const [projects, setProjects] = useState([]);

  // Charger les projets à partir du fichier JSON
  useEffect(() => {
    setProjects(projectsData);
  }, []);

  return (
    <section id="projects" className="w-full py-20  font-jost">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">Mes Projets</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div key={index} className="bg-[#b9aa9d] border-2 border-[#bda58fa1] shadow-md rounded-lg p-6 transform transition-transform duration-300 hover:scale-105 text-black">
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
                className="text-back hover:text-blue-600 underline"
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
