import React from "react";
import { motion } from "framer-motion";

type Project = {
  title: string;
  description: string;
};

const projects: Project[] = [
  {
    title: "Electric Vehicle Charging Station",
    description: "Özellikler: ödeme, rezervasyon, şarj başlatma ve tamamlama.",
  },
  {
    title: "AI-powered Photo Editing App",
    description: "Yapay zeka destekli fotoğraf filtreleri uygulama.",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projelerim</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            whileHover={{ scale: 1.05 }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
