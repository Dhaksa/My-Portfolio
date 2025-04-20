import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const About = () => {
  return (
    <section className="about" id="about">
      <h2>About Me</h2>
      <div className="about-cards">
        
        <div className="about-card">
          <h3>Personal Details</h3>
          <ul>
            <li><strong>Date of Birth:</strong> 09-08-2003</li>
            <li><strong>Location:</strong> Coimbatore, India</li>
            <li><strong>Phone:</strong> 8870704299</li>
            <li><strong>Email:</strong> dhaksananataraj@gmail.com</li>
            <li>
              <strong>Links:</strong>
              <div className="social-icons">
                <a href="https://github.com/Dhaksa" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/dhaksana-n-51644625a" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              </div>
            </li>
          </ul>
        </div>

        <div className="about-card">
          <h3>Education</h3>
          <ul>
            <li>
              <strong>Kumaraguru College of Technology (2022 - 2026)</strong><br />
              B. Tech Artificial Intelligence and Data Science<br />
              CGPA: 8.79 
            </li>
            <li>
              <strong>Adharsh Vidyalaya Matric Higher Secondary School (2021)</strong><br />
              HSC – 97.5% 
            </li>
            <li>
              <strong>Venkitraj Matriculation School (2019)</strong><br />
              SSLC – 97% 
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default About;
