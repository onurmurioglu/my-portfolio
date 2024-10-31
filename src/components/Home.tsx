import React from "react";
import { motion } from "framer-motion";

const Home: React.FC = () => {
  return (
    <section id="home" className="home">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Onur Murioğlu
      </motion.h1>
      <p>Full Stack Developer - React, React Native, Node.js</p>
    </section>
  );
};

export default Home;
