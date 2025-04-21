import React from 'react';
import { motion } from 'framer-motion';

const SplitScreen = () => {
  return (
    <section className="split-screen" id="split">
      <div className="left" onClick={() => window.location.href = "#about"}>
        <div className="overlay"></div>
        <div className="content">
          <motion.h2 whileHover={{ scale: 1.1 }}>Data Scientist</motion.h2>
          <p>Gen AI</p>
        </div>
      </div>
      <div className="right" onClick={() => window.location.href = "/portfolio"}>
        <div className="overlay"></div>
        <div className="content">
          <motion.h2 whileHover={{ scale: 1.1 }}>Tinkerings</motion.h2>
          <p>Trying, testing, and learning</p>
        </div>
      </div>
    </section>
  );
};

export default SplitScreen;