import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="footer-main">
            <div className="footer-info">
              <h3 className="footer-logo">
                <span className="gradient-text">Naveen Raw Yadav</span>
              </h3>
              <p className="footer-description">
                MERN Stack Developer passionate about creating innovative web applications
                and turning ideas into reality.
              </p>
              <div className="footer-social">
                <motion.a
                  href="https://github.com/Naveenrao007"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  title="GitHub"
                >
                  <FaGithub />
                </motion.a>
                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  title="LinkedIn"
                >
                  <FaLinkedin />
                </motion.a>
                <motion.a
                  href="mailto:yadavraw123@gmail.com"
                  whileHover={{ scale: 1.15, y: -3 }}
                  title="Email"
                >
                  <FaEnvelope />
                </motion.a>
              </div>
            </div>

            <div className="footer-links">
              <div className="footer-section">
                <h4>Quick Links</h4>
                <ul>
                  <li><a href="#home">Home</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#skills">Skills</a></li>
                  <li><a href="#experience">Experience</a></li>
                </ul>
              </div>

              <div className="footer-section">
                <h4>Portfolio</h4>
                <ul>
                  <li><a href="#projects">Projects</a></li>
                  <li><a href="#contact">Contact</a></li>
                  <li><a href="mailto:yadavraw123@gmail.com">Email Me</a></li>
                  <li><a href="tel:+918109949129">Call Me</a></li>
                </ul>
              </div>

              <div className="footer-section">
                <h4>Technologies</h4>
                <ul>
                  <li>React.js</li>
                  <li>Node.js</li>
                  <li>MongoDB</li>
                  <li>Express.js</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-copyright">
              <p>
                &copy; {currentYear} Naveen Raw Yadav &mdash; Made with{' '}
                <FaHeart className="heart-icon" /> in India
              </p>
            </div>
            <div className="footer-location">
              <p>📍 Indore, MP, India</p>
            </div>
            <motion.button
              className="back-to-top"
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              title="Back to top"
            >
              <FaArrowUp />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
