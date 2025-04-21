import React, { useEffect } from 'react';
import './styles/Journey.css';
import { motion } from 'framer-motion';

const journeyData = [
  {
    title: 'Graduated - B.E. in Electronics and Telecommunications',
    time: '2016 - 2020',
    description: 'Completed my degree with 7.4 CGPA from Institute of Engineering and Technology (IET), DAVV - Indore',
  },
  {
    title: 'Intern at Cognizant',
    time: '01/2020 - 05/2020',
    description: 'Designed functional test cases with Selenium and gained hands-on experience in Core Java, SQL, HTML, and CSS.',
  },
  {
    title: 'Automation Engineer at Cognizant',
    time: '11/2020 - 06/2022',
    description: 'Awarded the #CognizantCheers Gold for delivering impactful automation and data validation solutions — including a utility that reduced manual QA effort by 90%, dynamic data extraction using Azure APIs cutting processing time by 50%, and optimized RPA scripts with Robot Framework (Python).',
  },
  {
    title: 'AI/ML Research Engineer at Cognizant',
    time: '06/2022 - 12/2023',
    description: 'Worked on cutting-edge AI initiatives including GenAI backend development using GPT models and LangChain, fine-tuning open-source LLMs (LLaMa, Falcon) for domain-specific solutions, RAG pipelines, video analytics with PyTorch, object detection, and time series forecasting with explainability. Also built AI assurance POCs for text, image, and video models.',
  },
  {
    title: 'Data Scientist - GenAI CoE at EXL Digital',
    time: '01/2024 - Present',
    description: 'Designed and delivered AI-powered complaint management and workflow automation solutions using GPT-4o, Azure services, and Copilot Studio. Developed secure cloud architectures, automated document handling, and built custom chatbots to enhance productivity and streamline client use cases.',
  }
];

const Journey = () => {
    useEffect(() => {
        // Scroll to the top of the page when it loads
        window.scrollTo(0, 0);
      }, []);
  return (
    <section className="journey-container">
      <h1 className="journey-title">My Journey</h1>
      {/* Resume Download Button */}
      <div className="journey-button-wrapper">
        <a href="/assets/resume.pdf" download className="journey-button">
          Download Resume
        </a>
      </div>

      <div className="timeline">

        {/* Birth Marker at the top of the timeline */}
        <div className="timeline-start">
          <div className="year-marker">Born: 1997</div>
        </div>

        {journeyData.map((item, index) => (
          <motion.div
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            key={index}
          >
            {/* Year as part of the timeline */}
            <div className="year">{item.time}</div>

            {/* Content Box */}
            <div className="content">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </motion.div>
        ))}
        <div className="present-marker">Exploring New Horizons</div>
      </div>
    </section>
  );
};

export default Journey;
