import React from "react";
import { Link } from "react-router-dom";

function MembershipSection() {
  return (
    <section className="membership" id="membership">
      <div className="container">
        <div className="membership-header">
          <span className="section-badge">INTERNSHIP PLANS</span>
          <h2 className="section-title">Choose Your Learning Path</h2>
          <p className="section-desc">
            Flexible internship and training programs designed for students and
            professionals at every level.
          </p>
        </div>

        <div className="pricing-grid">
          {/* Card 1 */}
          <div className="pricing-card">
            <div className="pricing-top">
              <h3 className="pricing-plan-name">Programming Languages</h3>
              <div className="pricing-price">
                NPR 6,000 <span className="pricing-price-note">Total Fee</span>
              </div>
              <p className="pricing-plan-desc">
                Enroll with just <strong>NPR 1,500</strong> · Choose any one
                course
              </p>
            </div>
            <div className="pricing-body">
              <h4 className="pricing-benefit-title">Available Courses</h4>
              <ul className="pricing-features">
                <li>
                  <i className="fas fa-check-circle"></i> Python
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> C / C++
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> Java
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> JavaScript
                </li>
              </ul>
            </div>
            <Link to="/enroll" className="btn btn-outline-dark btn-block">
              Enroll Now
            </Link>
          </div>

          {/* Card 2 */}
          <div className="pricing-card">
            <div className="pricing-top">
              <h3 className="pricing-plan-name">Core Tech &amp; Design</h3>
              <div className="pricing-price">
                NPR 6,000 <span className="pricing-price-note">Total Fee</span>
              </div>
              <p className="pricing-plan-desc">
                Enroll with just <strong>NPR 1,500</strong> · Choose any one
                course
              </p>
            </div>
            <div className="pricing-body">
              <h4 className="pricing-benefit-title">Available Courses</h4>
              <ul className="pricing-features">
                <li>
                  <i className="fas fa-check-circle"></i> Fullstack / Frontend /
                  Backend Dev
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> Cybersecurity
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> Graphic Design / UI/UX
                  Design
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> SEO
                </li>
              </ul>
            </div>
            <Link to="/enroll" className="btn btn-outline-dark btn-block">
              Enroll Now
            </Link>
          </div>

          {/* Card 3 (Featured) */}
          <div className="pricing-card pricing-card--featured">
            <div className="pricing-featured-badge">Most Popular</div>
            <div className="pricing-top">
              <h3 className="pricing-plan-name">Data &amp; AI Programs</h3>
              <div className="pricing-price">
                NPR 8,000 <span className="pricing-price-note">Total Fee</span>
              </div>
              <p className="pricing-plan-desc">
                Enroll with just <strong>NPR 2,500</strong> · Choose any one
                course
              </p>
            </div>
            <div className="pricing-body">
              <h4 className="pricing-benefit-title">Available Courses</h4>
              <ul className="pricing-features">
                <li>
                  <i className="fas fa-check-circle"></i> Artificial
                  Intelligence / Machine Learning
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> Data Analyst / Data
                  Science
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> Agentic AI
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> Generative AI
                </li>
              </ul>
            </div>
            <Link to="/enroll" className="btn btn-primary btn-block">
              Enroll Now
            </Link>
          </div>

          {/* Card 4 */}
          <div className="pricing-card">
            <div className="pricing-top">
              <h3 className="pricing-plan-name">DSA Program</h3>
              <div className="pricing-price">
                NPR 7,000 <span className="pricing-price-note">Total Fee</span>
              </div>
              <p className="pricing-plan-desc">
                Enroll with just <strong>NPR 2,000</strong> · All included
              </p>
            </div>
            <div className="pricing-body">
              <h4 className="pricing-benefit-title">What's Included</h4>
              <ul className="pricing-features">
                <li>
                  <i className="fas fa-check-circle"></i> DSA Theory
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> 350+ LeetCode
                  Questions
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> 100 Days Challenge
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> Interview Prep
                </li>
              </ul>
            </div>
            <Link to="/enroll" className="btn btn-outline-dark btn-block">
              Enroll Now
            </Link>
          </div>
        </div>
        <p className="pricing-installment-note">
          Remaining fee payable in 5 easy installments
        </p>
      </div>
    </section>
  );
}

export default MembershipSection;
