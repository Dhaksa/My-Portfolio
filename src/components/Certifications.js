import React from 'react';
import { FaCertificate, FaChalkboardTeacher, FaPython, FaFileCode, FaRobot } from 'react-icons/fa';


const iconStyle = {
  color: '#0044cc',
  marginRight: '8px',
  verticalAlign: 'middle',
};

const Certifications = () => {
  return (
    <section className="certifications" id="certifications">
      <h2>Certifications</h2>
      <div className="certification-list">
        <div className="certification-card">
          <h3><FaCertificate style={iconStyle} />Power BI Course (Udemy)</h3>
          <p>Completed “Complete Power BI Course for Beginners to Intermediate” – June 2024.</p>
        </div>

        <div className="certification-card">
          <h3><FaRobot style={iconStyle} />AI-ML Virtual Internship – EduSkills</h3>
          <p>Virtual internship focused on AI and Machine Learning – April to June 2024.</p>
        </div>

        <div className="certification-card">
          <h3><FaChalkboardTeacher style={iconStyle} />NPTEL: Responsible and Safe AI Systems</h3>
          <p>Certified through NPTEL – July to October 2024.</p>
        </div>

        <div className="certification-card">
          <h3><FaChalkboardTeacher style={iconStyle} />NPTEL: Natural Language Processing</h3>
          <p>Completed NLP course with certification – January to April 2024.</p>
        </div>

        <div className="certification-card">
          <h3><FaPython style={iconStyle} />Data Analysis with Python – FreeCodeCamp</h3>
          <p>Completed data analysis course – October 2024 to March 2025.</p>
        </div>

        <div className="certification-card">
          <h3><FaFileCode style={iconStyle} />Infosys Virtual Internship</h3>
          <p>Worked on "Chat with Your Documents" project – December 2024 to February 2025.</p>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
