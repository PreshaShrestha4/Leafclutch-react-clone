import React from "react";
import {
  FaCertificate,
  FaFileAlt,
  FaCogs,
  FaBriefcase,
  FaHandsHelping,
  FaHandshake,
} from "react-icons/fa";

function CompletionPerks() {
  const perks = [
    {
      number: "01",
      icon: <FaCertificate />,
      title: "Completion Certificate",
      desc: "Official program completion certificate recognizing your training and skills.",
    },
    {
      number: "02",
      icon: <FaFileAlt />,
      title: "Training & Internship Certificates",
      desc: "Separate training certificate and internship certificate for your professional portfolio.",
    },
    {
      number: "03",
      icon: <FaCogs />,
      title: "Company Tools & Workflow Knowledge",
      desc: "Know how real companies run — from Git, Jira, and Slack to agile methodologies and deployment.",
    },
    {
      number: "04",
      icon: <FaBriefcase />,
      title: "Professional Experience",
      desc: "Walk away with verifiable work experience and projects to showcase to any employer.",
    },
    {
      number: "05",
      icon: <FaHandsHelping />,
      title: "Ongoing Team Support",
      desc: "Even after the program ends, our team stays connected to support your career growth.",
    },
    {
      number: "06",
      icon: <FaHandshake />,
      title: "Direct Job Offer",
      desc: "If a vacancy is open, you can receive a direct job offer — no interview needed.",
    },
  ];

  return (
    <section className="completion-perks-section">
      <div className="container">
        <div className="about-features-header">
          <span className="section-badge reveal visible">AFTER COMPLETION</span>
          <h2 className="section-title reveal visible">
            What You Walk Away With
          </h2>
          <p className="section-desc reveal visible">
            Complete the program and leave with certificates, experience, and
            career-ready skills.
          </p>
        </div>

        <div className="completion-perks-grid">
          {perks.map((perk, index) => (
            <div key={index} className="completion-card reveal visible">
              <div className="completion-card-number">{perk.number}</div>
              <div className="completion-card-icon">{perk.icon}</div>
              <h3>{perk.title}</h3>
              <p>{perk.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CompletionPerks;
