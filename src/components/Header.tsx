import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from "react-icons/fa";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <nav className="nav">
        <Link to="home" smooth duration={500}>
          <FaHome /> Home
        </Link>
        <Link to="about" smooth duration={500}>
          <FaUser /> About
        </Link>
        <Link to="projects" smooth duration={500}>
          <FaProjectDiagram /> Projects
        </Link>
        <Link to="contact" smooth duration={500}>
          <FaEnvelope /> Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
