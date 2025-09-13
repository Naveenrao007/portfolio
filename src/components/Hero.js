import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaDownload } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
      
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-text" variants={itemVariants}>
          <motion.h1 
            className="hero-title"
            variants={itemVariants}
          >
            Hi, I'm <span className="gradient-text">Naveen Raw Yadav</span>
          </motion.h1>
          
          <motion.h2 
            className="hero-subtitle"
            variants={itemVariants}
          >
            MERN Stack Developer
          </motion.h2>
          
          <motion.p 
            className="hero-description"
            variants={itemVariants}
          >
            Passionate about building scalable web applications with 2.5+ years of experience 
            in React, Node.js, Express, and MongoDB. I love creating innovative solutions 
            and turning ideas into reality.
          </motion.p>
          
          <motion.div 
            className="hero-buttons"
            variants={itemVariants}
          >
            <motion.a
              href="#projects"
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="btn btn-outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
            <motion.a
              href="/Naveen_Raw_Yadav_resume.pdf"
              download="Naveen_Raw_Yadav_Resume.pdf"
              className="btn btn-download"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload />
              Download Resume
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-image"
          variants={itemVariants}
        >
          <div className="hero-avatar">
            <div className="avatar-placeholder">
              <img 
                src="/images/profile.png" 
                alt="Naveen Raw Yadav" 
                className="profile-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <span style={{display: 'none'}}>NR</span>
            </div>
            <div className="avatar-ring"></div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div 
        className="hero-social"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1 }}
      >
        <motion.a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, y: -5 }}
        >
          <FaGithub />
        </motion.a>
        <motion.a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, y: -5 }}
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          href="mailto:yadavraw123@gmail.com"
          whileHover={{ scale: 1.2, y: -5 }}
        >
          <FaEnvelope />
        </motion.a>
        <motion.a
          href="tel:+918109949129"
          whileHover={{ scale: 1.2, y: -5 }}
        >
          <FaPhone />
        </motion.a>
      </motion.div>

      <motion.div 
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="scroll-arrow"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
