import React from "react";
import { Link } from "react-scroll";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="home" smooth duration={500}>
          Home
        </Link>
        <Link to="about" smooth duration={500}>
          About
        </Link>
        <Link to="projects" smooth duration={500}>
          Projects
        </Link>
        <Link to="contact" smooth duration={500}>
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
