import React from "react";
import { Link } from "react-router-dom";
import CourseBreadcrumb from "../components/CourseBreadcrumb"; // your breadcrumb component

// List of courses
const courses = [
  {
    title: "Artificial Intelligence & Machine Learning",
    slug: "ai-ml",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop",
    badge: "Most Popular",
    duration: "3 Months",
    level: "Beginner to Advanced",
    features: [
      "Python, TensorFlow & PyTorch",
      "Neural Networks & Deep Learning",
      "NLP & Computer Vision",
      "Real-world AI Projects",
    ],
  },
  {
    title: "Full Stack Web Development",
    slug: "web-dev",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop",
    badge: "Full Stack",
    duration: "3 Months",
    level: "Beginner to Advanced",
    features: [
      "HTML, CSS, JavaScript & React",
      "Node.js, Express & MongoDB",
      "REST APIs & Authentication",
      "Deployment & DevOps basics",
    ],
  },
  {
    title: "Cybersecurity Fundamentals",
    slug: "cybersecurity",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&h=300&fit=crop",
    badge: "In Demand",
    duration: "3 Months",
    level: "Beginner to Intermediate",
    features: [
      "Network Security & Ethical Hacking",
      "Penetration Testing Tools",
      "OWASP & Web App Security",
      "Incident Response & Forensics",
    ],
  },
  {
    title: "UI/UX Design Mastery",
    slug: "ui-ux",
    image:
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=500&h=300&fit=crop",
    badge: "Creative",
    duration: "3 Months",
    level: "Beginner Friendly",
    features: [
      "User Research & Wireframing",
      "Figma & Prototyping",
      "Design Systems & Components",
      "Portfolio-ready Case Studies",
    ],
  },
  {
    title: "Graphic Designing Professional",
    slug: "graphic-design",
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=500&h=300&fit=crop",
    badge: "Creative",
    duration: "3 Months",
    level: "Beginner Friendly",
    features: [
      "Adobe Photoshop & Illustrator",
      "Brand Identity & Logo Design",
      "Social Media & Marketing Design",
      "Print & Digital Media",
    ],
  },
  {
    title: "Data Science & Analytics",
    slug: "data-science",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
    badge: "Analytics",
    duration: "3 Months",
    level: "Beginner to Intermediate",
    features: [
      "Python, Pandas & NumPy",
      "Data Visualization with Tableau",
      "Statistical Analysis & SQL",
      "Business Intelligence Projects",
    ],
  },
];

function Courses() {
  return (
    <div>
      {/* Breadcrumb */}
      <CourseBreadcrumb />

      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <span className="section-badge">OUR PROGRAMS</span>
          <h1 className="section-title">Training & Internship Programs</h1>
          <p className="section-desc">
            Industry-focused courses designed to build real-world skills. Choose
            your path and start your tech career with Leafclutch Technologies.
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="courses-page-section">
        <div className="container">
          <div className="courses-grid">
            {courses.map((course, index) => (
              <div className="course-card reveal visible" key={index}>
                <div
                  className="course-image"
                  style={{ backgroundImage: `url('${course.image}')` }}
                >
                  <div className="course-overlay">
                    <div className="course-category-badge">{course.badge}</div>
                  </div>
                </div>
                <div className="course-body">
                  <h3 className="course-title">{course.title}</h3>
                  <ul className="course-features">
                    {course.features.map((feat, idx) => (
                      <li key={idx}>
                        <i className="fas fa-check-circle"></i> {feat}
                      </li>
                    ))}
                  </ul>
                  <div className="course-meta">
                    <span>
                      <i className="fas fa-clock"></i> {course.duration}
                    </span>
                    <span>
                      <i className="fas fa-signal"></i> {course.level}
                    </span>
                  </div>
                  <div className="course-card-actions">
                    <Link
                      to={`/courses/${course.slug}`}
                      className="btn btn-outline-primary btn-block"
                    >
                      View Program
                    </Link>
                    <Link
                      to={`/enroll?course=${encodeURIComponent(course.title)}`}
                      className="btn btn-primary btn-block"
                    >
                      Enroll Now <i className="fas fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="course-cta">
        <div className="course-cta-content">
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
