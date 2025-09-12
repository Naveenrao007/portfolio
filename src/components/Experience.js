import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
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

  const experiences = [
    {
      title: "Senior Developer",
      company: "Universal Soft Lab",
      location: "Indore, MP",
      period: "Apr 2025 - Present",
      type: "Full-time",
      description: "Leading development of MERN stack features for Cosmos NBFC application with focus on financial services modules.",
      responsibilities: [
        "Develop and maintain MERN stack features for Cosmos NBFC application using React, Redux Toolkit, Node.js, and MongoDB",
        "Implement responsive UI components and complex business logic for financial services modules",
        "Lead code reviews and establish coding standards for improved code quality and maintainability",
        "Collaborate with cross-functional teams to deliver features on schedule using Agile methodologies",
        "Mentor junior developers and implement best practices for development workflows"
      ],
      technologies: ["React.js", "Redux Toolkit", "Node.js", "MongoDB", "JavaScript", "Agile"]
    },
    {
      title: "Jr. Software Developer",
      company: "Arun Data Processing",
      location: "Ahmedabad, Gujarat",
      period: "Oct 2023 - Jul 2024",
      type: "Full-time",
      description: "Developed responsive user interfaces and RESTful APIs with focus on performance optimization.",
      responsibilities: [
        "Developed responsive user interfaces using React.js and JavaScript, improving Lighthouse performance scores",
        "Built RESTful APIs using Node.js and Express.js with MongoDB database integration and JWT authentication",
        "Implemented CRUD operations with data validation and error handling",
        "Participated in Agile sprint planning and code reviews",
        "Created reusable React components and optimized application performance"
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JavaScript", "JWT"]
    },
    {
      title: "Jr. Software Developer",
      company: "Epitaxial-IT Pvt Ltd",
      location: "Ahmedabad, Gujarat",
      period: "May 2022 - Sep 2023",
      type: "Full-time",
      description: "Started career in web development with focus on frontend technologies and version control practices.",
      responsibilities: [
        "Developed and maintained web applications using JavaScript, HTML5, and CSS3",
        "Participated in code reviews and maintained comprehensive documentation",
        "Implemented Git version control workflows, including feature branches and pull requests",
        "Assisted with backend API integrations and ensured consistent UI design"
      ],
      technologies: ["JavaScript", "HTML5", "CSS3", "Git", "API Integration"]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Professional Experience
          </motion.h2>
          
          <motion.p className="experience-description" variants={itemVariants}>
            My journey in software development with a focus on MERN stack technologies
          </motion.p>

          <div className="timeline">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                variants={itemVariants}
              >
                <div className="timeline-content">
                  <div className="experience-header">
                    <div className="experience-row">
                      <div className="experience-left">
                        <h3>{exp.title}</h3>
                      </div>
                      <div className="experience-right">
                        <span className="location">
                          <FaMapMarkerAlt /> {exp.location}
                        </span>
                      </div>
                    </div>
                    <div className="experience-row">
                      <div className="experience-left">
                        <span className="company-name">{exp.company}</span>
                      </div>
                      <div className="experience-right">
                        <span className="period">
                          <FaCalendarAlt /> {exp.period}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="experience-description-text">{exp.description}</p>
                  
                  <div className="responsibilities">
                    <h4>Key Responsibilities:</h4>
                    <ul>
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx}>{responsibility}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="technologies">
                    <h4>Technologies Used:</h4>
                    <div className="tech-tags">
                      {exp.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div className="experience-summary" variants={itemVariants}>
            <div className="summary-card">
              <h4>2.5+ Years of Experience</h4>
              <p>
                Proven track record in MERN stack development with experience across 
                different domains including financial services, ERP systems, and web applications.
              </p>
            </div>
            <div className="summary-card">
              <h4>Agile & Collaboration</h4>
              <p>
                Experienced in Agile methodologies, code reviews, and working with 
                cross-functional teams to deliver high-quality software solutions.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
