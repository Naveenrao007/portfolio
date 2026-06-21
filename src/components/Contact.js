import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState(null); // null | 'success' | 'error'
  const [focusedField, setFocusedField] = useState(null);
  const [cooldownRemaining, setCooldownRemaining] = useState(0);

  const handleFocus = (field) => setFocusedField(field);
  const handleBlur = () => setFocusedField(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.3, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (formStatus) setFormStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null);

    // Rate Limiting (60 seconds cooldown)
    const lastSubmit = localStorage.getItem('lastContactSubmission');
    const now = Date.now();
    const cooldownPeriod = 60 * 1000;
    if (lastSubmit && now - parseInt(lastSubmit) < cooldownPeriod) {
      const remaining = Math.ceil((cooldownPeriod - (now - parseInt(lastSubmit))) / 1000);
      setCooldownRemaining(remaining);
      setFormStatus('rate-limit');
      setIsSubmitting(false);
      return;
    }

    const { name, email, subject, message } = formData;
    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setIsSubmitting(false);
      setFormStatus('validation');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setIsSubmitting(false);
      setFormStatus('email');
      return;
    }

    try {
      // Build mailto link and attempt to open
      const mailtoLink = `mailto:yadavraw123@gmail.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
      )}`;

      window.location.href = mailtoLink;
      localStorage.setItem('lastContactSubmission', Date.now().toString());

      setTimeout(() => {
        setIsSubmitting(false);
        setFormStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 1000);
    } catch {
      setIsSubmitting(false);
      setFormStatus('error');
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'yadavraw123@gmail.com',
      link: 'mailto:yadavraw123@gmail.com',
      color: '#4f46e5',
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      value: '+91 8109949129',
      link: 'tel:+918109949129',
      color: '#10b981',
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      value: 'Indore, MP, India',
      link: '#',
      color: '#f59e0b',
    },
    {
      icon: <FaLinkedin />,
      title: 'LinkedIn',
      value: 'Connect with me',
      link: 'https://linkedin.com',
      color: '#0a66c2',
    },
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Get In Touch
          </motion.h2>

          <motion.p className="section-subtitle" variants={itemVariants}>
            I'm always interested in new opportunities and exciting projects. Let's talk!
          </motion.p>

          <div className="contact-content">
            {/* Info panel */}
            <motion.div className="contact-info" variants={itemVariants}>
              <h3>Let's Connect</h3>
              <p>
                Whether you have a project in mind, want to collaborate, or just want to say hello,
                I'd love to hear from you. Feel free to reach out through any of the channels below.
              </p>

              <div className="contact-methods">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    className="contact-method"
                    whileHover={{ x: 6 }}
                    variants={itemVariants}
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    <div className="contact-icon" style={{ '--icon-color': info.color }}>
                      {info.icon}
                    </div>
                    <div className="contact-details">
                      <h4>{info.title}</h4>
                      <p>{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="contact-social-row">
                <motion.a
                  href="https://github.com/Naveenrao007"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-chip"
                  whileHover={{ scale: 1.08 }}
                >
                  <FaGithub /> GitHub
                </motion.a>
                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-chip"
                  whileHover={{ scale: 1.08 }}
                >
                  <FaLinkedin /> LinkedIn
                </motion.a>
              </div>
            </motion.div>

            {/* Form panel */}
            <motion.div className="contact-form-container" variants={itemVariants}>
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <h3>Send a Message</h3>

                <div className="form-row">
                  <div className={`form-group ${focusedField === 'name' || formData.name ? 'focused' : ''}`}>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onFocus={() => handleFocus('name')}
                      onBlur={handleBlur}
                      required
                    />
                    <label htmlFor="name">Your Name</label>
                  </div>
                  <div className={`form-group ${focusedField === 'email' || formData.email ? 'focused' : ''}`}>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => handleFocus('email')}
                      onBlur={handleBlur}
                      required
                    />
                    <label htmlFor="email">Your Email</label>
                  </div>
                </div>

                <div className={`form-group ${focusedField === 'subject' || formData.subject ? 'focused' : ''}`}>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('subject')}
                    onBlur={handleBlur}
                    required
                  />
                  <label htmlFor="subject">Subject</label>
                </div>

                <div className={`form-group ${focusedField === 'message' || formData.message ? 'focused' : ''}`}>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('message')}
                    onBlur={handleBlur}
                    required
                  ></textarea>
                  <label htmlFor="message">Message</label>
                </div>

                {/* Inline status message */}
                <AnimatePresence>
                  {formStatus === 'success' && (
                    <motion.div
                      className="form-status success"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                    >
                      <FaCheckCircle />
                      <div className="form-status-text">
                        Your email client should open now! If not, email me directly at{' '}
                        <a href="mailto:yadavraw123@gmail.com">yadavraw123@gmail.com</a>
                      </div>
                    </motion.div>
                  )}
                  {formStatus === 'validation' && (
                    <motion.div
                      className="form-status error"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                    >
                      <FaExclamationCircle />
                      <div className="form-status-text">
                        All fields are required. Please fill in all fields before sending.
                      </div>
                    </motion.div>
                  )}
                  {formStatus === 'email' && (
                    <motion.div
                      className="form-status error"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                    >
                      <FaExclamationCircle />
                      <div className="form-status-text">
                        Please enter a valid email address.
                      </div>
                    </motion.div>
                  )}
                  {formStatus === 'error' && (
                    <motion.div
                      className="form-status error"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                    >
                      <FaExclamationCircle />
                      <div className="form-status-text">
                        Something went wrong. Please email me directly at{' '}
                        <a href="mailto:yadavraw123@gmail.com">yadavraw123@gmail.com</a>
                      </div>
                    </motion.div>
                  )}
                  {formStatus === 'rate-limit' && (
                    <motion.div
                      className="form-status error"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                    >
                      <FaExclamationCircle />
                      <div className="form-status-text">
                        Too many messages. Please wait {cooldownRemaining}s before sending another request.
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.button
                  type="submit"
                  className="btn btn-primary submit-btn"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="spinner"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
