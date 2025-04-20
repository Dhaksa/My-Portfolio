import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Dhaksana N </div>
      <ul>
        <li><a href="#about">About</a></li>
      {/*  <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#certifications">Certifications</a></li> */}
        <li><a href="/images/Dhaksana%20N.pdf" download>Download Resume</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
