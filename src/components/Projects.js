import React, { useRef } from 'react';

const Projects = () => {
  const sliderRef = useRef(null);
  let currentIndex = 0;

  const slideProject = (direction) => {
    if (!sliderRef.current) return;
    const slider = sliderRef.current;
    const totalSlides = slider.children.length;
    currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  };

  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="project-list">

        {/* Project 1 */}
        <div className="project-card">
          <img src="/images/project1.png" alt="Extractive Text Summarization" className="project-image" />
          <div className="project-content">
            <h3><strong>Extractive Text Summarization using Two-Layered RBM</strong></h3>
            <p>
              Developed an extractive text summarization system using a two-layered Restricted Boltzmann Machine (RBM)
              to identify and extract key information based on similarity and features.
              The system was hosted with a user-friendly interface using Streamlit for efficient summarization.
            </p>
            <a
              href="https://github.com/Dhaksa/Extractive-text-summarisation-mini-project-"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <img src="/images/project2.jpeg" alt="Chat with Documents" className="project-image" />
          <div className="project-content">
            <h3><strong>Chat with Documents</strong></h3>
            <p>
              Built a PDF-based question answering system powered by Large Language Models (LLMs).
              The system processes and chunks PDFs, generates embeddings, and stores them in a vector database.
              A Streamlit UI was implemented to provide accurate and interactive query responses.
            </p>
            <a
              href="https://github.com/Dhaksa/chat_with_your_documents"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </div>
        </div>

        {/* Project 3 - Power BI with Slider */}
        <div className="project-card">
          <div className="slider-container">
            <button className="slider-btn prev" onClick={() => slideProject(-1)}>&lt;</button>
            <div className="slider-images" ref={sliderRef}>
              <img src="/images/project3_1.png" alt="Dashboard Slide 1" className="slider-image" />
              <img src="/images/project3_2.png" alt="Dashboard Slide 2" className="slider-image" />
              <img src="/images/project3_3.png" alt="Dashboard Slide 3" className="slider-image" />
            </div>
            <button className="slider-btn next" onClick={() => slideProject(1)}>&gt;</button>
          </div>

          <div className="project-content">
            <h3><strong>Power BI Employee Insights Dashboard</strong></h3>
            <p>
              Developed a multi-page interactive dashboard using a 17K+ employee HR dataset to visualize demographics,
              training engagement, and performance KPIs. Built DAX measures for dynamic analysis and identified key trends
              to support data-driven HR decisions.
            </p>
            <a
              href="https://github.com/Dhaksa/Employee-Insights-Dashboard"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
