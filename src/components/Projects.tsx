import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaJava,
  FaNodeJs,
  FaMobile,
  FaDatabase,
  FaCreditCard,
  FaChartLine,
  FaTasks,
  FaBook,
  FaSchool,
  FaComments,
  FaMapMarkedAlt,
} from "react-icons/fa";
import {
  SiSpring,
  SiSocketdotio,
  SiFirebase,
  SiAntdesign,
} from "react-icons/si";

type Project = {
  title: string;
  description: string;
  icons: JSX.Element[];
};

const projects: Project[] = [
  {
    title: "Q&A Blog Application",
    description:
      "Back end application of the blog project where users can post question and answer posts using Java Spring Boot.",
    icons: [
      <FaJava key="java" />,
      <SiSpring key="spring" />,
      <FaDatabase key="db" />,
    ],
  },
  {
    title: "Pre-accounting, order and stock tracking application",
    description:
      "Web application that performs pre-accounting, inventory tracking, ordering and invoicing processes of businesses using React and materialUI.",
    icons: [
      <FaReact key="react" />,
      <FaChartLine key="chart" />,
      <FaDatabase key="db" />,
    ],
  },
  {
    title: "Electric Vehicle Charging Station",
    description: "Payment, reservation, charging initiation, and completion.",
    icons: [<FaCreditCard key="payment" />, <FaDatabase key="db" />],
  },
  {
    title: "AI-powered Photo Editing App",
    description: "Allows users to apply AI-supported filters to their photos.",
    icons: [<FaReact key="react" />, <FaNodeJs key="node" />],
  },
  {
    title: "Task Management and Tracking Application",
    description:
      "Increases in-company production efficiency, job tracking, assignment, and includes chat features for business communication.",
    icons: [<FaTasks key="tasks" />, <FaComments key="chat" />],
  },
  {
    title: "Web Documentation Application with React",
    description: "Report detail page with the use of Ant Design.",
    icons: [
      <FaReact key="react" />,
      <SiAntdesign key="antd" />,
      <FaBook key="docs" />,
    ],
  },
  {
    title: "Yapıkredi Posnet Payment System Integration for E-commerce App",
    description:
      "Integration of Yapı Kredi Bank's virtual POS system for online payments; data security using Base64 and SHA256 encryptions.",
    icons: [<FaCreditCard key="payment" />, <FaDatabase key="db" />],
  },
  {
    title: "E-Commerce Mobile App with React Native",
    description:
      "A mobile application that can sell products across various categories.",
    icons: [<FaReact key="react" />, <FaMobile key="mobile" />],
  },
  {
    title: "RFID Card Management Mobile Application",
    description:
      "Allows writing, reading, and formatting data to RFID cards via NFC.",
    icons: [<FaMobile key="mobile" />, <FaDatabase key="db" />],
  },
  {
    title: "School Management Platform Web Project",
    description:
      "Contributed to the development of a school management web project using React.",
    icons: [<FaReact key="react" />, <FaSchool key="school" />],
  },
  {
    title: "'Okulyo' Mobile Application",
    description:
      "NFC transactions, payment transactions, attendance interfaces for school management.",
    icons: [
      <FaMobile key="mobile" />,
      <FaSchool key="school" />,
      <FaCreditCard key="payment" />,
    ],
  },
  {
    title:
      "Real-time Foreign Currency Translation Application with React Native",
    description:
      "Cryptocurrency converter application made with the SocketIO library.",
    icons: [
      <FaReact key="react" />,
      <FaMobile key="mobile" />,
      <SiSocketdotio key="socket" />,
    ],
  },
  {
    title: "Real-time Chat App with React Native",
    description:
      "An application that allows users to message in real time using Firebase.",
    icons: [
      <FaReact key="react" />,
      <FaMobile key="mobile" />,
      <SiFirebase key="firebase" />,
    ],
  },
  {
    title: "Map and Geolocation App with React Native",
    description:
      "Made using the Google Maps API for map and geolocation functionality.",
    icons: [
      <FaReact key="react" />,
      <FaMobile key="mobile" />,
      <FaMapMarkedAlt key="map" />,
    ],
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects">
      <motion.div
        className="section-container"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>My Projects</h2>
        <div className="project-list">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 8px 30px rgba(0, 0, 0, 0.12)",
              }}
            >
              <div>
                <div className="project-icons">
                  {project.icons.map((icon, iconIndex) => (
                    <span key={iconIndex} className="project-icon">
                      {icon}
                    </span>
                  ))}
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
