import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Enroll() {
  const location = useLocation();
  const [selectedCourse, setSelectedCourse] = useState("");
  const [otherReasonVisible, setOtherReasonVisible] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(false);

  // Get course from URL query
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const course = params.get("course");
    if (course) setSelectedCourse(course);
  }, [location.search]);

  const handleReasonChange = (e) => {
    if (e.target.value === "Other") {
      setOtherReasonVisible(true);
    } else {
      setOtherReasonVisible(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with actual API call
    const success = true;
    if (success) {
      setFormSubmitted(true);
      setFormError(false);
    } else {
      setFormError(true);
    }
  };

  return (
    <div className="enroll-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <span className="section-badge">ENROLLMENT</span>
          <h1 className="section-title">Enroll in a Program</h1>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <a href="/">HOME</a>
            <span className="breadcrumb-separator">&gt;</span>
            <a href="/courses">COURSES</a>
            <span className="breadcrumb-separator">&gt;</span>
            <span className="breadcrumb-current">ENROLL</span>
          </nav>
          <p className="section-desc reveal">
            Fill in your details below to apply for our training & internship
            programs. We'll get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Enrollment Form + Sidebar */}
      <section className="enroll-section">
        <div className="container">
          <div className="enroll-grid">
            {/* Form */}
            <div className="enroll-form-card ">
              <h2>
                <i className="fas fa-user-graduate"></i> Application Form
              </h2>

              {!formSubmitted && !formError && (
                <form id="enrollForm" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="fullName">
                      Full Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      placeholder="Your full name"
                      required
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="contactNumber">
                        Contact Number <span className="required">*</span>
                      </label>
                      <input
                        type="number"
                        id="contactNumber"
                        name="contactNumber"
                        placeholder="9800000000"
                        required
                        min="0"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">
                        Professional Gmail <span className="required">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="yourname@gmail.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="linkedin">
                        LinkedIn Profile{" "}
                        <span className="optional">(Optional)</span>
                      </label>
                      <input
                        type="url"
                        id="linkedin"
                        name="linkedin"
                        placeholder="https://linkedin.com/in/yourprofile"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="semester">
                        Current Semester <span className="required">*</span>
                      </label>
                      <select id="semester" name="semester" required>
                        <option value="" disabled>
                          Select your semester
                        </option>
                        <option value="1st Semester">1st Semester</option>
                        <option value="2nd Semester">2nd Semester</option>
                        <option value="3rd Semester">3rd Semester</option>
                        <option value="4th Semester">4th Semester</option>
                        <option value="5th Semester">5th Semester</option>
                        <option value="6th Semester">6th Semester</option>
                        <option value="7th Semester">7th Semester</option>
                        <option value="8th Semester">8th Semester</option>
                        <option value="Graduate">Graduate</option>
                        <option value="Working Professional">
                          Working Professional
                        </option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="course">
                      Program You're Applying For{" "}
                      <span className="required">*</span>
                    </label>
                    <select
                      id="course"
                      name="course"
                      value={selectedCourse}
                      onChange={(e) => setSelectedCourse(e.target.value)}
                      required
                    >
                      <option value="" disabled>
                        Select a program
                      </option>
                      <option value="AI & Machine Learning">
                        AI & Machine Learning
                      </option>
                      <option value="Full Stack Web Development">
                        Full Stack Web Development
                      </option>
                      <option value="Cybersecurity Fundamentals">
                        Cybersecurity Fundamentals
                      </option>
                      <option value="UI/UX Design Mastery">
                        UI/UX Design Mastery
                      </option>
                      <option value="Graphic Designing Professional">
                        Graphic Designing Professional
                      </option>
                      <option value="Data Science & Analytics">
                        Data Science & Analytics
                      </option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>
                      Why do you want to join this program?{" "}
                      <span className="required">*</span>
                    </label>
                    <div className="radio-group">
                      <label className="radio-label">
                        <input
                          type="radio"
                          name="reason"
                          value="To gain practical experience"
                          onChange={handleReasonChange}
                          required
                        />
                        <span className="radio-custom"></span>
                        To gain practical experience
                      </label>
                      <label className="radio-label">
                        <input
                          type="radio"
                          name="reason"
                          value="It is mandatory to complete an internship for my college requirements"
                          onChange={handleReasonChange}
                        />
                        <span className="radio-custom"></span>
                        It is mandatory to complete an internship for my college
                        requirements
                      </label>
                      <label className="radio-label">
                        <input
                          type="radio"
                          name="reason"
                          value="Other"
                          onChange={handleReasonChange}
                        />
                        <span className="radio-custom"></span>
                        Other:
                      </label>
                    </div>
                    {otherReasonVisible && (
                      <input
                        type="text"
                        id="otherReason"
                        name="otherReason"
                        placeholder="Please specify your reason..."
                        className="other-reason-input"
                      />
                    )}
                  </div>

                  <button type="submit" className="btn btn-primary btn-block">
                    <span className="btn-text">
                      Submit Application <i className="fas fa-paper-plane"></i>
                    </span>
                  </button>
                </form>
              )}

              {/* Success Message */}
              {formSubmitted && !formError && (
                <div id="successMessage" className="form-success">
                  <div className="success-icon">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <h3>Application Submitted!</h3>
                  <p>
                    Thank you for your interest. Our team will review your
                    application and contact you within 24 hours.
                  </p>
                </div>
              )}

              {/* Error Message */}
              {formError && (
                <div id="errorMessage" className="form-error">
                  <div className="error-icon">
                    <i className="fas fa-exclamation-circle"></i>
                  </div>
                  <h3>Something went wrong</h3>
                  <p>
                    Please try again or contact us directly at{" "}
                    <a href="mailto:careers@leafclutchtech.com.np">
                      careers@leafclutchtech.com.np
                    </a>
                  </p>
                  <button
                    className="btn btn-outline-primary"
                    onClick={() => setFormError(false)}
                  >
                    Try Again
                  </button>
                </div>
              )}
            </div>

            {/* Info Sidebar */}
            <div className="enroll-info">
              <div className="enroll-info-card">
                <div className="enroll-info-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <h3>Quick Response</h3>
                <p>
                  We review applications within 24 hours and get back to you
                  with next steps.
                </p>
              </div>
              <div className="enroll-info-card">
                <div className="enroll-info-icon">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <h3>Beginner Friendly</h3>
                <p>
                  No prior experience needed. Our programs are designed for
                  absolute beginners.
                </p>
              </div>
              <div className="enroll-info-card">
                <div className="enroll-info-icon">
                  <i className="fas fa-certificate"></i>
                </div>
                <h3>Certificate Included</h3>
                <p>
                  Get an industry-recognized certificate upon successful
                  completion.
                </p>
              </div>
              <div className="enroll-info-card">
                <div className="enroll-info-icon">
                  <i className="fas fa-headset"></i>
                </div>
                <h3>Need Help?</h3>
                <p>
                  Contact us at{" "}
                  <a href="mailto:careers@leafclutchtech.com.np">
                    careers@leafclutchtech.com.np
                  </a>{" "}
                  or call <a href="tel:+9779766715768">+977-9766715768</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="enroll-benefits-section">
        <div className="container">
          <div className="enroll-benefits-header">
            <span className="section-badge ">AFTER ENROLLMENT</span>
            <h2 className="section-title ">What You'll Get</h2>
            <p className="section-desc">
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
              <span className="enroll-benefit-highlight">Highlight</span>
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

            <div className="enroll-benefit-card">
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
      <section className="enroll-benefits-section enroll-benefits-section--alt">
        <div className="container">
          <div className="enroll-benefits-header">
            <span className="section-badge ">AFTER COMPLETION</span>
            <h2 className="section-title">What You'll Walk Away With</h2>
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

            <div className="enroll-benefit-card">
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
      <div className="submit-modal-overlay" id="submitModal">
        <div className="submit-modal">
          <h3>Send Your Application</h3>
          <p>Choose how you'd like to send your enrollment details:</p>
          <div className="submit-modal-buttons">
            <button
              id="whatsappBtn"
              type="button"
              className="btn-whatsapp"
              onClick={() => {
                window.open(
                  "https://wa.me/9779766715768",
                  "_blank",
                  "noopener,noreferrer",
                );
              }}
            >
              <i className="fab fa-whatsapp"></i> Send via WhatsApp
            </button>
            <button
              id="gmailBtn"
              type="button"
              className="btn-gmail"
              onClick={() => {
                window.open(
                  "mailto:careers@leafclutchtech.com.np",
                  "_blank",
                  "noopener,noreferrer",
                );
              }}
            >
              <i className="fas fa-envelope"></i> Send via Email
            </button>
          </div>
          <button
            className="submit-modal-close"
            id="modalClose"
            onClick={() => {
              const modal = document.getElementById("submitModal");
              modal.style.display = "none";
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Enroll;
