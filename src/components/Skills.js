import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, 
  FaNodeJs, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaGitAlt, 
  FaGithub,
  FaDatabase,
  FaServer,
  FaCode,
  FaMobile,
  FaCloud,
  FaRobot
} from 'react-icons/fa';
import { SiMongodb, SiExpress, SiRedux, SiTailwindcss, SiPostgresql, SiGo } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React.js", icon: <FaReact />, level: 90 },
        { name: "Redux Toolkit", icon: <SiRedux />, level: 85 },
        { name: "JavaScript", icon: <FaJs />, level: 90 },
        { name: "HTML5", icon: <FaHtml5 />, level: 95 },
        { name: "CSS3", icon: <FaCss3Alt />, level: 90 },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 85 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs />, level: 85 },
        { name: "Express.js", icon: <SiExpress />, level: 85 },
        { name: "Go (Gin)", icon: <SiGo />, level: 70 },
        { name: "REST APIs", icon: <FaServer />, level: 90 },
        { name: "JWT Auth", icon: <FaCode />, level: 80 }
      ]
    },
    {
      title: "Database",
      skills: [
        { name: "MongoDB", icon: <SiMongodb />, level: 85 },
        { name: "PostgreSQL", icon: <SiPostgresql />, level: 75 },
        { name: "Mongoose ODM", icon: <FaDatabase />, level: 80 }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", icon: <FaGitAlt />, level: 90 },
        { name: "GitHub", icon: <FaGithub />, level: 90 },
        { name: "Cursor AI", icon: <FaRobot />, level: 85 },
        { name: "Responsive Design", icon: <FaMobile />, level: 95 },
        { name: "Performance Optimization", icon: <FaCloud />, level: 80 },
        { name: "Code Review", icon: <FaCode />, level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Skills & Technologies
          </motion.h2>
          
          <motion.p className="skills-description" variants={itemVariants}>
            Here are the technologies and tools I work with to create amazing web applications
          </motion.p>

          <div className="skills-grid">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                className="skill-category"
                variants={itemVariants}
              >
                <h3 className="category-title">{category.title}</h3>
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="skill-item"
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="skill-header">
                        <div className="skill-icon">
                          {skill.icon}
                        </div>
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <motion.div
                          className="skill-progress"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        ></motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div className="skills-summary" variants={itemVariants}>
            <div className="summary-card">
              <h4>MERN Stack Specialist</h4>
              <p>
                Proficient in the complete MERN stack with hands-on experience in building 
                full-stack applications from scratch. Strong understanding of modern 
                development practices and agile methodologies.
              </p>
            </div>
            <div className="summary-card">
              <h4>Performance Focused</h4>
              <p>
                Experienced in optimizing applications for better performance, implementing 
                responsive designs, and ensuring accessibility standards. Committed to 
                delivering high-quality, scalable solutions.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
