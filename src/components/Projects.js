import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaCode, FaServer, FaDatabase } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
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

  const projects = [
    {
      title: "Cosmos NBFC",
      description: "A comprehensive Non-Banking Financial Company platform implementing loan management, customer portal, financial reporting, secure authentication, and role-based access control.",
      image: "/api/placeholder/400/250",
      technologies: ["React.js", "Redux Toolkit", "JavaScript", "Node.js", "Express.js", "MongoDB", "JWT Authentication", "Git"],
      features: [
        "Loan Management System",
        "Customer Portal",
        "Financial Reporting",
        "Secure Authentication",
        "Role-based Access Control"
      ],
      status: "In Development",
      category: "Full Stack"
    },
    {
      title: "Company Website",
      description: "A complete company website with separate admin and user modules. Admin features include job posting and contact management, while users can browse services and contact information.",
      image: "/api/placeholder/400/250",
      technologies: ["React.js", "JavaScript", "CSS3", "Go (Gin Framework)", "Git"],
      features: [
        "Admin Dashboard",
        "Job Posting System",
        "User Interface",
        "Contact Management",
        "Responsive Design"
      ],
      status: "Live",
      category: "Full Stack",
      liveUrl: "https://arundataprocessing.co.in/"
    },
    {
      title: "ERP Modules",
      description: "Comprehensive ERP system modules including HR, Finance, and Inventory management with user-friendly UI, interactive flows, and core CRUD operations with validations.",
      image: "/api/placeholder/400/250",
      technologies: ["HTML5", "CSS3", "JavaScript", "React.js", "Node.js", "Git"],
      features: [
        "HR Management",
        "Finance Module",
        "Inventory System",
        "CRUD Operations",
        "Data Validation"
      ],
      status: "Completed",
      category: "Full Stack"
    },
    {
      title: "Form Builder",
      description: "A dynamic form builder application that allows users to create custom forms with various input types, validation rules, and responsive layouts.",
      image: "/api/placeholder/400/250",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "JavaScript"],
      features: [
        "Dynamic Form Creation",
        "Multiple Input Types",
        "Validation Rules",
        "Responsive Layouts",
        "Form Analytics"
      ],
      status: "Live",
      category: "Full Stack",
      liveUrl: "https://form-builder-client-naveen-raw-yadavs-projects.vercel.app/"
    },
    {
      title: "Task Manager",
      description: "A comprehensive task management application with project organization, team collaboration, deadline tracking, and progress monitoring features.",
      image: "/api/placeholder/400/250",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "JWT"],
      features: [
        "Project Organization",
        "Team Collaboration",
        "Deadline Tracking",
        "Progress Monitoring",
        "User Management"
      ],
      status: "Live",
      category: "Full Stack",
      liveUrl: "https://task-management-fron-end-naveen-raw-yadavs-projects.vercel.app/"
    },
    {
      title: "Food Delivery",
      description: "A complete food delivery platform with restaurant management, order processing, payment integration, and real-time tracking capabilities.",
      image: "/api/placeholder/400/250",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Payment Gateway"],
      features: [
        "Restaurant Management",
        "Order Processing",
        "Payment Integration",
        "Real-time Tracking",
        "User Reviews"
      ],
      status: "Live",
      category: "Full Stack",
      liveUrl: "https://food-delivery-client-git-main-naveen-raw-yadavs-projects.vercel.app/login"
    }
  ];

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
          
          <motion.p className="projects-description" variants={itemVariants}>
            Here are some of my recent projects showcasing my skills in MERN stack development
          </motion.p>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="project-card"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="project-image">
                  <div className="project-placeholder">
                  </div>
                  <div className="project-overlay">
                    <div className="project-badges-row">
                      <div className="project-status" style={{ backgroundColor: getStatusColor(project.status) }}>
                        {project.status}
                      </div>
                      <div className="project-category">{project.category}</div>
                    </div>
                    <div className="project-title-overlay">{project.title}</div>
                  </div>
                </div>

                <div className="project-content">
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-content-row">
                    <div className="project-features">
                      <h4>Key Features:</h4>
                      <ul>
                        {project.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx}>{feature}</li>
                        ))}
                        {project.features.length > 3 && (
                          <li>+{project.features.length - 3} more features</li>
                        )}
                      </ul>
                    </div>

                    <div className="project-technologies">
                      <h4>Technologies:</h4>
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
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                      >
                        <FaExternalLinkAlt />
                        Live Demo
                      </a>
                    )}
                    <a
                      href="#"
                      className="btn btn-outline"
                    >
                      <FaGithub />
                      View Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

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
