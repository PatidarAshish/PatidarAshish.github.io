import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const About = () => {

  return (
    <section className="about" id="about">
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        About Me
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Results-driven Data Scientist and GenAI Developer with 4+ years of experience building end-to-end AI/ML solutions and automating complex workflows. Skilled in building GenAI applications, performing data preprocessing, and applying LLMs to drive real-world impact. Microsoft Certified Azure Data Scientist Associate with a deep understanding of model deployment and cloud-based services. Strong collaborator, adept at translating complex business needs into actionable, data-driven solutions. Committed to continuous learning and leveraging emerging technologies to solve complex challenges.
      </motion.p>

      {/* React Router Link to the Journey page */}
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Link to="/journey" className="journey-button">
      Journey →
      </Link>
      </motion.div>

    </section>
  );
};

export default About;
