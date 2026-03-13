import React from "react";
import { Link } from "react-router-dom";
import courses from "../data/coursesData";

function Courses() {
  return (
    <div className="courses-page">
      {/* Breadcrumb */}
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link to="/">HOME</Link>
        <span className="breadcrumb-separator">&gt;</span>
        <span className="breadcrumb-current">COURSES</span>
      </nav>

      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <span className="section-badge">OUR PROGRAMS</span>
          <h1 className="section-title">Training & Internship Programs</h1>

          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">HOME</Link>
            <span className="breadcrumb-separator"> &gt; </span>
            <span className="breadcrumb-current">COURSES</span>
          </nav>

          <p className="section-desc">
            Industry-focused courses designed to build real-world skills. Choose
            your path and start your tech career.
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="courses-page-section">
        <div className="container">
          {courses && courses.length > 0 ? (
            <div className="courses-grid">
              {courses.map((course, index) => (
                <div className="course-card" key={course.slug || index}>
                  <div
                    className="course-image"
                    style={{
                      backgroundImage: `url(${course.image})`,
                    }}
                  >
                    {course.badge && (
                      <div className="course-category-badge">
                        {course.badge}
                      </div>
                    )}
                  </div>

                  <div className="course-body">
                    <h3 className="course-title">{course.title}</h3>

                    {course.features && course.features.length > 0 && (
                      <ul className="course-features">
                        {course.features.map((f, i) => (
                          <li key={i}>
                            <i className="fas fa-check-circle"></i> {f}
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="course-meta">
                      <span>
                        <i className="fas fa-clock"></i> {course.duration}
                      </span>
                      <span>
                        <i className="fas fa-signal"></i> {course.level}
                      </span>
                    </div>

                    <Link
                      to={`/courses/${course.slug}`}
                      className="btn btn-outline-primary"
                    >
                      View Program
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No courses available at the moment.</p>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="course-cta">
        <div className="course-cta-content container">
          <h2>Not Sure Which Program Is Right for You?</h2>
          <p>
            Talk to our team and get personalized guidance on choosing the best
            course for your career goals.
          </p>

          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-white">
              Contact Us
            </Link>
            <a
              href="https://api.whatsapp.com/send/?phone=9779766715768&text=Hi%21+I+need+help+choosing+a+course.&type=phone_number&app_absent=0"
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

export default Courses;
