// src/pages/CyberSecurityPage.js
import React from "react";
import { Link } from "react-router-dom";

function CyberSecurityPage() {
  return (
    <div className="cybersecurity-page">
      {/* Breadcrumb */}
      <section className="course-breadcrumb-bar">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">HOME</Link>
            <span className="breadcrumb-separator">&gt;</span>
            <Link to="/courses">COURSES</Link>
            <span className="breadcrumb-separator">&gt;</span>
            <span className="breadcrumb-current">CYBERSECURITY</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="course-page-hero">
        <div className="container">
          <div className="course-hero-grid">
            <div className="course-hero-content">
              <span className="section-badge">IN-DEMAND SKILLS</span>
              <h1 className="course-hero-title">Cybersecurity Fundamentals</h1>
              <p className="course-hero-desc">
                Learn to protect systems, networks, and data from cyber threats.
                Master ethical hacking, penetration testing, and security
                auditing.
              </p>

              <div className="course-hero-meta">
                <div>
                  <i className="fas fa-clock"></i> 3 Months
                </div>
                <div>
                  <i className="fas fa-signal"></i> Beginner to Intermediate
                </div>
                <div>
                  <i className="fas fa-laptop-house"></i> Online & On-site
                </div>
                <div>
                  <i className="fas fa-certificate"></i> Certificate Included
                </div>
              </div>

              <div className="course-hero-buttons">
                <Link
                  to="/enroll?course=Cybersecurity"
                  className="btn btn-primary"
                >
                  Enroll Now <i className="fas fa-arrow-right"></i>
                </Link>
                <a
                  href="https://api.whatsapp.com/send/?phone=9779766715768&text=Hi! I'm interested in the Cybersecurity course."
                  className="btn btn-outline-dark"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-whatsapp"></i> Ask on WhatsApp
                </a>
              </div>
            </div>

            <div className="course-hero-image">
              <img
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=700&h=500&fit=crop"
                alt="Cybersecurity course"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="course-section">
        <div className="container">
          <div className="course-section-header">
            <span className="section-badge">REQUIREMENTS</span>
            <h2 className="section-title">What You Need to Get Started</h2>
            <p className="section-desc">
              This program is designed for beginners, no prior experience
              required.
            </p>
          </div>
          <div className="requirements-grid">
            <div className="requirements-card">
              <h3>
                <i className="fas fa-seedling"></i> Beginner Friendly
              </h3>
              <ul>
                <li>
                  <i className="fas fa-check"></i> No prior cybersecurity
                  experience
                </li>
                <li>
                  <i className="fas fa-check"></i> Basic computer & internet
                  knowledge
                </li>
                <li>
                  <i className="fas fa-check"></i> Curiosity about system
                  security
                </li>
                <li>
                  <i className="fas fa-check"></i> Command-line basics (taught
                  in class)
                </li>
              </ul>
            </div>
            <div className="requirements-card">
              <h3>
                <i className="fas fa-tools"></i> Technical Requirements
              </h3>
              <ul>
                <li>
                  <i className="fas fa-check"></i> Laptop with 8GB+ RAM
                </li>
                <li>
                  <i className="fas fa-check"></i> Stable internet connection
                </li>
                <li>
                  <i className="fas fa-check"></i> VirtualBox for Kali Linux
                </li>
                <li>
                  <i className="fas fa-check"></i> Tools installed during class
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="course-section">
        <div className="container">
          <div className="course-section-header">
            <span className="section-badge">OUTCOMES</span>
            <h2 className="section-title">What You'll Be Able to Do</h2>
          </div>
          <div className="outcomes-grid">
            {[
              {
                icon: "fas fa-shield-alt",
                title: "Secure Networks",
                desc: "Configure firewalls, detect intrusions, and harden networks.",
              },
              {
                icon: "fas fa-user-secret",
                title: "Ethical Hacking",
                desc: "Perform authorized penetration tests.",
              },
              {
                icon: "fas fa-bug",
                title: "Find Vulnerabilities",
                desc: "Identify OWASP Top 10 security flaws.",
              },
              {
                icon: "fas fa-file-alt",
                title: "Security Reports",
                desc: "Write professional audit reports.",
              },
              {
                icon: "fas fa-search",
                title: "Incident Response",
                desc: "Detect, analyze, and respond to incidents.",
              },
              {
                icon: "fas fa-certificate",
                title: "Industry Certificate",
                desc: "Receive a recognized certificate.",
              },
            ].map((outcome, idx) => (
              <div className="outcome-card" key={idx}>
                <div className="outcome-icon">
                  <i className={outcome.icon}></i>
                </div>
                <h3>{outcome.title}</h3>
                <p>{outcome.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="course-cta">
        <div className="course-cta-content">
          <h2>Defend the Digital World</h2>
          <p>
            Start your cybersecurity career with hands-on training. No prior
            experience needed.
          </p>
          <div className="cta-buttons">
            <Link to="/enroll?course=Cybersecurity" className="btn btn-primary">
              Enroll Now <i className="fas fa-arrow-right"></i>
            </Link>
            <a
              href="https://api.whatsapp.com/send/?phone=9779766715768&text=Hi! I'm interested in Cybersecurity."
              className="btn btn-outline-light"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-whatsapp"></i> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CyberSecurityPage;
