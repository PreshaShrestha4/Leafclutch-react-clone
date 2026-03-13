import React from "react";
import { Link } from "react-router-dom";

function AiMachineLearningPage() {
  const courseName = "AI & Machine Learning";

  const encodedCourse = encodeURIComponent(courseName); // for URL

  return (
    <div>
      {/* Breadcrumb */}
      <section className="course-breadcrumb-bar">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <a href="/">HOME</a>
            <span className="breadcrumb-separator">&gt;</span>
            <a href="/courses">COURSES</a>
            <span className="breadcrumb-separator">&gt;</span>
            <span className="breadcrumb-current">
              {courseName.toUpperCase()}
            </span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="course-page-hero">
        <div className="container">
          <div className="course-hero-grid">
            <div className="course-hero-content reveal-left reveal visible">
              <span className="section-badge reveal visible">
                MOST POPULAR PROGRAM
              </span>
              <h1 className="course-hero-title">{courseName}</h1>
              <p className="course-hero-desc">
                Master the fundamentals of AI and Machine Learning from scratch.
                Build intelligent systems, train neural networks, and deploy
                real-world models — no prior experience required.
              </p>

              <div className="course-hero-meta">
                <div className="course-hero-meta-item">
                  <i className="fas fa-clock" /> 3 Months
                </div>
                <div className="course-hero-meta-item">
                  <i className="fas fa-signal" /> Beginner to Advanced
                </div>
                <div className="course-hero-meta-item">
                  <i className="fas fa-laptop-house" /> Online & On-site
                </div>
                <div className="course-hero-meta-item">
                  <i className="fas fa-certificate" /> Certificate Included
                </div>
              </div>

              <div className="course-hero-buttons">
                <Link
                  to={`/enroll?course=${encodedCourse}`}
                  className="btn btn-primary"
                >
                  Enroll Now <i className="fas fa-arrow-right" />
                </Link>
                <a
                  href={`https://api.whatsapp.com/send/?phone=9779766715768&text=Hi! I'm interested in the ${encodedCourse} course.&type=phone_number&app_absent=0`}
                  className="btn btn-outline-dark"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-whatsapp" /> Ask on WhatsApp
                </a>
              </div>
            </div>

            <div className="course-hero-image reveal-right reveal visible">
              <img
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=700&h=500&fit=crop"
                alt={`${courseName} course at Leafclutch Technologies Nepal`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* After Completion / Walkaway Section */}
      <section className="enroll-benefits-section enroll-benefits-section--alt">
        <div className="container">
          <div className="enroll-benefits-header">
            <span className="section-badge reveal visible">
              AFTER COMPLETION
            </span>
            <h2 className="section-title reveal visible">
              What You'll Walk Away With
            </h2>
            <p className="section-desc reveal visible">
              Complete the program and leave with tangible skills, credentials,
              and opportunities.
            </p>
          </div>

          <div className="enroll-benefits-grid">
            {[
              {
                icon: "fas fa-award",
                title: "Completion Certificate",
                desc: "Receive an official completion certificate from Leafclutch Technologies for your portfolio.",
              },
              {
                icon: "fas fa-certificate",
                title: "Training & Internship Certificates",
                desc: "Get separate training certificate and internship certificate to showcase your experience.",
              },
              {
                icon: "fas fa-cogs",
                title: "Company & Tools Knowledge",
                desc: "Gain real understanding of how companies run and hands-on experience with industry tools.",
              },
              {
                icon: "fas fa-laptop-code",
                title: "Professional Experience",
                desc: "Add real professional work experience to your resume — not just theory, but actual project work.",
              },
              {
                icon: "fas fa-hands-helping",
                title: "Ongoing Team Support",
                desc: "Our team continues to support you even after the program — career advice, referrals, and more.",
              },
              {
                icon: "fas fa-user-check",
                title: "Direct Job Offer",
                desc: "If a vacancy is available, you can get a direct job offer — no interview needed.",
              },
            ].map((item, idx) => (
              <div className="enroll-benefit-card reveal visible" key={idx}>
                <div className="enroll-benefit-icon">
                  <i className={item.icon} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course CTA Section */}
      <section className="course-cta">
        <div className="course-cta-content reveal visible">
          <h2>Ready to Start Your AI Journey?</h2>
          <p>
            Join our next batch and transform your career with hands-on AI & ML
            training. No prerequisites — just your curiosity.
          </p>
          <div className="cta-buttons">
            <Link
              to={`/enroll?course=${encodedCourse}`}
              className="btn btn-primary"
            >
              Enroll Now <i className="fas fa-arrow-right" />
            </Link>
            <a
              href={`https://api.whatsapp.com/send/?phone=9779766715768&text=Hi! I'm interested in the ${encodedCourse} course.&type=phone_number&app_absent=0`}
              className="btn btn-outline-light"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-whatsapp" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AiMachineLearningPage;
