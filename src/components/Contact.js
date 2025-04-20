import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2>Let's Connect</h2>
      <form className="contact-form" action="https://formspree.io/f/mblgnvrb" method="POST">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
      <p>Phone: 8870704299 | Email: dhaksananataraj@gmail.com</p>
      <div className="contact-icons">
        <a href="https://github.com/Dhaksa" target="_blank" rel="noopener noreferrer" className="icon github">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/dhaksana-n-51644625a" target="_blank" rel="noopener noreferrer" className="icon linkedin">
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
};

export default Contact;
