import React from 'react';

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2>Skills</h2>
      <div className="skills-cards">

        <div className="skills-card">
          <h3>Technical Skills</h3>
          <div className="skills-columns">
            <ul>
              <li><img src="/images/python.png" alt="Python" /> Python (Intermediate)</li>
              <li><img src="/images/sql.png" alt="SQL" /> SQL (Basics)</li>
              <li><img src="/images/c++.png" alt="C++" /> C++ (Basics)</li>
              <li><img src="/images/tensorflow.png" alt="TensorFlow" /> TensorFlow</li>
              <li><img src="/images/matplotlib.png" alt="Matplotlib" /> Matplotlib</li>
              <li><img src="/images/seaborn.png" alt="Seaborn" /> Seaborn</li>
            </ul>
            <ul>
              <li><img src="/images/huggingface.png" alt="Hugging Face" /> Hugging Face Transformers</li>
              <li><img src="/images/html.png" alt="HTML" /> HTML</li>
              <li><img src="/images/css.png" alt="CSS" /> CSS</li>
              <li><img src="/images/datascience.png" alt="Data Science" /> Data Science</li>
              <li><img src="/images/ml.png" alt="Machine Learning" /> Machine Learning</li>
              <li><img src="/images/llm.png" alt="LLM" /> LLMs</li>
            </ul>
          </div>
        </div>

        <div className="skills-card">
          <h3>Tools</h3>
          <div className="skills-columns">
            <ul>
              <li><img src="/images/excel.png" alt="Excel" /> MS Excel</li>
              <li><img src="/images/langchain.png" alt="LangChain" /> LangChain</li>
              <li><img src="/images/colab.png" alt="Colab" /> Google Colab</li>
              <li><img src="/images/vs code.png" alt="VS Code" /> VS Code</li>
            </ul>
            <ul>
              <li><img src="/images/rapidminer.png" alt="RapidMiner" /> RapidMiner</li>
              <li><img src="/images/powerbi.png" alt="Power BI" /> Power BI (Intermediate)</li>
              <li><img src="/images/kicad.png" alt="KiCad" /> KiCad</li>
              <li><img src="/images/fusion360.png" alt="Fusion 360" /> Fusion 360 (Basics)</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
