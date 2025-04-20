import React from 'react';
import { FaGraduationCap, FaFileAlt, FaRobot, FaTrophy, FaUserCheck, FaAward } from 'react-icons/fa';

const iconStyle = {
  color: '#0044cc',
  marginRight: '8px',
  verticalAlign: 'middle',
};

const PaperAndAchievements = () => {
  return (
    <div>
      {/* Paper Presentation Section */}
      <section className="paper-presentation" id="paper-presentation">
        <h2>Paper Presentation</h2>
        <div className="paper-cards">
          <div className="paper-card">
            <h3><FaGraduationCap style={iconStyle} />Extractive Text Summarization using Two-Layered RBM</h3>
            <p>Presented at the ADCIS 2024 conference on September 20-21, BITS Pilani, Goa.</p>
          </div>

          <div className="paper-card">
            <h3><FaFileAlt style={iconStyle} />A Comprehensive Review of Sentimental Analysis</h3>
            <p>Presented at ICAIP 2024 conference on August 29, 2024.</p>
          </div>

          <div className="paper-card">
            <h3><FaRobot style={iconStyle} />Unmasking Deepfakes: A Multi-Domain Analysis for Face Swap Detection</h3>
            <p>Presented the abstract in CIT on February 28, 2025.</p>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="achievements" id="achievements">
        <h2>Achievements</h2>
        <div className="achievement-cards">
          {/* New Chairperson Card */}
          <div className="achievement-card">
            <h3><FaTrophy style={iconStyle} />Chairperson - IEEE Women in Engineering Affinity Group-KCT (January 2025 – Present)</h3>
            <p>Lead events, workshops, and webinars to empower women in engineering and drive strategic initiatives for impactful networking.</p>
          </div>

          {/* Other Achievement Cards */}
          <div className="achievement-card">
            <h3><FaTrophy style={iconStyle} />Wise-AI-Thon</h3>
            <p>Secured 4th place in the Wise-AI-Thon (Conducted by Wise Work).</p>
          </div>

          <div className="achievement-card">
            <h3><FaUserCheck style={iconStyle} />Participation</h3>
            <p>Participation in SIH Internal Hackathon, other hackathons, and various co-curricular and extra-curricular events and workshops.</p>
          </div>

          <div className="achievement-card">
            <h3><FaAward style={iconStyle} />Mahatma Gandhi Merit Scholarship</h3>
            <p>Awardee for three consecutive years (2022-2023, 2023-2024, and 2024-2025).</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaperAndAchievements;
