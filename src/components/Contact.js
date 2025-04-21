import React, { useState } from 'react';
import { SiLinkedin, SiGithub, SiGmail } from 'react-icons/si';
import { FiPhone } from 'react-icons/fi';
import './styles/Contact.css';

const Contact = () => {
  const [isEmailPopupVisible, setEmailPopupVisible] = useState(false);
  const [isPhonePopupVisible, setPhonePopupVisible] = useState(false);

  const handleEmailClick = () => {
    setEmailPopupVisible(true);
  };

  const handlePhoneClick = () => {
    setPhonePopupVisible(true);
  };

  const handleEmailAction = () => {
    window.location.href = "mailto:youremail@example.com";
    setEmailPopupVisible(false);  // Close the pop-up after action
  };

  const handlePhoneAction = () => {
    window.location.href = "tel:+1234567890";
    setPhonePopupVisible(false);  // Close the pop-up after action
  };

  const closeEmailPopup = () => setEmailPopupVisible(false);
  const closePhonePopup = () => setPhonePopupVisible(false);

  return (
    <section className="contact-section" id="contact">
      <h1 className="contact-title">Get in Touch</h1>
      <p className="contact-subtitle">I'd love to connect! Reach me through any of these platforms.</p>
      <div className="contact-links">
        <a href="https://www.linkedin.com/in/ashish-patidar-y1997" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"> 
          <SiLinkedin size={36} />
        </a>
        <a href="https://github.com/PatidarAshish" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <SiGithub size={36} />
        </a>
        <a onClick={handleEmailClick} aria-label="Email">
          <SiGmail size={36} />
        </a>
        <a onClick={handlePhoneClick} aria-label="Phone">
          <FiPhone size={36} />
        </a>
      </div>

      {/* Email Pop-Up */}
      {isEmailPopupVisible && (
        <div className="popup-overlay" onClick={closeEmailPopup}></div>
      )}
      {isEmailPopupVisible && (
        <div className="popup">
          <div className="popup-content">
            <span className="popup-close" onClick={() => setEmailPopupVisible(false)}>&times;</span>
            <p onClick={handleEmailAction} className="popup-action">ashish1997sarangpur@gmail.com</p>
          </div>
        </div>
      )}

      {/* Phone Pop-Up */}
      {isPhonePopupVisible && (
        <div className="popup-overlay" onClick={closePhonePopup}></div>
      )}
      {isPhonePopupVisible && (
        <div className="popup">
          <div className="popup-content">
            <span className="popup-close" onClick={() => setPhonePopupVisible(false)}>&times;</span>
            <p onClick={handlePhoneAction} className="popup-action">+917805016541</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
