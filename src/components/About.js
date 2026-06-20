import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaRocket, FaUsers, FaLightbulb } from 'react-icons/fa';
import './About.css';

const About = () => {
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

  const features = [
    {
      icon: <FaCode />,
      title: "Clean Code",
      description: "I write maintainable, scalable, and well-documented code following best practices."
    },
    {
      icon: <FaRocket />,
      title: "Performance",
      description: "Optimized applications with fast loading times and smooth user experiences."
    },
    {
      icon: <FaUsers />,
      title: "Collaboration",
      description: "Experienced in Agile methodologies and working with cross-functional teams."
    },
    {
      icon: <FaLightbulb />,
      title: "Innovation",
      description: "Always exploring new technologies and finding creative solutions to complex problems."
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            About Me
          </motion.h2>
          
          <div className="about-content">
            <motion.div className="about-text" variants={itemVariants}>
              <h3>Passionate Full Stack Developer</h3>
              <p>
                I am a dedicated Full Stack Engineer with 3+ years of experience building 
                high-performance web applications. Combining a strong foundation in IT and Mathematics, 
                I bring an analytical, logic-driven approach to solving complex technical challenges.
              </p>
              <p>
                I specialize in crafting responsive user interfaces and architecting scalable backend systems 
                across financial services, ERP platforms, and e-commerce applications—always focused on 
                writing clean, maintainable code and continuous learning.
              </p>
              
            </motion.div>

            <motion.div className="about-stats" variants={itemVariants}>
              <div className="stat-item">
                <div className="stat-number">3+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">10+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">5+</div>
                <div className="stat-label">Technologies</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">Client Satisfaction</div>
              </div>
            </motion.div>
          </div>

          <motion.div className="about-features" variants={itemVariants}>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="feature-header">
                  <div className="feature-icon">
                    {feature.icon}
                  </div>
                  <h4>{feature.title}</h4>
                </div>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
