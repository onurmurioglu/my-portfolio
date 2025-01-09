import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import {
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaEnvelope,
  FaSun,
  FaMoon,
} from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <header
      className={`header ${scrolled ? "scrolled" : ""}`}
      style={{
        backgroundColor: scrolled
          ? isDarkMode
            ? "var(--header-scrolled-background)"
            : "var(--header-scrolled-background)"
          : "var(--header-background)",
      }}
    >
      <nav className="nav">
        <Link to="home" smooth duration={500} className="nav-link">
          <FaHome /> Home
        </Link>
        <Link to="about" smooth duration={500} className="nav-link">
          <FaUser /> About
        </Link>
        <Link to="projects" smooth duration={500} className="nav-link">
          <FaProjectDiagram /> Projects
        </Link>
        <Link to="contact" smooth duration={500} className="nav-link">
          <FaEnvelope /> Contact
        </Link>
        <button onClick={toggleTheme} className="theme-toggle">
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
      </nav>
    </header>
  );
};

export default Header;
