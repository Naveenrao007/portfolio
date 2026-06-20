import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaDownload, FaCircle } from 'react-icons/fa';
import './Hero.css';

const TYPING_WORDS = [
  'MERN Stack Developer',
  'Full Stack Engineer',
  'React.js Specialist',
  'Node.js Developer',
];

const TypingAnimation = () => {
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = TYPING_WORDS[wordIndex];
    const typingSpeed = isDeleting ? 50 : 90;
    const pauseTime = isDeleting ? 0 : 1800;

    let timeout;

    if (!isDeleting && charIndex === currentWord.length) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % TYPING_WORDS.length);
    } else {
      timeout = setTimeout(() => {
        setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
        setDisplayText(currentWord.slice(0, charIndex + (isDeleting ? -1 : 1)));
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <span className="typing-text">
      {displayText}
      <span className="typing-cursor">|</span>
    </span>
  );
};

const Hero = () => {
  const handleDownloadResume = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/Naveen_Raw_Yadav_resume.pdf');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'Naveen_Raw_Yadav_Resume.pdf');
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed', error);
      window.open('/Naveen_Raw_Yadav_resume.pdf', '_blank');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
        <div className="hero-grid"></div>
      </div>

      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-text" variants={itemVariants}>
          {/* Availability badge */}
          <motion.div className="availability-badge" variants={itemVariants}>
            <FaCircle className="badge-dot" />
            <span>Open to Work</span>
          </motion.div>

          <motion.h1 className="hero-title" variants={itemVariants}>
            Hi, I'm{' '}
            <span className="gradient-text">Naveen Raw Yadav</span>
          </motion.h1>

          <motion.h2 className="hero-subtitle" variants={itemVariants}>
            <TypingAnimation />
          </motion.h2>

          <motion.p className="hero-description" variants={itemVariants}>
            A results-driven Full Stack Developer with{' '}
            <strong>3+ years</strong> of hands-on experience designing and building
            scalable web applications. Specializing in{' '}
            <strong>React, Node.js, Express, PostgreSQL, and MongoDB</strong>, I
            thrive on transforming complex requirements into high-performance,
            user-centric software solutions.
          </motion.p>

          <motion.div className="hero-buttons" variants={itemVariants}>
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
              onClick={handleDownloadResume}
              className="btn btn-download"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload />
              Resume
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div className="hero-image" variants={itemVariants}>
          <div className="hero-avatar">
            <div className="avatar-glow"></div>
            <div className="avatar-placeholder">
              <img
                src="/images/NaveenImg.png"
                alt="Naveen Raw Yadav"
                className="profile-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
              />
              <span className="avatar-initials" style={{ display: 'none' }}>NR</span>
            </div>
            <div className="avatar-ring"></div>
            <div className="avatar-ring avatar-ring-2"></div>
          </div>
        </motion.div>
      </motion.div>

      {/* Fixed social sidebar */}
      <motion.div
        className="hero-social"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <motion.a
          href="https://github.com/Naveenrao007"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, y: -4 }}
          title="GitHub"
        >
          <FaGithub />
        </motion.a>
        <motion.a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, y: -4 }}
          title="LinkedIn"
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          href="mailto:yadavraw123@gmail.com"
          whileHover={{ scale: 1.2, y: -4 }}
          title="Email"
        >
          <FaEnvelope />
        </motion.a>
        <motion.a
          href="tel:+918109949129"
          whileHover={{ scale: 1.2, y: -4 }}
          title="Phone"
        >
          <FaPhone />
        </motion.a>
        <div className="social-line"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
