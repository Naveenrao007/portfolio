import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaCode, FaServer, FaDatabase, FaUniversity, FaGlobe, FaCogs, FaClipboardList, FaTasks, FaPizzaSlice } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.3, staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const projects = [
    {
      title: 'Cosmos NBFC',
      description:
        'A comprehensive Non-Banking Financial Company platform implementing loan management, customer portal, financial reporting, secure authentication, and role-based access control.',
      gradient: 'linear-gradient(135deg, #1e3a5f 0%, #0c4a6e 100%)',
      icon: <FaUniversity />,
      technologies: ['React.js', 'Redux Toolkit', 'JavaScript', 'Node.js', 'Express.js', 'PostgreSQL', 'JWT Auth', 'Git'],
      features: ['Loan Management System', 'Customer Portal', 'Financial Reporting', 'Secure Authentication', 'Role-based Access Control'],
      status: 'In Development',
      category: 'Full Stack',
    },
    {
      title: 'Company Website',
      description:
        'A complete company website with separate admin and user modules. Admin features include job posting and contact management, while users can browse services.',
      gradient: 'linear-gradient(135deg, #1a3a2a 0%, #064e3b 100%)',
      icon: <FaGlobe />,
      technologies: ['React.js', 'JavaScript', 'CSS3', 'Go (Gin Framework)', 'Git'],
      features: ['Admin Dashboard', 'Job Posting System', 'User Interface', 'Contact Management', 'Responsive Design'],
      status: 'Live',
      category: 'Full Stack',
      liveUrl: 'https://arundataprocessing.co.in/',
    },
    {
      title: 'ERP Modules',
      description:
        'Comprehensive ERP system modules including HR, Finance, and Inventory management with user-friendly UI, interactive flows, and core CRUD operations.',
      gradient: 'linear-gradient(135deg, #2d1b69 0%, #3730a3 100%)',
      icon: <FaCogs />,
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Node.js', 'Git'],
      features: ['HR Management', 'Finance Module', 'Inventory System', 'CRUD Operations', 'Data Validation'],
      status: 'Completed',
      category: 'Full Stack',
    },
    {
      title: 'Form Builder',
      description:
        'A dynamic form builder application that allows users to create custom forms with various input types, validation rules, and responsive layouts.',
      gradient: 'linear-gradient(135deg, #1c1c3a 0%, #1e1b4b 50%, #312e81 100%)',
      icon: <FaClipboardList />,
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'JavaScript'],
      features: ['Dynamic Form Creation', 'Multiple Input Types', 'Validation Rules', 'Responsive Layouts', 'Form Analytics'],
      status: 'Live',
      category: 'Full Stack',
      liveUrl: 'https://form-builder-client-naveen-raw-yadavs-projects.vercel.app/',
    },
    {
      title: 'Task Manager',
      description:
        'A comprehensive task management application with project organization, team collaboration, deadline tracking, and progress monitoring features.',
      gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
      icon: <FaTasks />,
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'JWT'],
      features: ['Project Organization', 'Team Collaboration', 'Deadline Tracking', 'Progress Monitoring', 'User Management'],
      status: 'Live',
      category: 'Full Stack',
      liveUrl: 'https://task-management-fron-end-naveen-raw-yadavs-projects.vercel.app/',
    },
    {
      title: 'Food Delivery',
      description:
        'A complete food delivery platform with restaurant management, order processing, payment integration, and real-time tracking capabilities.',
      gradient: 'linear-gradient(135deg, #3d1515 0%, #7f1d1d 100%)',
      icon: <FaPizzaSlice />,
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Payment Gateway'],
      features: ['Restaurant Management', 'Order Processing', 'Payment Integration', 'Real-time Tracking', 'User Reviews'],
      status: 'Live',
      category: 'Full Stack',
      liveUrl: 'https://food-delivery-client-git-main-naveen-raw-yadavs-projects.vercel.app/login',
    },
  ];

  const filters = ['All', 'Live', 'Completed', 'In Development'];
  const filtered =
    activeFilter === 'All' ? projects : projects.filter((p) => p.status === activeFilter);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Live': return '#10b981';
      case 'Completed': return '#3b82f6';
      case 'In Development': return '#f59e0b';
      default: return '#6b7280';
    }
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Featured Projects
          </motion.h2>

          <motion.p className="section-subtitle" variants={itemVariants}>
            Here are some of my recent projects showcasing my skills in Full Stack web development
          </motion.p>

          {/* Filter Tabs */}
          <motion.div className="project-filters" variants={itemVariants}>
            {filters.map((filter) => (
              <button
                key={filter}
                className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
                {filter !== 'All' && (
                  <span className="filter-count">
                    {projects.filter((p) => p.status === filter).length}
                  </span>
                )}
              </button>
            ))}
          </motion.div>

          <div className="projects-grid">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, index) => (
                <motion.div
                  layout
                  key={project.title}
                  className="project-card"
                  variants={itemVariants}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  whileHover={{ y: -6 }}
                >
                  {/* Project thumbnail */}
                  <div className="project-image" style={{ background: project.gradient }}>
                    <div className="project-icon">{project.icon}</div>
                    <div className="project-overlay">
                      <div className="project-badges-row">
                        <div
                          className="project-status"
                          style={{ backgroundColor: getStatusColor(project.status) }}
                        >
                          {project.status}
                        </div>
                        <div className="project-category">{project.category}</div>
                      </div>
                    </div>
                  </div>

                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>

                    <div className="project-content-row">
                      <div className="project-features">
                        <h4>Key Features:</h4>
                        <ul>
                          {project.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx}>{feature}</li>
                          ))}
                          {project.features.length > 3 && (
                            <li>+{project.features.length - 3} more</li>
                          )}
                        </ul>
                      </div>

                      <div className="project-technologies">
                        <h4>Tech Stack:</h4>
                        <div className="tech-tags">
                          {project.technologies.slice(0, 4).map((tech, idx) => (
                            <span key={idx} className="tech-tag">{tech}</span>
                          ))}
                          {project.technologies.length > 4 && (
                            <span className="tech-tag">+{project.technologies.length - 4}</span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="project-actions">
                      {project.liveUrl && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary"
                          whileHover={{ scale: 1.04 }}
                          whileTap={{ scale: 0.96 }}
                        >
                          <FaExternalLinkAlt />
                          Live Demo
                        </motion.a>
                      )}
                      <motion.a
                        href="https://github.com/Naveenrao007"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline"
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                      >
                        <FaGithub />
                        Code
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Stats */}
          <motion.div className="projects-summary" variants={itemVariants}>
            <div className="summary-stats">
              <div className="stat-item">
                <FaCode />
                <div>
                  <h4>10+</h4>
                  <p>Projects Completed</p>
                </div>
              </div>
              <div className="stat-item">
                <FaServer />
                <div>
                  <h4>5+</h4>
                  <p>Full Stack Apps</p>
                </div>
              </div>
              <div className="stat-item">
                <FaDatabase />
                <div>
                  <h4>3+</h4>
                  <p>Database Systems</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
