import React from "react";
import { Link } from "react-router-dom";

function GraphicDesigning() {
  return (
    <div>
      {/* Breadcrumb Section */}
      <section className="course-breadcrumb-bar">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">HOME</Link>
            <span className="breadcrumb-separator">&gt;</span>
            <Link to="/courses">COURSES</Link>
            <span className="breadcrumb-separator">&gt;</span>
            <span className="breadcrumb-current">GRAPHIC DESIGNING</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="course-page-hero">
        <div className="container">
          <div className="course-hero-grid">
            <div className="course-hero-content">
              <span className="section-badge">CREATIVE PROGRAM</span>
              <h1 className="course-hero-title">Graphic Designing</h1>
              <p className="course-hero-desc">
                Turn your creative vision into stunning visuals. Master Adobe
                Photoshop, Illustrator, and learn to create logos, brand
                identities, social media graphics, and print-ready designs.
              </p>

              <div className="course-hero-meta">
                <div className="course-hero-meta-item">
                  <i className="fas fa-clock"></i> 3 Months
                </div>
                <div className="course-hero-meta-item">
                  <i className="fas fa-signal"></i> Beginner Friendly
                </div>
                <div className="course-hero-meta-item">
                  <i className="fas fa-laptop-house"></i> Online &amp; On-site
                </div>
                <div className="course-hero-meta-item">
                  <i className="fas fa-certificate"></i> Certificate Included
                </div>
              </div>

              <div className="course-hero-buttons">
                <Link
                  to="/enroll?course=Graphic Designing Professional"
                  className="btn btn-primary"
                >
                  Enroll Now <i className="fas fa-arrow-right"></i>
                </Link>
                <a
                  href="https://api.whatsapp.com/send/?phone=9779766715768&amp;text=Hi%21+I%27m+interested+in+the+Graphic+Design+course.&amp;type=phone_number&amp;app_absent=0"
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
                src="https://images.unsplash.com/photo-1626785774573-4b799315345d?w=700&h=500&fit=crop"
                alt="Graphic Design course at Leafclutch Technologies Nepal"
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
              Never used design software before? That's perfectly fine — we
              start from zero.
            </p>
          </div>

          <div className="requirements-grid">
            <div className="requirements-card beginner-card">
              <h3>
                <i className="fas fa-seedling"></i> Beginner Friendly
              </h3>
              <ul>
                <li>
                  <i className="fas fa-check"></i> No prior design or software
                  experience needed
                </li>
                <li>
                  <i className="fas fa-check"></i> Basic computer and file
                  management skills
                </li>
                <li>
                  <i className="fas fa-check"></i> Interest in visual arts,
                  colors, and creativity
                </li>
                <li>
                  <i className="fas fa-check"></i> Willingness to practice and
                  experiment
                </li>
              </ul>
            </div>

            <div className="requirements-card">
              <h3>
                <i className="fas fa-tools"></i> Technical Requirements
              </h3>
              <ul>
                <li>
                  <i className="fas fa-check"></i> A laptop or desktop with 4GB+
                  RAM
                </li>
                <li>
                  <i className="fas fa-check"></i> Adobe Photoshop & Illustrator
                  (trial or subscription)
                </li>
                <li>
                  <i className="fas fa-check"></i> Canva account (free) for
                  social media design
                </li>
                <li>
                  <i className="fas fa-check"></i> Software setup guided in
                  first session
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="course-section">
        <div className="container">
          {/* Section Header */}
          <div className="course-section-header">
            <span className="section-badge ">CURRICULUM</span>
            <h2 className="section-title ">Course Content</h2>
            <p className="section-desc ">
              Master Photoshop, Illustrator, InDesign, Design Theory, Branding,
              Logo Design & AI tools for graphic design.
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

            {/* Section: Graphic Design Theory */}
            <div className="curriculum-section-item active">
              <button className="curriculum-section-header-btn">
                <i className="fas fa-chevron-right curriculum-section-chevron"></i>
                <span className="curriculum-section-title">
                  Graphic Design Theory
                </span>
                <span className="curriculum-section-meta">3 lectures</span>
              </button>
              <div className="curriculum-section-body">
                <ul className="curriculum-lecture-list">
                  <li className="curriculum-lecture-item">
                    <i className="fas fa-play-circle curriculum-lecture-icon"></i>
                    <span className="curriculum-lecture-name">
                      Typography, color theory & layout
                    </span>
                  </li>
                  <li className="curriculum-lecture-item">
                    <i className="fas fa-play-circle curriculum-lecture-icon"></i>
                    <span className="curriculum-lecture-name">
                      Design history & 2026 trends
                    </span>
                  </li>
                  <li className="curriculum-lecture-item">
                    <i className="fas fa-play-circle curriculum-lecture-icon"></i>
                    <span className="curriculum-lecture-name">
                      How to become a graphic designer
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section: Adobe Photoshop Essentials */}
            <div className="curriculum-section-item">
              <button className="curriculum-section-header-btn">
                <i className="fas fa-chevron-right curriculum-section-chevron"></i>
                <span className="curriculum-section-title">
                  Adobe Photoshop Essentials
                </span>
                <span className="curriculum-section-meta">3 lectures</span>
              </button>
              <div className="curriculum-section-body">
                <ul className="curriculum-lecture-list">
                  <li className="curriculum-lecture-item">
                    <i className="fas fa-play-circle curriculum-lecture-icon"></i>
                    <span className="curriculum-lecture-name">
                      Interface, layers & tools overview
                    </span>
                  </li>
                  <li className="curriculum-lecture-item">
                    <i className="fas fa-play-circle curriculum-lecture-icon"></i>
                    <span className="curriculum-lecture-name">
                      Photo editing & non-destructive techniques
                    </span>
                  </li>
                  <li className="curriculum-lecture-item">
                    <i className="fas fa-play-circle curriculum-lecture-icon"></i>
                    <span className="curriculum-lecture-name">
                      Compositing & image manipulation
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section: Adobe Photoshop Advanced */}
            <div className="curriculum-section-item">
              <button className="curriculum-section-header-btn">
                <i className="fas fa-chevron-right curriculum-section-chevron"></i>
                <span className="curriculum-section-title">
                  Adobe Photoshop Advanced
                </span>
                <span className="curriculum-section-meta">3 lectures</span>
              </button>
              <div className="curriculum-section-body">
                <ul className="curriculum-lecture-list">
                  <li className="curriculum-lecture-item">
                    <i className="fas fa-play-circle curriculum-lecture-icon"></i>
                    <span className="curriculum-lecture-name">
                      Double exposure & creative effects
                    </span>
                  </li>
                  <li className="curriculum-lecture-item">
                    <i className="fas fa-play-circle curriculum-lecture-icon"></i>
                    <span className="curriculum-lecture-name">
                      Mockup creation & presentations
                    </span>
                  </li>
                  <li className="curriculum-lecture-item">
                    <i className="fas fa-play-circle curriculum-lecture-icon"></i>
                    <span className="curriculum-lecture-name">
                      AI Generative Fill & neural filters
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section: Adobe Illustrator Mastery */}
            <div className="curriculum-section-item">
              <button className="curriculum-section-header-btn">
                <i className="fas fa-chevron-right curriculum-section-chevron"></i>
                <span className="curriculum-section-title">
                  Adobe Illustrator Mastery
                </span>
                <span className="curriculum-section-meta">3 lectures</span>
              </button>
              <div className="curriculum-section-body">
                <ul className="curriculum-lecture-list">
                  <li className="curriculum-lecture-item">
                    <i className="fas fa-play-circle curriculum-lecture-icon"></i>
                    <span className="curriculum-lecture-name">
                      Pen tool & shape builder mastery
                    </span>
                  </li>
                  <li className="curriculum-lecture-item">
                    <i className="fas fa-play-circle curriculum-lecture-icon"></i>
                    <span className="curriculum-lecture-name">
                      Vector tracing & illustration
                    </span>
                  </li>
                  <li className="curriculum-lecture-item">
                    <i className="fas fa-play-circle curriculum-lecture-icon"></i>
                    <span className="curriculum-lecture-name">
                      3D objects & typography in Illustrator
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section: Adobe InDesign & Layouts */}
            <div className="curriculum-section-item">
              <button className="curriculum-section-header-btn">
                <i className="fas fa-chevron-right curriculum-section-chevron"></i>
                <span className="curriculum-section-title">
                  Adobe InDesign & Layouts
                </span>
                <span className="curriculum-section-meta">3 lectures</span>
              </button>
              <div className="curriculum-section-body">
                <ul className="curriculum-lecture-list">
                  <li className="curriculum-lecture-item">
                    <i className="fas fa-play-circle curriculum-lecture-icon"></i>
                    <span className="curriculum-lecture-name">
                      Multi-page layouts & master pages
                    </span>
                  </li>
                  <li className="curriculum-lecture-item">
                    <i className="fas fa-play-circle curriculum-lecture-icon"></i>
                    <span className="curriculum-lecture-name">
                      Magazine & cookbook design projects
                    </span>
                  </li>
                  <li className="curriculum-lecture-item">
                    <i className="fas fa-play-circle curriculum-lecture-icon"></i>
                    <span className="curriculum-lecture-name">
                      Book cover & editorial design
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section: Logo Design & Branding */}
            <div className="curriculum-section-item">
              <button className="curriculum-section-header-btn">
                <i className="fas fa-chevron-right curriculum-section-chevron"></i>
                <span className="curriculum-section-title">
                  Logo Design & Branding
                </span>
                <span className="curriculum-section-meta">3 lectures</span>
              </button>
              <div className="curriculum-section-body">
                <ul className="curriculum-lecture-list">
                  <li className="curriculum-lecture-item">
                    <i className="fas fa-play-circle curriculum-lecture-icon"></i>
                    <span className="curriculum-lecture-name">
                      Logo design principles & process
                    </span>
                  </li>
                  <li className="curriculum-lecture-item">
                    <i className="fas fa-play-circle curriculum-lecture-icon"></i>
                    <span className="curriculum-lecture-name">
                      Brand guidelines & style systems
                    </span>
                  </li>
                  <li className="curriculum-lecture-item">
                    <i className="fas fa-play-circle curriculum-lecture-icon"></i>
                    <span className="curriculum-lecture-name">
                      Business card & letterhead design
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section: Social Media & Marketing */}
            <div className="curriculum-section-item">
              <button className="curriculum-section-header-btn">
                <i className="fas fa-chevron-right curriculum-section-chevron"></i>
                <span className="curriculum-section-title">
                  Social Media & Marketing
                </span>
                <span className="curriculum-section-meta">3 lectures</span>
              </button>
              <div className="curriculum-section-body">
                <ul className="curriculum-lecture-list">
                  <li className="curriculum-lecture-item">
                    <i className="fas fa-play-circle curriculum-lecture-icon"></i>
                    <span className="curriculum-lecture-name">
                      YouTube thumbnails & social graphics
                    </span>
                  </li>
                  <li className="curriculum-lecture-item">
                    <i className="fas fa-play-circle curriculum-lecture-icon"></i>
                    <span className="curriculum-lecture-name">
                      Event flyer & ad campaign design
                    </span>
                  </li>
                  <li className="curriculum-lecture-item">
                    <i className="fas fa-play-circle curriculum-lecture-icon"></i>
                    <span className="curriculum-lecture-name">
                      Package design & print production
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section: AI in Design & Portfolio */}
            <div className="curriculum-section-item">
              <button className="curriculum-section-header-btn">
                <i className="fas fa-chevron-right curriculum-section-chevron"></i>
                <span className="curriculum-section-title">
                  AI in Design & Portfolio
                </span>
                <span className="curriculum-section-meta">3 lectures</span>
              </button>
              <div className="curriculum-section-body">
                <ul className="curriculum-lecture-list">
                  <li className="curriculum-lecture-item">
                    <i className="fas fa-play-circle curriculum-lecture-icon"></i>
                    <span className="curriculum-lecture-name">
                      AI tools for designers & prompts
                    </span>
                  </li>
                  <li className="curriculum-lecture-item">
                    <i className="fas fa-play-circle curriculum-lecture-icon"></i>
                    <span className="curriculum-lecture-name">
                      Critiques, feedback & design niche
                    </span>
                  </li>
                  <li className="curriculum-lecture-item">
                    <i className="fas fa-play-circle curriculum-lecture-icon"></i>
                    <span className="curriculum-lecture-name">
                      Portfolio building & career guidance
                    </span>
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
                Graphic Design Masterclass — Learn GREAT Design by Lindsay Marsh
              </div>
              <p className="recommended-course-note">
                We recommend this course for our training. If you prefer a
                different Udemy course, let us know — we'll provide that one
                instead.
              </p>
            </div>
            <a
              href="https://www.udemy.com/course/graphic-design-masterclass-everything-you-need-to-know/"
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
              <div className="outcome-icon">
                <i className="fas fa-image"></i>
              </div>
              <h3>Photo Editing Pro</h3>
              <p>
                Edit, retouch, and composite images professionally in Photoshop.
              </p>
            </div>

            <div className="outcome-card">
              <div className="outcome-icon">
                <i className="fas fa-vector-square"></i>
              </div>
              <h3>Vector Illustrations</h3>
              <p>
                Create scalable logos, icons, and vector artwork in Illustrator.
              </p>
            </div>

            <div className="outcome-card">
              <div className="outcome-icon">
                <i className="fas fa-paint-brush"></i>
              </div>
              <h3>Brand Identities</h3>
              <p>
                Design complete brand kits with logos, colors, and typography.
              </p>
            </div>

            <div className="outcome-card">
              <div className="outcome-icon">
                <i className="fas fa-share-alt"></i>
              </div>
              <h3>Social Media Content</h3>
              <p>Create engaging graphics for Instagram, Facebook, and more.</p>
            </div>

            <div className="outcome-card">
              <div className="outcome-icon">
                <i className="fas fa-briefcase"></i>
              </div>
              <h3>Portfolio Ready</h3>
              <p>Build a professional portfolio with real-world projects.</p>
            </div>

            <div className="outcome-card">
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

      {/* Enrollment Benefits Sections */}
      <section className="enroll-benefits-section">
        <div className="container">
          {/* Section Header */}
          <div className="enroll-benefits-header">
            <span className="section-badge ">AFTER ENROLLMENT</span>
            <h2 className="section-title ">What You'll Get</h2>
            <p className="section-desc ">
              From day one, you'll have access to resources and support that set
              you up for success.
            </p>
          </div>

          {/* Benefits Grid */}
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

            <div className="enroll-benefit-card ">
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
              <h3>Connections & Exposure</h3>
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
      <section className="enroll-benefits-section enroll-benefits-section--alt">
        <div className="container">
          {/* Section Header */}
          <div className="enroll-benefits-header">
            <span className="section-badge ">AFTER COMPLETION</span>
            <h2 className="section-title ">What You'll Walk Away With</h2>
            <p className="section-desc ">
              Complete the program and leave with tangible skills, credentials,
              and opportunities.
            </p>
          </div>

          {/* Benefits Grid */}
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
              <h3>Training & Internship Certificates</h3>
              <p>
                Get separate training certificate and internship certificate to
                showcase your experience.
              </p>
            </div>

            <div className="enroll-benefit-card ">
              <div className="enroll-benefit-icon">
                <i className="fas fa-cogs"></i>
              </div>
              <h3>Company & Tools Knowledge</h3>
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
      {/* CTA Section */}
      <section className="course-cta">
        <div className="course-cta-content ">
          <h2>Unleash Your Creative Potential</h2>
          <p>
            Transform your ideas into stunning visuals. Start your graphic
            design journey — no experience needed.
          </p>
          <div className="cta-buttons">
            <Link
              to="/enroll?course=Graphic Designing Professional"
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

export default GraphicDesigning;
