// src/pages/UIUXPage.jsx
import React from "react";
import { Link } from "react-router-dom";

function UIUXPage() {
  return (
    <div className="uiux-page">
      {/* Breadcrumb */}
      <section className="course-breadcrumb-bar">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">HOME</Link>
            <span className="breadcrumb-separator">&gt;</span>
            <Link href="/courses">COURSES</Link>
            <span className="breadcrumb-separator">&gt;</span>
            <span className="breadcrumb-current">UI/UX DESIGN</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="course-page-hero">
        <div className="container course-hero-grid">
          <div className="course-hero-content">
            <span className="section-badge">CREATIVE PROGRAM</span>
            <h1 className="course-hero-title">UI/UX Design Mastery</h1>
            <p className="course-hero-desc">
              Design beautiful, user-centered digital experiences. Learn user
              research, wireframing, prototyping in Figma, and build a portfolio
              that gets you hired.
            </p>

            <div className="course-hero-meta">
              <div className="course-hero-meta-item">
                <i className="fas fa-clock"></i> 3 Months
              </div>
              <div className="course-hero-meta-item">
                <i className="fas fa-signal"></i> Beginner Friendly
              </div>
              <div className="course-hero-meta-item">
                <i className="fas fa-laptop-house"></i> Online & On-site
              </div>
              <div className="course-hero-meta-item">
                <i className="fas fa-certificate"></i> Certificate Included
              </div>
            </div>

            <div className="course-hero-buttons">
              <Link
                to="/enroll?course=UIUX Design Mastery"
                className="btn btn-primary"
              >
                Enroll Now <i className="fas fa-arrow-right"></i>
              </Link>
              <a
                href="https://api.whatsapp.com/send/?phone=9779766715768&text=Hi%21+I%27m+interested+in+the+UI%2FUX+course"
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
              src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=700&h=500&fit=crop"
              alt="UI/UX Design course at Leafclutch Technologies"
            />
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
              No design experience? No problem — this course is made for
              complete beginners.
            </p>
          </div>

          <div className="requirements-grid">
            <div className="requirements-card beginner-card">
              <h3>
                <i className="fas fa-seedling"></i> Beginner Friendly
              </h3>
              <ul>
                <li>No prior design or coding experience required</li>
                <li>Basic computer and internet skills</li>
                <li>An eye for detail and creativity (can be developed!)</li>
                <li>Passion for solving problems through design</li>
              </ul>
            </div>

            <div className="requirements-card">
              <h3>
                <i className="fas fa-tools"></i> Technical Requirements
              </h3>
              <ul>
                <li>A laptop or desktop computer with internet access</li>
                <li>Figma account (free plan is sufficient)</li>
                <li>Google Chrome or Firefox browser</li>
                <li>
                  All design tools and plugins set up in the first session
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="course-section">
        <div className="container">
          <div className="course-section-header">
            <span className="section-badge ">CURRICULUM</span>
            <h2 className="section-title ">Course Content</h2>
            <p className="section-desc ">
              Master Figma UI/UX Design from wireframes to high-fidelity
              prototypes with components, animations &amp; style guides.
            </p>
          </div>

          <div className="curriculum-accordion-wrapper">
            <div className="curriculum-stats">
              <span className="curriculum-stats-text">
                <strong>8 sections</strong> • 24 lectures • 3 months total
                length
              </span>
              <button className="curriculum-expand-btn">
                Expand all sections
              </button>
            </div>

            {/* Section 1 */}
            <div className="curriculum-section-item active">
              <button className="curriculum-section-header-btn">
                <i className="fas fa-chevron-right curriculum-section-chevron"></i>
                <span className="curriculum-section-title">
                  UX Fundamentals &amp; Figma Setup
                </span>
                <span className="curriculum-section-meta">3 lectures</span>
              </button>
              <div className="curriculum-section-body">
                <ul className="curriculum-lecture-list">
                  <li className="curriculum-lecture-item">
                    <i className="fas fa-play-circle curriculum-lecture-icon"></i>
                    UX briefs, personas &amp; user journeys
                  </li>
                  <li className="curriculum-lecture-item">
                    <i className="fas fa-play-circle curriculum-lecture-icon"></i>
                    Figma interface, frames &amp; navigation
                  </li>
                  <li className="curriculum-lecture-item">
                    <i className="fas fa-play-circle curriculum-lecture-icon"></i>
                    Project setup &amp; design workflow
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 2 */}
            <div className="curriculum-section-item">
              <button className="curriculum-section-header-btn">
                <i className="fas fa-chevron-right curriculum-section-chevron"></i>
                <span className="curriculum-section-title">
                  Wireframing &amp; Low Fidelity
                </span>
                <span className="curriculum-section-meta">3 lectures</span>
              </button>
              <div className="curriculum-section-body">
                <ul className="curriculum-lecture-list">
                  <li className="curriculum-lecture-item">
                    <i className="fas fa-play-circle curriculum-lecture-icon"></i>
                    Low-fidelity wireframes &amp; layout planning
                  </li>
                  <li className="curriculum-lecture-item">
                    <i className="fas fa-play-circle curriculum-lecture-icon"></i>
                    User flows &amp; information architecture
                  </li>
                  <li className="curriculum-lecture-item">
                    <i className="fas fa-play-circle curriculum-lecture-icon"></i>
                    Rapid prototyping &amp; iteration
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 3 */}
            <div className="curriculum-section-item">
              <button className="curriculum-section-header-btn">
                <i className="fas fa-chevron-right curriculum-section-chevron"></i>
                <span className="curriculum-section-title">
                  Typography, Colors &amp; Icons
                </span>
                <span className="curriculum-section-meta">3 lectures</span>
              </button>
              <div className="curriculum-section-body">
                <ul className="curriculum-lecture-list">
                  <li className="curriculum-lecture-item">
                    <i className="fas fa-play-circle curriculum-lecture-icon"></i>
                    Font selection &amp; type hierarchy
                  </li>
                  <li className="curriculum-lecture-item">
                    <i className="fas fa-play-circle curriculum-lecture-icon"></i>
                    Color implementation &amp; palettes
                  </li>
                  <li className="curriculum-lecture-item">
                    <i className="fas fa-play-circle curriculum-lecture-icon"></i>
                    Custom icons &amp; UI components
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 4 */}
            <div className="curriculum-section-item">
              <button className="curriculum-section-header-btn">
                <i className="fas fa-chevron-right curriculum-section-chevron"></i>
                <span className="curriculum-section-title">
                  Prototyping &amp; Interactions
                </span>
                <span className="curriculum-section-meta">3 lectures</span>
              </button>
              <div className="curriculum-section-body">
                <ul className="curriculum-lecture-list">
                  <li className="curriculum-lecture-item">
                    <i className="fas fa-play-circle curriculum-lecture-icon"></i>
                    Interactive prototypes &amp; click-through flows
                  </li>
                  <li className="curriculum-lecture-item">
                    <i className="fas fa-play-circle curriculum-lecture-icon"></i>
                    Smart animate &amp; transition effects
                  </li>
                  <li className="curriculum-lecture-item">
                    <i className="fas fa-play-circle curriculum-lecture-icon"></i>
                    Pages, overlays &amp; scrollable regions
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 5 */}
            <div className="curriculum-section-item">
              <button className="curriculum-section-header-btn">
                <i className="fas fa-chevron-right curriculum-section-chevron"></i>
                <span className="curriculum-section-title">
                  High Fidelity Design
                </span>
                <span className="curriculum-section-meta">3 lectures</span>
              </button>
              <div className="curriculum-section-body">
                <ul className="curriculum-lecture-list">
                  <li className="curriculum-lecture-item">
                    <i className="fas fa-play-circle curriculum-lecture-icon"></i>
                    Detailed UI design &amp; pixel-perfect layouts
                  </li>
                  <li className="curriculum-lecture-item">
                    <i className="fas fa-play-circle curriculum-lecture-icon"></i>
                    Columns, grids &amp; responsive design
                  </li>
                  <li className="curriculum-lecture-item">
                    <i className="fas fa-play-circle curriculum-lecture-icon"></i>
                    Tips &amp; tricks for efficient workflow
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 6 */}
            <div className="curriculum-section-item">
              <button className="curriculum-section-header-btn">
                <i className="fas fa-chevron-right curriculum-section-chevron"></i>
                <span className="curriculum-section-title">
                  Components &amp; Variants
                </span>
                <span className="curriculum-section-meta">3 lectures</span>
              </button>
              <div className="curriculum-section-body">
                <ul className="curriculum-lecture-list">
                  <li className="curriculum-lecture-item">
                    <i className="fas fa-play-circle curriculum-lecture-icon"></i>
                    Reusable components &amp; constraints
                  </li>
                  <li className="curriculum-lecture-item">
                    <i className="fas fa-play-circle curriculum-lecture-icon"></i>
                    Multi-dimensional variants &amp; auto-layout
                  </li>
                  <li className="curriculum-lecture-item">
                    <i className="fas fa-play-circle curriculum-lecture-icon"></i>
                    Free UI kits &amp; Figma plugins
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 7 */}
            <div className="curriculum-section-item">
              <button className="curriculum-section-header-btn">
                <i className="fas fa-chevron-right curriculum-section-chevron"></i>
                <span className="curriculum-section-title">
                  Animations &amp; Micro-Interactions
                </span>
                <span className="curriculum-section-meta">3 lectures</span>
              </button>
              <div className="curriculum-section-body">
                <ul className="curriculum-lecture-list">
                  <li className="curriculum-lecture-item">
                    <i className="fas fa-play-circle curriculum-lecture-icon"></i>
                    Micro-interactions &amp; hover states
                  </li>
                  <li className="curriculum-lecture-item">
                    <i className="fas fa-play-circle curriculum-lecture-icon"></i>
                    Page transitions &amp; animated flows
                  </li>
                  <li className="curriculum-lecture-item">
                    <i className="fas fa-play-circle curriculum-lecture-icon"></i>
                    Testing on mobile &amp; device preview
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 8 */}
            <div className="curriculum-section-item">
              <button className="curriculum-section-header-btn">
                <i className="fas fa-chevron-right curriculum-section-chevron"></i>
                <span className="curriculum-section-title">
                  Style Guides &amp; Handoff
                </span>
                <span className="curriculum-section-meta">3 lectures</span>
              </button>
              <div className="curriculum-section-body">
                <ul className="curriculum-lecture-list">
                  <li className="curriculum-lecture-item">
                    <i className="fas fa-play-circle curriculum-lecture-icon"></i>
                    Style guides &amp; design documentation
                  </li>
                  <li className="curriculum-lecture-item">
                    <i className="fas fa-play-circle curriculum-lecture-icon"></i>
                    Developer handoff &amp; exporting assets
                  </li>
                  <li className="curriculum-lecture-item">
                    <i className="fas fa-play-circle curriculum-lecture-icon"></i>
                    Commenting, feedback &amp; collaboration
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Recommended Course */}
          <div className="recommended-course-card">
            <div className="recommended-course-icon">
              <i className="fas fa-graduation-cap"></i>
            </div>
            <div className="recommended-course-content">
              <div className="recommended-course-label">
                Recommended Udemy Course
              </div>
              <div className="recommended-course-title">
                Figma UI UX Design Essentials by Daniel Walter Scott
              </div>
              <p className="recommended-course-note">
                We recommend this course for our training. If you prefer a
                different Udemy course, let us know — we'll provide that one
                instead.
              </p>
            </div>
            <a
              href="https://www.udemy.com/course/figma-ux-ui-design-user-experience-tutorial-course/"
              className="recommended-course-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-external-link-alt"></i> View on Udemy
            </a>
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
            <div className="outcome-card">
              <i className="fas fa-users"></i>
              <h3>User Research</h3>
              <p>
                Conduct user interviews, create personas, and map user journeys.
              </p>
            </div>
            <div className="outcome-card">
              <i className="fas fa-pencil-ruler"></i>
              <h3>Wireframe & Prototype</h3>
              <p>
                Create low and high-fidelity wireframes and interactive
                prototypes.
              </p>
            </div>
            <div className="outcome-card">
              <i className="fab fa-figma"></i>
              <h3>Master Figma</h3>
              <p>
                Design professional interfaces with components and design
                systems.
              </p>
            </div>
            <div className="outcome-card">
              <i className="fas fa-universal-access"></i>
              <h3>Accessible Design</h3>
              <p>Build inclusive designs that work for all users.</p>
            </div>
            <div className="outcome-card">
              <i className="fas fa-briefcase"></i>
              <h3>Portfolio Ready</h3>
              <p>
                Complete real-world case studies for your professional
                portfolio.
              </p>
            </div>
            <div className="outcome-card">
              <i className="fas fa-certificate"></i>
              <h3>Industry Certificate</h3>
              <p>
                Receive a recognized certificate from Leafclutch Technologies.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Enroll Benefits Section */}
      <section className="enroll-benefits-section">
        <div className="container">
          <div className="enroll-benefits-header">
            <span className="section-badge ">AFTER ENROLLMENT</span>
            <h2 className="section-title ">What You'll Get</h2>
            <p className="section-desc ">
              From day one, you'll have access to resources and support that set
              you up for success.
            </p>
          </div>

          <div className="enroll-benefits-grid">
            <div className="enroll-benefit-card ">
              <div className="enroll-benefit-icon">
                <i className="fab fa-youtube"></i>
              </div>
              <h3>Lifetime Udemy Course</h3>
              <p>
                Get a premium Udemy course related to your chosen training
                program — yours to keep forever.
              </p>
              <span className="enroll-benefit-highlight">Premium</span>
            </div>

            <div className="enroll-benefit-card">
              <div className="enroll-benefit-icon">
                <i className="fas fa-user-tie"></i>
              </div>
              <h3>Dedicated Mentor Support</h3>
              <p>
                Get guidance from experienced industry mentors who'll help you
                every step of the way.
              </p>
            </div>

            <div className="enroll-benefit-card ">
              <div className="enroll-benefit-icon">
                <i className="fas fa-building"></i>
              </div>
              <h3>Company Workflow Experience</h3>
              <p>
                Understand how a real IT company operates — from project
                planning to deployment.
              </p>
            </div>

            <div className="enroll-benefit-card ">
              <div className="enroll-benefit-icon">
                <i className="fas fa-calendar-alt"></i>
              </div>
              <h3>1 Month Training + 2 Months Internship</h3>
              <p>
                One month of intensive training followed by two months of
                hands-on training and internship opportunity.
              </p>
            </div>

            <div className="enroll-benefit-card ">
              <div className="enroll-benefit-icon">
                <i className="fas fa-network-wired"></i>
              </div>
              <h3>Connections &amp; Exposure</h3>
              <p>
                Build your professional network and gain valuable industry
                exposure through real projects.
              </p>
            </div>

            <div className="enroll-benefit-card ">
              <div className="enroll-benefit-icon">
                <i className="fas fa-briefcase"></i>
              </div>
              <h3>Potential Job Offer</h3>
              <p>
                Best performing candidates can receive a direct job offer from
                Leafclutch Technologies.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* After Completion Section */}
      <section className="enroll-benefits-section enroll-benefits-section--alt">
        <div className="container">
          <div className="enroll-benefits-header">
            <span className="section-badge ">AFTER COMPLETION</span>
            <h2 className="section-title ">What You'll Walk Away With</h2>
            <p className="section-desc ">
              Complete the program and leave with tangible skills, credentials,
              and opportunities.
            </p>
          </div>

          <div className="enroll-benefits-grid">
            <div className="enroll-benefit-card ">
              <div className="enroll-benefit-icon">
                <i className="fas fa-award"></i>
              </div>
              <h3>Completion Certificate</h3>
              <p>
                Receive an official completion certificate from Leafclutch
                Technologies for your portfolio.
              </p>
            </div>

            <div className="enroll-benefit-card ">
              <div className="enroll-benefit-icon">
                <i className="fas fa-certificate"></i>
              </div>
              <h3>Training &amp; Internship Certificates</h3>
              <p>
                Get separate training certificate and internship certificate to
                showcase your experience.
              </p>
            </div>

            <div className="enroll-benefit-card ">
              <div className="enroll-benefit-icon">
                <i className="fas fa-cogs"></i>
              </div>
              <h3>Company &amp; Tools Knowledge</h3>
              <p>
                Gain real understanding of how companies run and hands-on
                experience with industry tools.
              </p>
            </div>

            <div className="enroll-benefit-card ">
              <div className="enroll-benefit-icon">
                <i className="fas fa-laptop-code"></i>
              </div>
              <h3>Professional Experience</h3>
              <p>
                Add real professional work experience to your resume — not just
                theory, but actual project work.
              </p>
            </div>

            <div className="enroll-benefit-card ">
              <div className="enroll-benefit-icon">
                <i className="fas fa-hands-helping"></i>
              </div>
              <h3>Ongoing Team Support</h3>
              <p>
                Our team continues to support you even after the program —
                career advice, referrals, and more.
              </p>
            </div>

            <div className="enroll-benefit-card ">
              <div className="enroll-benefit-icon">
                <i className="fas fa-user-check"></i>
              </div>
              <h3>Direct Job Offer</h3>
              <p>
                If a vacancy is available, you can get a direct job offer — no
                interview needed.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Course CTA Section */}
      <section className="course-cta">
        <div className="course-cta-content ">
          <h2>Design Experiences That Matter</h2>
          <p>
            Start your design career with a hands-on, beginner-friendly program.
            No prior experience needed.
          </p>
          <div className="cta-buttons">
            <Link
              to="/enroll?course=UIUX Design Mastery"
              className="btn btn-primary"
            >
              Enroll Now <i className="fas fa-arrow-right"></i>
            </Link>
            <a
              href="https://api.whatsapp.com/send/?phone=9779766715768&amp;text=Hi%21+I%27m+interested+in+the+UI%2FUX+Design+course.&amp;type=phone_number&amp;app_absent=0"
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

export default UIUXPage;
