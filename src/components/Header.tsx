import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import {
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaEnvelope,
  FaSun,
  FaMoon,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`header ${scrolled ? "scrolled" : ""} ${
        isMenuOpen ? "menu-open" : ""
      }`}
      style={{
        backgroundColor: scrolled
          ? isDarkMode
            ? "var(--header-scrolled-background)"
            : "var(--header-scrolled-background)"
          : "var(--header-background)",
      }}
    >
      <div className="header-content">
        <button className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
          <Link
            to="home"
            smooth
            duration={500}
            className="nav-link"
            onClick={closeMenu}
          >
            <FaHome /> Home
          </Link>
          <Link
            to="about"
            smooth
            duration={500}
            className="nav-link"
            onClick={closeMenu}
          >
            <FaUser /> About
          </Link>
          <Link
            to="projects"
            smooth
            duration={500}
            className="nav-link"
            onClick={closeMenu}
          >
            <FaProjectDiagram /> Projects
          </Link>
          <Link
            to="contact"
            smooth
            duration={500}
            className="nav-link"
            onClick={closeMenu}
          >
            <FaEnvelope /> Contact
          </Link>
          <button onClick={toggleTheme} className="theme-toggle">
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
