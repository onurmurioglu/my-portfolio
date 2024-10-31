import React from "react";
import { motion } from "framer-motion";
import profilePhoto from "../assets/myPhoto.png";

const Home: React.FC = () => {
  return (
    <section id="home" className="home">
      <div className="profile-container">
        <motion.img
          src={profilePhoto}
          alt="Profil"
          className="profile-photo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Onur Murioğlu
        </motion.h1>
      </div>
      <p>Full Stack Developer - React, React Native, Node.js</p>
    </section>
  );
};

export default Home;
