import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaDownload, FaTimes } from 'react-icons/fa';
import './FloatingDownload.css';

const FloatingDownload = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // Check screen size
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  useEffect(() => {
    // Only show on big screens
    if (!isSmallScreen) {
      const showTimer = setTimeout(() => {
        setIsVisible(true);
      }, 3000); // Show after 3 seconds

      return () => clearTimeout(showTimer);
    }
  }, [isSmallScreen]);

  useEffect(() => {
    // Auto dismiss after 2 seconds of being visible
    if (isVisible && !isSmallScreen) {
      const dismissTimer = setTimeout(() => {
        setIsDismissed(true);
        setIsVisible(false);
      }, 2000); // Auto dismiss after 2 seconds

      return () => clearTimeout(dismissTimer);
    }
  }, [isVisible, isSmallScreen]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  const handleDownload = () => {
    // Track download if needed
    console.log('Resume downloaded');
  };

  // Don't render on small screens
  if (isSmallScreen) {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && !isDismissed && (
        <motion.div
          className="floating-download"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div className="floating-content">
            <div className="floating-text">
              <h4>Download Resume</h4>
              <p>Get my complete resume</p>
            </div>
            <div className="floating-actions">
              <motion.a
                href="/Naveen_Raw_Yadav_resume.pdf"
                download="Naveen_Raw_Yadav_Resume.pdf"
                className="floating-btn"
                onClick={handleDownload}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload />
              </motion.a>
              <motion.button
                className="floating-close"
                onClick={handleDismiss}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTimes />
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingDownload;
