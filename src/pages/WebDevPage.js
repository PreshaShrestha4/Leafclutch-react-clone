import React from "react";
import { Link } from "react-router-dom";
import courses from "../data/coursesData";

function WebDevPage() {
  // Filter only Web Development courses
  const webDevCourses = courses.filter(
    (course) => course.slug === "fullstack-web-development",
  );

  // Get the first Web Dev course for hero
  const course = webDevCourses[0];

  if (!course)
    return (
      <p className="text-center mt-10">No Web Development course found.</p>
    );

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
            <span className="breadcrumb-current">WEB DEVELOPMENT</span>
          </nav>
        </div>
      </section>

      <section className="course-page-hero">
        <div className="container">
          <div className="course-hero-grid">
            {/* Hero Content */}
            <div className="course-hero-content reveal-left reveal visible">
              <span className="section-badge reveal visible">
                FULL STACK PROGRAM
              </span>
              <h1 className="course-hero-title">Full Stack Web Development</h1>
              <p className="course-hero-desc">
                Build modern, responsive websites and web applications from
                front-end to back-end. Learn the MERN stack and deploy real
                projects — perfect for complete beginners.
              </p>

              <div className="course-hero-meta">
                <div className="course-hero-meta-item">
                  <i className="fas fa-clock"></i> 3 Months
                </div>
                <div className="course-hero-meta-item">
                  <i className="fas fa-signal"></i> Beginner to Advanced
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
                  to="/enroll?course=Full%20Stack%20Web%20Development"
                  className="btn btn-primary"
                >
                  Enroll Now <i className="fas fa-arrow-right"></i>
                </Link>
                <a
                  href="https://api.whatsapp.com/send/?phone=9779766715768&text=Hi!+I'm+interested+in+the+Web+Development+course.&type=phone_number&app_absent=0"
                  className="btn btn-outline-dark"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-whatsapp"></i> Ask on WhatsApp
                </a>
              </div>
            </div>

            {/* Hero Image */}
            <div className="course-hero-image reveal-right reveal visible">
              <img
                src="https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=700&h=500&fit=crop"
                alt="Web Development course at Leafclutch Technologies Nepal"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="course-section">
        <div className="container">
          {/* Section Header */}
          <div className="course-section-header">
            <span className="section-badge reveal visible">REQUIREMENTS</span>
            <h2 className="section-title reveal visible">
              What You Need to Get Started
            </h2>
            <p className="section-desc reveal visible">
              No coding experience? No problem. This course takes you from zero
              to full-stack developer.
            </p>
          </div>

          {/* Requirements Grid */}
          <div className="requirements-grid">
            {/* Beginner Friendly Card */}
            <div className="requirements-card beginner-card reveal visible">
              <h3>
                <i className="fas fa-seedling"></i> Beginner Friendly
              </h3>
              <ul>
                <li>
                  <i className="fas fa-check"></i> No prior programming or web
                  development experience needed
                </li>
                <li>
                  <i className="fas fa-check"></i> Basic computer skills —
                  typing, using a browser, file management
                </li>
                <li>
                  <i className="fas fa-check"></i> Curiosity and dedication to
                  practice coding daily
                </li>
                <li>
                  <i className="fas fa-check"></i> We teach HTML, CSS, and
                  JavaScript from the very basics
                </li>
              </ul>
            </div>

            {/* Technical Requirements Card */}
            <div className="requirements-card reveal visible">
              <h3>
                <i className="fas fa-tools"></i> Technical Requirements
              </h3>
              <ul>
                <li>
                  <i className="fas fa-check"></i> A laptop or desktop computer
                  (any OS — Windows, Mac, or Linux)
                </li>
                <li>
                  <i className="fas fa-check"></i> Stable internet connection
                  for online classes
                </li>
                <li>
                  <i className="fas fa-check"></i> VS Code editor (free) —
                  installed in the first session
                </li>
                <li>
                  <i className="fas fa-check"></i> Chrome or Firefox browser for
                  development
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="course-section">
        <div className="container">
          {/* Section Header */}
          <div className="course-section-header">
            <span className="section-badge reveal visible">REQUIREMENTS</span>
            <h2 className="section-title reveal visible">
              What You Need to Get Started
            </h2>
            <p className="section-desc reveal visible">
              No coding experience? No problem. This course takes you from zero
              to full-stack developer.
            </p>
          </div>

          {/* Requirements Grid */}
          <div className="requirements-grid">
            {/* Beginner Friendly Card */}
            <div className="requirements-card beginner-card reveal visible">
              <h3>
                <i className="fas fa-seedling"></i> Beginner Friendly
              </h3>
              <ul>
                <li>
                  <i className="fas fa-check"></i> No prior programming or web
                  development experience needed
                </li>
                <li>
                  <i className="fas fa-check"></i> Basic computer skills —
                  typing, using a browser, file management
                </li>
                <li>
                  <i className="fas fa-check"></i> Curiosity and dedication to
                  practice coding daily
                </li>
                <li>
                  <i className="fas fa-check"></i> We teach HTML, CSS, and
                  JavaScript from the very basics
                </li>
              </ul>
            </div>

            {/* Technical Requirements Card */}
            <div className="requirements-card reveal visible">
              <h3>
                <i className="fas fa-tools"></i> Technical Requirements
              </h3>
              <ul>
                <li>
                  <i className="fas fa-check"></i> A laptop or desktop computer
                  (any OS — Windows, Mac, or Linux)
                </li>
                <li>
                  <i className="fas fa-check"></i> Stable internet connection
                  for online classes
                </li>
                <li>
                  <i className="fas fa-check"></i> VS Code editor (free) —
                  installed in the first session
                </li>
                <li>
                  <i className="fas fa-check"></i> Chrome or Firefox browser for
                  development
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="course-section">
        <div className="container">
          {/* Section Header */}
          <div className="course-section-header">
            <span className="section-badge reveal visible">CURRICULUM</span>
            <h2 className="section-title reveal visible">Course Content</h2>
            <p className="section-desc reveal visible">
              A comprehensive full-stack journey covering HTML, CSS, Tailwind,
              JavaScript, Node.js, React, MongoDB, Prisma &amp; Deployment.
            </p>
          </div>

          {/* Curriculum Accordion */}
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
                  Web Development Foundations
                </span>
                <span className="curriculum-section-meta">3 lectures</span>
              </button>
              <div className="curriculum-section-body">
                <ul className="curriculum-lecture-list">
                  <li className="curriculum-lecture-item">
                    <i className="fas fa-play-circle curriculum-lecture-icon"></i>
                    <span className="curriculum-lecture-name">
                      Web development roadmap &amp; career paths
                    </span>
                  </li>
                  <li className="curriculum-lecture-item">
                    <i className="fas fa-play-circle curriculum-lecture-icon"></i>
                    <span className="curriculum-lecture-name">
                      Setting up your code editor &amp; tools
                    </span>
                  </li>
                  <li className="curriculum-lecture-item">
                    <i className="fas fa-play-circle curriculum-lecture-icon"></i>
                    <span className="curriculum-lecture-name">
                      Basics of how the web works
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 2 */}
            <div className="curriculum-section-item">
              <button className="curriculum-section-header-btn">
                <i className="fas fa-chevron-right curriculum-section-chevron"></i>
                <span className="curriculum-section-title">
                  HTML &amp; CSS Mastery
                </span>
                <span className="curriculum-section-meta">3 lectures</span>
              </button>
              <div className="curriculum-section-body">
                <ul className="curriculum-lecture-list">
                  <li className="curriculum-lecture-item">
                    <i className="fas fa-play-circle curriculum-lecture-icon"></i>
                    <span className="curriculum-lecture-name">
                      HTML5 structure, semantics &amp; forms
                    </span>
                  </li>
                  <li className="curriculum-lecture-item">
                    <i className="fas fa-play-circle curriculum-lecture-icon"></i>
                    <span className="curriculum-lecture-name">
                      CSS3 styling, Flexbox &amp; Grid layout
                    </span>
                  </li>
                  <li className="curriculum-lecture-item">
                    <i className="fas fa-play-circle curriculum-lecture-icon"></i>
                    <span className="curriculum-lecture-name">
                      Tailwind CSS utility-first framework
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 3 */}
            <div className="curriculum-section-item">
              <button className="curriculum-section-header-btn">
                <i className="fas fa-chevron-right curriculum-section-chevron"></i>
                <span className="curriculum-section-title">
                  JavaScript Foundation
                </span>
                <span className="curriculum-section-meta">3 lectures</span>
              </button>
              <div className="curriculum-section-body">
                <ul className="curriculum-lecture-list">
                  <li className="curriculum-lecture-item">
                    <i className="fas fa-play-circle curriculum-lecture-icon"></i>
                    <span className="curriculum-lecture-name">
                      Variables, functions &amp; ES6+ syntax
                    </span>
                  </li>
                  <li className="curriculum-lecture-item">
                    <i className="fas fa-play-circle curriculum-lecture-icon"></i>
                    <span className="curriculum-lecture-name">
                      DOM manipulation &amp; event handling
                    </span>
                  </li>
                  <li className="curriculum-lecture-item">
                    <i className="fas fa-play-circle curriculum-lecture-icon"></i>
                    <span className="curriculum-lecture-name">
                      Async JavaScript, Fetch API &amp; Promises
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 4 */}
            <div className="curriculum-section-item">
              <button className="curriculum-section-header-btn">
                <i className="fas fa-chevron-right curriculum-section-chevron"></i>
                <span className="curriculum-section-title">
                  Backend with Node.js &amp; Express
                </span>
                <span className="curriculum-section-meta">3 lectures</span>
              </button>
              <div className="curriculum-section-body">
                <ul className="curriculum-lecture-list">
                  <li className="curriculum-lecture-item">
                    <i className="fas fa-play-circle curriculum-lecture-icon"></i>
                    <span className="curriculum-lecture-name">
                      Server setup with Node.js &amp; Express
                    </span>
                  </li>
                  <li className="curriculum-lecture-item">
                    <i className="fas fa-play-circle curriculum-lecture-icon"></i>
                    <span className="curriculum-lecture-name">
                      Mongoose, Prisma &amp; Drizzle ORMs
                    </span>
                  </li>
                  <li className="curriculum-lecture-item">
                    <i className="fas fa-play-circle curriculum-lecture-icon"></i>
                    <span className="curriculum-lecture-name">
                      RESTful API design &amp; routing
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 5 */}
            <div className="curriculum-section-item">
              <button className="curriculum-section-header-btn">
                <i className="fas fa-chevron-right curriculum-section-chevron"></i>
                <span className="curriculum-section-title">
                  Database &amp; Authentication
                </span>
                <span className="curriculum-section-meta">3 lectures</span>
              </button>
              <div className="curriculum-section-body">
                <ul className="curriculum-lecture-list">
                  <li className="curriculum-lecture-item">
                    <i className="fas fa-play-circle curriculum-lecture-icon"></i>
                    <span className="curriculum-lecture-name">
                      MongoDB, PostgreSQL &amp; NeonDB
                    </span>
                  </li>
                  <li className="curriculum-lecture-item">
                    <i className="fas fa-play-circle curriculum-lecture-icon"></i>
                    <span className="curriculum-lecture-name">
                      Build your own authentication system
                    </span>
                  </li>
                  <li className="curriculum-lecture-item">
                    <i className="fas fa-play-circle curriculum-lecture-icon"></i>
                    <span className="curriculum-lecture-name">
                      CRUD operations &amp; data modeling
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 6 */}
            <div className="curriculum-section-item">
              <button className="curriculum-section-header-btn">
                <i className="fas fa-chevron-right curriculum-section-chevron"></i>
                <span className="curriculum-section-title">
                  Frontend with React
                </span>
                <span className="curriculum-section-meta">3 lectures</span>
              </button>
              <div className="curriculum-section-body">
                <ul className="curriculum-lecture-list">
                  <li className="curriculum-lecture-item">
                    <i className="fas fa-play-circle curriculum-lecture-icon"></i>
                    <span className="curriculum-lecture-name">
                      React fundamentals &amp; API handling
                    </span>
                  </li>
                  <li className="curriculum-lecture-item">
                    <i className="fas fa-play-circle curriculum-lecture-icon"></i>
                    <span className="curriculum-lecture-name">
                      State management with Redux &amp; Zustand
                    </span>
                  </li>
                  <li className="curriculum-lecture-item">
                    <i className="fas fa-play-circle curriculum-lecture-icon"></i>
                    <span className="curriculum-lecture-name">
                      Building interactive single-page apps
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 7 */}
            <div className="curriculum-section-item">
              <button className="curriculum-section-header-btn">
                <i className="fas fa-chevron-right curriculum-section-chevron"></i>
                <span className="curriculum-section-title">
                  Full-Stack MERN Projects
                </span>
                <span className="curriculum-section-meta">3 lectures</span>
              </button>
              <div className="curriculum-section-body">
                <ul className="curriculum-lecture-list">
                  <li className="curriculum-lecture-item">
                    <i className="fas fa-play-circle curriculum-lecture-icon"></i>
                    <span className="curriculum-lecture-name">
                      Full-stack application development
                    </span>
                  </li>
                  <li className="curriculum-lecture-item">
                    <i className="fas fa-play-circle curriculum-lecture-icon"></i>
                    <span className="curriculum-lecture-name">
                      Open-source project contribution
                    </span>
                  </li>
                  <li className="curriculum-lecture-item">
                    <i className="fas fa-play-circle curriculum-lecture-icon"></i>
                    <span className="curriculum-lecture-name">
                      Git, GitHub &amp; version control
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 8 */}
            <div className="curriculum-section-item">
              <button className="curriculum-section-header-btn">
                <i className="fas fa-chevron-right curriculum-section-chevron"></i>
                <span className="curriculum-section-title">
                  Deployment &amp; AI Integration
                </span>
                <span className="curriculum-section-meta">3 lectures</span>
              </button>
              <div className="curriculum-section-body">
                <ul className="curriculum-lecture-list">
                  <li className="curriculum-lecture-item">
                    <i className="fas fa-play-circle curriculum-lecture-icon"></i>
                    <span className="curriculum-lecture-name">
                      Custom VPS deployment &amp; hosting
                    </span>
                  </li>
                  <li className="curriculum-lecture-item">
                    <i className="fas fa-play-circle curriculum-lecture-icon"></i>
                    <span className="curriculum-lecture-name">
                      TensorFlow.js &amp; Langchain for AI apps
                    </span>
                  </li>
                  <li className="curriculum-lecture-item">
                    <i className="fas fa-play-circle curriculum-lecture-icon"></i>
                    <span className="curriculum-lecture-name">
                      Portfolio building &amp; freelancing tips
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Recommended Course Card */}
          <div className="recommended-course-card">
            <div className="recommended-course-icon">
              <i className="fas fa-graduation-cap"></i>
            </div>
            <div className="recommended-course-content">
              <div className="recommended-course-label">
                Recommended Udemy Course
              </div>
              <div className="recommended-course-title">
                Complete Web Development Course by Hitesh Choudhary
              </div>
              <p className="recommended-course-note">
                We recommend this course for our training. If you prefer a
                different Udemy course, let us know — we'll provide that one
                instead.
              </p>
            </div>
            <a
              href="https://www.udemy.com/course/web-dev-master/"
              className="recommended-course-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-external-link-alt"></i> View on Udemy
            </a>
          </div>
        </div>
      </section>
      <section className="course-section">
        <div className="container">
          {/* Section Header */}
          <div className="course-section-header">
            <span className="section-badge reveal visible">OUTCOMES</span>
            <h2 className="section-title reveal visible">
              What You'll Be Able to Do
            </h2>
          </div>

          {/* Outcomes Grid */}
          <div className="outcomes-grid">
            <div className="outcome-card reveal visible">
              <div className="outcome-icon">
                <i className="fas fa-code"></i>
              </div>
              <h3>Build Responsive Websites</h3>
              <p>
                Create pixel-perfect, mobile-first websites using HTML, CSS, and
                JavaScript.
              </p>
            </div>

            <div className="outcome-card reveal visible">
              <div className="outcome-icon">
                <i className="fab fa-react"></i>
              </div>
              <h3>React Applications</h3>
              <p>
                Build dynamic single-page applications using React.js and modern
                front-end tools.
              </p>
            </div>

            <div className="outcome-card reveal visible">
              <div className="outcome-icon">
                <i className="fas fa-server"></i>
              </div>
              <h3>Back-End APIs</h3>
              <p>
                Design and build RESTful APIs with Node.js, Express, and
                MongoDB.
              </p>
            </div>

            <div className="outcome-card reveal visible">
              <div className="outcome-icon">
                <i className="fas fa-database"></i>
              </div>
              <h3>Database Management</h3>
              <p>Store, query, and manage data with MongoDB &amp; Mongoose.</p>
            </div>

            <div className="outcome-card reveal visible">
              <div className="outcome-icon">
                <i className="fas fa-cloud-upload-alt"></i>
              </div>
              <h3>Deploy Live Projects</h3>
              <p>
                Take your projects live with professional deployment and
                hosting.
              </p>
            </div>

            <div className="outcome-card reveal visible">
              <div className="outcome-icon">
                <i className="fas fa-certificate"></i>
              </div>
              <h3>Industry Certificate</h3>
              <p>
                Receive a recognized certificate from Leafclutch Technologies.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="enroll-benefits-section">
        <div className="container">
          {/* Section Header */}
          <div className="enroll-benefits-header">
            <span className="section-badge reveal visible">
              AFTER ENROLLMENT
            </span>
            <h2 className="section-title reveal visible">What You'll Get</h2>
            <p className="section-desc reveal visible">
              From day one, you'll have access to resources and support that set
              you up for success.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="enroll-benefits-grid">
            <div className="enroll-benefit-card reveal visible">
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

            <div className="enroll-benefit-card reveal visible">
              <div className="enroll-benefit-icon">
                <i className="fas fa-user-tie"></i>
              </div>
              <h3>Dedicated Mentor Support</h3>
              <p>
                Get guidance from experienced industry mentors who'll help you
                every step of the way.
              </p>
            </div>

            <div className="enroll-benefit-card reveal visible">
              <div className="enroll-benefit-icon">
                <i className="fas fa-building"></i>
              </div>
              <h3>Company Workflow Experience</h3>
              <p>
                Understand how a real IT company operates — from project
                planning to deployment.
              </p>
            </div>

            <div className="enroll-benefit-card reveal visible">
              <div className="enroll-benefit-icon">
                <i className="fas fa-calendar-alt"></i>
              </div>
              <h3>1 Month Training + 2 Months Internship</h3>
              <p>
                One month of intensive training followed by two months of
                hands-on training and internship opportunity.
              </p>
            </div>

            <div className="enroll-benefit-card reveal visible">
              <div className="enroll-benefit-icon">
                <i className="fas fa-network-wired"></i>
              </div>
              <h3>Connections &amp; Exposure</h3>
              <p>
                Build your professional network and gain valuable industry
                exposure through real projects.
              </p>
            </div>

            <div className="enroll-benefit-card reveal visible">
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
      <section className="enroll-benefits-section enroll-benefits-section--alt">
        <div className="container">
          {/* Section Header */}
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

          {/* Benefits Grid */}
          <div className="enroll-benefits-grid">
            <div className="enroll-benefit-card reveal visible">
              <div className="enroll-benefit-icon">
                <i className="fas fa-award"></i>
              </div>
              <h3>Completion Certificate</h3>
              <p>
                Receive an official completion certificate from Leafclutch
                Technologies for your portfolio.
              </p>
            </div>

            <div className="enroll-benefit-card reveal visible">
              <div className="enroll-benefit-icon">
                <i className="fas fa-certificate"></i>
              </div>
              <h3>Training &amp; Internship Certificates</h3>
              <p>
                Get separate training certificate and internship certificate to
                showcase your experience.
              </p>
            </div>

            <div className="enroll-benefit-card reveal visible">
              <div className="enroll-benefit-icon">
                <i className="fas fa-cogs"></i>
              </div>
              <h3>Company &amp; Tools Knowledge</h3>
              <p>
                Gain real understanding of how companies run and hands-on
                experience with industry tools.
              </p>
            </div>

            <div className="enroll-benefit-card reveal visible">
              <div className="enroll-benefit-icon">
                <i className="fas fa-laptop-code"></i>
              </div>
              <h3>Professional Experience</h3>
              <p>
                Add real professional work experience to your resume — not just
                theory, but actual project work.
              </p>
            </div>

            <div className="enroll-benefit-card reveal visible">
              <div className="enroll-benefit-icon">
                <i className="fas fa-hands-helping"></i>
              </div>
              <h3>Ongoing Team Support</h3>
              <p>
                Our team continues to support you even after the program —
                career advice, referrals, and more.
              </p>
            </div>

            <div className="enroll-benefit-card reveal visible">
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
      <section className="course-cta">
        <div className="course-cta-content reveal visible">
          <h2>Ready to Build the Web?</h2>
          <p>
            Join our next Web Development batch and start coding from day one.
            No prerequisites — just your enthusiasm.
          </p>
          <div className="cta-buttons">
            <Link
              to="/enroll?course=Full%20Stack%20Web%20Development"
              className="btn btn-white"
            >
              Enroll Now
            </Link>
            <a
              href="https://api.whatsapp.com/send/?phone=9779766715768&amp;text=Hi%21+I%27m+interested+in+the+Web+Development+course.&amp;type=phone_number&amp;app_absent=0"
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

export default WebDevPage;
