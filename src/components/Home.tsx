import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import profilePhoto from "../assets/myPhoto.png";

const Home: React.FC = () => {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <motion.div
          className="profile-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img
            src={profilePhoto}
            alt="Profile"
            className="profile-photo"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Onur Murioğlu
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="title-text"
          >
            Full Stack Developer
            <span className="tech-stack">
              (React, React Native, Java Spring Boot)
            </span>
          </motion.p>
          <motion.div
            className="social-links"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <a
              href="https://github.com/onurmurioglu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/onur-murio%C4%9Flu-9409ab19a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/onurmurioglu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="bio-card"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h2>Education & Background</h2>
          <div className="bio-content">
            <h3>Education</h3>
            <p>Computer Engineering, Iskenderun Technical University</p>
            <p>
              <i>Bachelor 's Degree, 2022.</i>
            </p>

            <h3>About Me</h3>
            <p>
              I am a passionate Full Stack Developer with 4 years of experience
              in developing web and mobile applications. My journey in software
              development started during my university years, and since then,
              I've been constantly learning and improving my skills.
            </p>

            <h3>Professional Focus</h3>
            <p>
              Specialized in building scalable applications using modern
              technologies. I have a strong foundation in both frontend and
              backend development. I am actively working with React ecosystem
              and Java Spring Boot applications.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
