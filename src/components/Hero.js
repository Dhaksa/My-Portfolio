import React from 'react';
import profile from '../images/profile.jpg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Hello, I'm Dhaksana 👋</h1>
          <p>AI & Data Science Student | Aspiring Data Analyst</p>

          <div className="hero-subtext">
            <p>
              Data Science professional seeking an opportunity to contribute to a technology-driven team by applying my skills in Data Analytics, Large Language Models and Machine Learning to develop innovative and impactful solutions that drive growth while leveraging my technical expertise.
            </p>
          </div>
        </div>

        <img src={profile} alt="Dhaksana" className="profile-img" />
      </div>
    </section>
  );
};

export default Hero;
