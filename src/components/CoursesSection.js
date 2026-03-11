function CoursesSection() {
  const courses = [
    {
      title: "Artificial Intelligence & Machine Learning",
      img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop",
      category: "Most Popular",
      features: [
        "Python for AI & Data Science",
        "Deep Learning & Neural Networks",
        "Model Training & Deployment",
        "Real-world AI Projects",
      ],
      duration: "3 Months",
      level: "Beginner to Advanced",
      link: "course-ai-ml.html",
    },
    {
      title: "Full Stack Web Development",
      img: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=500&h=300&fit=crop",
      category: "Full Stack",
      features: [
        "HTML, CSS, JavaScript & React",
        "Node.js, Express & MongoDB",
        "REST APIs & Authentication",
        "Deploy Real Web Applications",
      ],
      duration: "3 Months",
      level: "Beginner to Advanced",
      link: "course-web-dev.html",
    },
    {
      title: "Cybersecurity Fundamentals",
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&h=300&fit=crop",
      category: "In Demand",
      features: [
        "Network Security & Ethical Hacking",
        "Penetration Testing Tools",
        "Security Auditing & Compliance",
        "Incident Response & Forensics",
      ],
      duration: "3 Months",
      level: "Intermediate",
      link: "course-cybersecurity.html",
    },
    {
      title: "UI/UX Design Mastery",
      img: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=500&h=300&fit=crop",
      category: "Creative",
      features: [
        "User Research & Wireframing",
        "Figma & Prototyping",
        "Design Systems & Components",
        "Portfolio-ready Case Studies",
      ],
      duration: "3 Months",
      level: "Beginner Friendly",
      link: "course-ui-ux.html",
    },
    {
      title: "Graphic Designing Professional",
      img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=500&h=300&fit=crop",
      category: "Creative",
      features: [
        "Adobe Photoshop & Illustrator",
        "Brand Identity & Logo Design",
        "Social Media & Marketing Design",
        "Print & Digital Media",
      ],
      duration: "3 Months",
      level: "Beginner Friendly",
      link: "course-graphic-design.html",
    },
    {
      title: "Data Science & Analytics",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      category: "Analytics",
      features: [
        "Python, Pandas & NumPy",
        "Data Visualization with Tableau",
        "Statistical Analysis & SQL",
        "Business Intelligence Projects",
      ],
      duration: "3 Months",
      level: "Beginner to Intermediate",
      link: "course-data-science.html",
    },
  ];

  return (
    <section className="courses" id="courses">
      <div className="container">
        <div className="courses-header">
          <div className="courses-header-left">
            <span className="section-badge reveal visible">OUR PROGRAMS</span>
            <h2 className="section-title reveal visible">
              Training &amp; Internship Programs
            </h2>
          </div>
          <div className="courses-header-right">
            <p className="section-desc reveal visible">
              Industry-focused courses designed to build real-world skills.
              Whether you're a beginner or looking to level up, our expert-led
              programs prepare you for the tech industry.
            </p>
            <a href="enroll.html" className="btn btn-outline-primary">
              Enroll Now
            </a>
          </div>
        </div>

        <div className="courses-grid">
          {courses.map((course, index) => (
            <div key={index} className="course-card reveal visible">
              <div
                className="course-image"
                style={{ backgroundImage: `url('${course.img}')` }}
              >
                <div className="course-overlay">
                  <div className="course-category-badge">{course.category}</div>
                </div>
              </div>
              <div className="course-body">
                <h3 className="course-title">{course.title}</h3>
                <ul className="course-features">
                  {course.features.map((feature, idx) => (
                    <li key={idx}>
                      <i className="fas fa-check-circle"></i> {feature}
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
                <a href={course.link} className="btn btn-primary btn-block">
                  View Program <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoursesSection;
