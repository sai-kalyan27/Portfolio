import React from "react";

import  "../styles/Header.css";

const Header = () => {
  return (
    <header className="navbar">
      <nav className="navLinks">
      <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
