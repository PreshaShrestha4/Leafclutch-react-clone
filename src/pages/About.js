import React from "react";

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-content reveal">
            <span className="section-badge reveal">TRAINING & INTERNSHIP</span>

            <h2 className="section-title reveal">
              Build Skills. Gain Experience. Get Industry-Ready.
            </h2>

            <p className="section-desc reveal">
              Our 3-month Courses & Internship Program is designed to transform
              beginners into industry-ready professionals. Month 1 focuses on
              intensive hands-on training with expert mentors, followed by 2
              months of real-world internship where you work on live projects.
            </p>

            <ul className="about-list">
              <li>
                <i className="fas fa-check-circle"></i> Experience Letter,
                Completion Certificate & Internship Certificate
              </li>
              <li>
                <i className="fas fa-check-circle"></i> 1 Lifetime Udemy Course,
                24/7 Mentor Support & Resume Building
              </li>
              <li>
                <i className="fas fa-check-circle"></i> Letter of
                Recommendation, Job Opportunities & Internal Hackathons
              </li>
            </ul>

            <a href="/enroll" className="btn btn-primary">
              Enroll Now
            </a>
          </div>

          <div className="about-visual reveal">
            <div className="about-img-wrapper">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=500&fit=crop"
                alt="Leafclutch Technologies - Best IT company in Bhairahawa Nepal"
                className="about-main-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
