import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaMobile,
  FaJava,
  FaDocker,
  FaDatabase,
} from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";

const About: React.FC = () => {
  const skills = [
    {
      icon: <FaReact />,
      title: "Frontend Development",
      description: "React, TypeScript, CSS, HTML",
    },
    {
      icon: <FaNodeJs />,
      title: "Backend Development",
      description: "Node.js, Express, RESTful APIs",
    },
    {
      icon: <FaMobile />,
      title: "Mobile Development",
      description: "React Native, iOS, Android",
    },
    {
      icon: <FaJava />,
      title: "Java Development",
      description: "Java, Object-Oriented Programming",
    },
    {
      icon: <SiSpringboot />,
      title: "Spring Framework",
      description: "Spring Boot, Spring MVC, Spring Data",
    },
    {
      icon: <FaDocker />,
      title: "DevOps",
      description: "Docker, Container Management",
    },
    {
      icon: <FaDatabase />,
      title: "Databases",
      description: "PostgreSQL, MySQL, Database Design",
    },
  ];

  return (
    <section id="about" className="about">
      <motion.div
        className="section-container"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>About Me</h2>
        <p className="about-description">
          I am a Full Stack Developer specialized in React and React Native,
          passionate about creating elegant and efficient solutions. With
          expertise in both frontend and backend technologies, I build scalable
          and robust applications.
        </p>

        <div className="skills-container">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;
