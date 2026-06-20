import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      title: "Senior Developer",
      company: "Universal Soft Lab",
      location: "Indore, MP",
      period: "Apr 2025 - Present",
      type: "Full-time",
      description: "Developed Full Stack features for Cosmos NBFC application with a focus on financial services modules.",
      responsibilities: [
        "Implemented responsive UI components and business logic for core financial modules.",
        "Led code reviews, mentored junior developers, and enforced coding standards.",
        "Collaborate with cross-functional teams to deliver sprints on schedule using Agile."
      ],
      technologies: ["React.js", "Redux Toolkit", "Node.js", "Express.js", "PostgreSQL", "JavaScript", "Agile"]
    },
    {
      title: "Jr. Software Developer",
      company: "Arun Data Processing",
      location: "Ahmedabad, Gujarat",
      period: "Oct 2023 - Jul 2024",
      type: "Full-time",
      description: "Developed responsive user interfaces and secure RESTful APIs.",
      responsibilities: [
        "Created user interfaces using React.js and JavaScript, optimizing performance.",
        "Built RESTful APIs using Node.js, Express.js, and MongoDB with JWT authentication.",
        "Created reusable React components and handled form validations and CRUD actions."
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JavaScript", "JWT"]
    },
    {
      title: "Jr. Software Developer",
      company: "Epitaxial-IT Pvt Ltd",
      location: "Ahmedabad, Gujarat",
      period: "May 2022 - Sep 2023",
      type: "Full-time",
      description: "Built web frontends and managed version control workflows.",
      responsibilities: [
        "Developed and maintained web interfaces using JavaScript, HTML5, and CSS3.",
        "Integrated backend APIs and ensured consistent UI across pages.",
        "Managed Git workflows including branching, pull requests, and documentation."
      ],
      technologies: ["JavaScript", "HTML5", "CSS3", "Git", "API Integration"]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        <p className="experience-subtitle">
          My journey in software development with a focus on MERN stack technologies
        </p>

        <div className="experience-tabs-container">
          {/* Tabs Menu */}
          <div className="experience-tabs">
            {experiences.map((exp, index) => (
              <button
                key={index}
                className={`tab-btn ${activeTab === index ? 'active' : ''}`}
                onClick={() => setActiveTab(index)}
              >
                <span>{exp.company}</span>
                {activeTab === index && (
                  <motion.div
                    className="active-indicator-desktop"
                    layoutId="activeIndicator"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Active Panel Detail */}
          <div className="experience-tab-content">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="tab-panel"
              >
                <div className="panel-header">
                  <h3>
                    <span className="job-title">{experiences[activeTab].title}</span>{' '}
                    <span className="at-symbol">@</span>{' '}
                    <span className="company-highlight">{experiences[activeTab].company}</span>
                  </h3>
                  <div className="panel-meta">
                    <span className="period">
                      <FaCalendarAlt /> {experiences[activeTab].period}
                    </span>
                    <span className="location">
                      <FaMapMarkerAlt /> {experiences[activeTab].location}
                    </span>
                  </div>
                </div>

                <p className="panel-description">{experiences[activeTab].description}</p>

                <div className="panel-responsibilities">
                  <h4>Key Responsibilities:</h4>
                  <ul>
                    {experiences[activeTab].responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </div>

                <div className="panel-technologies">
                  <h4>Technologies Used:</h4>
                  <div className="tech-tags">
                    {experiences[activeTab].technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Experience Summary cards */}
        <div className="experience-summary">
          <div className="summary-card">
            <h4>3+ Years of Experience</h4>
            <p>
              Proven track record in Full Stack development with experience across 
              different domains including financial services, ERP systems, databases, and web applications.
            </p>
          </div>
          <div className="summary-card">
            <h4>Agile & Collaboration</h4>
            <p>
              Experienced in Agile methodologies, code reviews, and working with 
              cross-functional teams to deliver high-quality software solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
