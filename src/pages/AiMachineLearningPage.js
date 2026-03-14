// src/pages/AiMachineLearningPage.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaClock,
  FaSignal,
  FaLaptopHouse,
  FaCertificate,
  FaArrowRight,
  FaSeedling,
  FaTools,
  FaChevronRight,
  FaPlayCircle,
  FaGraduationCap,
  FaExternalLinkAlt,
} from "react-icons/fa";

function AiMachineLearningPage() {
  const courseName = "AI & Machine Learning";
  const encodedCourse = encodeURIComponent(courseName);

  // Accordion state
  const [activeIndex, setActiveIndex] = useState(null);

  const curriculumSections = [
    {
      title: "Python Programming",
      lectures: [
        "Variables, control flow & data structures",
        "Functions, modules & file handling",
        "Exception handling & OOP basics",
      ],
    },
    {
      title: "Mathematics & Statistics",
      lectures: [
        "Linear algebra & calculus foundations",
        "Probability theory & distributions",
        "Hypothesis testing & inferential statistics",
      ],
    },
    {
      title: "Data Analysis & Visualization",
      lectures: [
        "Pandas & NumPy for data manipulation",
        "Matplotlib & Seaborn visualization",
        "Exploratory Data Analysis (EDA)",
      ],
    },
    {
      title: "Machine Learning Fundamentals",
      lectures: [
        "Supervised & unsupervised learning",
        "Regression, classification & clustering",
        "Scikit-learn & model optimization",
      ],
    },
    {
      title: "Deep Learning & Neural Networks",
      lectures: [
        "Neural networks, CNNs & optimizers",
        "TensorFlow & PyTorch frameworks",
        "Loss functions & backpropagation",
      ],
    },
    {
      title: "Natural Language Processing",
      lectures: [
        "Text preprocessing & tokenization",
        "Sentiment analysis & language models",
        "Transformers & NLP projects",
      ],
    },
    {
      title: "MLOps & Model Deployment",
      lectures: [
        "Hyperparameter tuning & model selection",
        "MLOps best practices & pipelines",
        "Model deployment with Flask & Streamlit",
      ],
    },
    {
      title: "End-to-End Projects",
      lectures: [
        "Real-world ML & NLP projects",
        "Industry applications (healthcare, finance)",
        "Portfolio building & career preparation",
      ],
    },
  ];

  const toggleSection = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const expandAll = () => {
    setActiveIndex(activeIndex === "all" ? null : "all");
  };

  return (
    <div>
      {/* Breadcrumb */}
      <section className="course-breadcrumb-bar">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">HOME</Link>
            <span className="breadcrumb-separator">&gt;</span>
            <Link to="/courses">COURSES</Link>
            <span className="breadcrumb-separator">&gt;</span>
            <span className="breadcrumb-current">AI & MACHINE LEARNING</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="course-page-hero">
        <div className="container">
          <div className="course-hero-grid">
            <div className="course-hero-content">
              <span className="section-badge">MOST POPULAR PROGRAM</span>
              <h1 className="course-hero-title">
                Artificial Intelligence & Machine Learning
              </h1>
              <p className="course-hero-desc">
                Master the fundamentals of AI and Machine Learning from scratch.
                Build intelligent systems, train neural networks, and deploy
                real-world models — no prior experience required.
              </p>
              <div className="course-hero-meta">
                <div className="course-hero-meta-item">
                  <FaClock /> 3 Months
                </div>
                <div className="course-hero-meta-item">
                  <FaSignal /> Beginner to Advanced
                </div>
                <div className="course-hero-meta-item">
                  <FaLaptopHouse /> Online & On-site
                </div>
                <div className="course-hero-meta-item">
                  <FaCertificate /> Certificate Included
                </div>
              </div>
              <div className="course-hero-buttons">
                <Link
                  to={`/enroll?course=${encodedCourse}`}
                  className="btn btn-primary"
                >
                  Enroll Now <FaArrowRight />
                </Link>
                <a
                  href={`https://api.whatsapp.com/send/?phone=9779766715768&text=Hi! I'm interested in the AI & ML course.&type=phone_number&app_absent=0`}
                  className="btn btn-outline-dark"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-whatsapp" /> Ask on WhatsApp
                </a>
              </div>
            </div>
            <div className="course-hero-image">
              <img
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=700&h=500&fit=crop"
                alt="AI and Machine Learning course at Leafclutch Technologies Nepal"
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
              This course is designed to be beginner-friendly. Here's what you
              need before you begin.
            </p>
          </div>
          <div className="requirements-grid">
            <div className="requirements-card beginner-card">
              <h3>
                <FaSeedling /> Beginner Friendly
              </h3>
              <ul>
                <li>
                  <i className="fas fa-check" /> No prior programming experience
                  needed
                </li>
                <li>
                  <i className="fas fa-check" /> Basic computer skills
                </li>
                <li>
                  <i className="fas fa-check" /> Willingness to learn
                </li>
                <li>
                  <i className="fas fa-check" /> High school math helpful but
                  not required
                </li>
              </ul>
            </div>
            <div className="requirements-card">
              <h3>
                <FaTools /> Technical Requirements
              </h3>
              <ul>
                <li>
                  <i className="fas fa-check" /> Laptop/Desktop with 4GB+ RAM
                </li>
                <li>
                  <i className="fas fa-check" /> Stable internet connection
                </li>
                <li>
                  <i className="fas fa-check" /> Python installed in first class
                </li>
                <li>
                  <i className="fas fa-check" /> Google Colab for running ML
                  models
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section with Accordion */}
      <section className="course-section">
        <div className="container">
          <div className="course-section-header">
            <span className="section-badge">CURRICULUM</span>
            <h2 className="section-title">Course Content</h2>
            <p className="section-desc">
              Master Data Science, Machine Learning, Deep Learning & NLP with
              end-to-end projects using industry-standard tools.
            </p>
          </div>

          <div className="curriculum-accordion-wrapper">
            <div className="curriculum-stats">
              <span className="curriculum-stats-text">
                <strong>{curriculumSections.length} sections</strong> • 24
                lectures • 3 months total length
              </span>
              <button className="curriculum-expand-btn" onClick={expandAll}>
                {activeIndex === "all"
                  ? "Collapse all sections"
                  : "Expand all sections"}
              </button>
            </div>

            {curriculumSections.map((section, idx) => (
              <div
                key={idx}
                className={`curriculum-section-item ${activeIndex === idx || activeIndex === "all" ? "active" : ""}`}
              >
                <button
                  className="curriculum-section-header-btn"
                  onClick={() => toggleSection(idx)}
                >
                  <FaChevronRight
                    className="curriculum-section-chevron"
                    style={{
                      transform:
                        activeIndex === idx || activeIndex === "all"
                          ? "rotate(90deg)"
                          : "rotate(0deg)",
                    }}
                  />
                  <span className="curriculum-section-title">
                    {section.title}
                  </span>
                  <span className="curriculum-section-meta">
                    {section.lectures.length} lectures
                  </span>
                </button>
                {(activeIndex === idx || activeIndex === "all") && (
                  <div className="curriculum-section-body">
                    <ul className="curriculum-lecture-list">
                      {section.lectures.map((lecture, lidx) => (
                        <li key={lidx} className="curriculum-lecture-item">
                          <FaPlayCircle className="curriculum-lecture-icon" />
                          <span className="curriculum-lecture-name">
                            {lecture}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}

            {/* Recommended Course */}
            <div className="recommended-course-card">
              <div className="recommended-course-icon">
                <FaGraduationCap />
              </div>
              <div className="recommended-course-content">
                <div className="recommended-course-label">
                  Recommended Udemy Course
                </div>
                <div className="recommended-course-title">
                  Complete Data Science, Machine Learning, DL, NLP Bootcamp by
                  Krish Naik
                </div>
                <p className="recommended-course-note">
                  We recommend this course for our training. If you prefer a
                  different Udemy course, let us know.
                </p>
              </div>
              <a
                href="https://www.udemy.com/course/complete-machine-learning-nlp-bootcamp-mlops-deployment/"
                className="recommended-course-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaExternalLinkAlt /> View on Udemy
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="course-section">
        <div className="container">
          <div className="course-section-header">
            <span className="section-badge reveal visible">OUTCOMES</span>
            <h2 className="section-title reveal visible">
              What You'll Be Able to Do
            </h2>
            <p className="section-desc reveal visible">
              By the end of this program, you'll have the skills and portfolio
              to pursue a career in AI.
            </p>
          </div>

          <div className="outcomes-grid">
            {/* Outcome Card 1 */}
            <div className="outcome-card reveal visible">
              <div className="outcome-icon">
                <i className="fas fa-code" />
              </div>
              <h3>Write Python Confidently</h3>
              <p>
                Build programs, manipulate data, and automate tasks using Python
                and its libraries.
              </p>
            </div>

            {/* Outcome Card 2 */}
            <div className="outcome-card reveal visible">
              <div className="outcome-icon">
                <i className="fas fa-brain" />
              </div>
              <h3>Build ML Models</h3>
              <p>
                Train, evaluate, and optimize machine learning models for
                real-world problems.
              </p>
            </div>

            {/* Outcome Card 3 */}
            <div className="outcome-card reveal visible">
              <div className="outcome-icon">
                <i className="fas fa-network-wired" />
              </div>
              <h3>Deep Learning Expertise</h3>
              <p>
                Design neural networks for image recognition, NLP, and
                predictive analytics.
              </p>
            </div>

            {/* Outcome Card 4 */}
            <div className="outcome-card reveal visible">
              <div className="outcome-icon">
                <i className="fas fa-rocket" />
              </div>
              <h3>Deploy AI Applications</h3>
              <p>
                Take models from notebooks to production-ready web applications.
              </p>
            </div>

            {/* Outcome Card 5 */}
            <div className="outcome-card reveal visible">
              <div className="outcome-icon">
                <i className="fas fa-briefcase" />
              </div>
              <h3>Portfolio Ready</h3>
              <p>
                Graduate with 3+ projects showcasing your skills to potential
                employers.
              </p>
            </div>

            {/* Outcome Card 6 */}
            <div className="outcome-card reveal visible">
              <div className="outcome-icon">
                <i className="fas fa-certificate" />
              </div>
              <h3>Industry Certificate</h3>
              <p>
                Receive a recognized certificate from Leafclutch Technologies
                upon completion.
              </p>
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
            <a
              href={`/enroll?course=${encodedCourse}`}
              className="btn btn-white"
            >
              Enroll Now
            </a>
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
