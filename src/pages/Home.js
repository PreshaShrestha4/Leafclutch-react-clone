function Home() {
  return (
    <div>
      {/* HERO SECTION */}
      <section className="hero" id="home">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <span className="section-badge">
                LEAFCLUTCH TECHNOLOGIES PVT. LTD.
              </span>

              <h1 className="hero-title">
                Empowering Nepal's Future with Technology & Innovation
              </h1>

              <p className="hero-desc">
                Industry-focused training and internship programs in AI, Web
                Development, Cybersecurity, UI/UX, and more.
              </p>

              <div className="hero-buttons">
                <a href="#courses" className="btn btn-primary">
                  Explore Programs
                </a>
                <a href="/contact" className="btn btn-outline-dark">
                  Contact Us
                </a>
              </div>

              {/* HERO COUNTERS */}
              <div className="hero-counters">
                <div className="counter-box">
                  <div className="counter-number">
                    <span data-count="5">5</span>+
                  </div>
                  <div className="counter-label">Projects Delivered</div>
                </div>
                <div className="counter-box">
                  <div className="counter-number">
                    <span data-count="100">100</span>%
                  </div>
                  <div className="counter-label">Client Satisfaction</div>
                </div>
                <div className="counter-box">
                  <div className="counter-number">24/7</div>
                  <div className="counter-label">Support Available</div>
                </div>
              </div>
            </div>

            <div className="hero-images">
              <div className="hero-img-grid">
                <div className="hero-img-item">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=400&fit=crop"
                    alt="Students learning AI and technology at Leafclutch Technologies Nepal"
                  />
                </div>

                <div className="hero-img-item">
                  <img
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=400&fit=crop"
                    alt="Web development internship training in Bhairahawa"
                  />
                </div>
                <div className="hero-img-item">
                  <img
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=400&fit=crop"
                    alt="Technology training and mentorship in Butwal Nepal"
                  />
                </div>
                <div className="hero-img-item">
                  <img
                    src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=400&fit=crop"
                    alt="Online internship program at best IT company in Nepal"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION*/}
      <section className="about" id="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-content reveal visible">
              <span className="section-badge reveal visible">
                TRAINING &amp; INTERNSHIP
              </span>
              <h2 className="section-title reveal visible">
                Build Skills. Gain Experience. Get Industry-Ready.
              </h2>
              <p className="section-desc reveal visible">
                Our 3-month Courses &amp; Internship Program is designed to
                transform beginners into industry-ready professionals. Month 1
                focuses on intensive hands-on training with expert mentors,
                followed by 2 months of real-world internship where you work on
                live projects.
              </p>
              <ul className="about-list">
                <li>
                  <i className="fas fa-check-circle"></i> Experience Letter,
                  Completion Certificate &amp; Internship Certificate
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> 1 Lifetime Udemy
                  Course, 24/7 Mentor Support &amp; Resume Building
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> Letter of
                  Recommendation, Job Opportunities &amp; Internal Hackathons
                </li>
              </ul>
              <a href="enroll.html" className="btn btn-primary">
                Enroll Now
              </a>
            </div>

            <div className="about-visual reveal visible">
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

      {/* COURSES SECTION */}
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
            {/* Course 1: AI & ML */}
            <div className="course-card reveal visible">
              <div
                className="course-image"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop')",
                }}
              >
                <div className="course-overlay">
                  <div className="course-category-badge">Most Popular</div>
                </div>
              </div>
              <div className="course-body">
                <h3 className="course-title">
                  Artificial Intelligence &amp; Machine Learning
                </h3>
                <ul className="course-features">
                  <li>
                    <i className="fas fa-check-circle"></i> Python for AI &amp;
                    Data Science
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i> Deep Learning &amp;
                    Neural Networks
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i> Model Training &amp;
                    Deployment
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i> Real-world AI
                    Projects
                  </li>
                </ul>
                <div className="course-meta">
                  <span>
                    <i className="fas fa-clock"></i> 3 Months
                  </span>
                  <span>
                    <i className="fas fa-signal"></i> Beginner to Advanced
                  </span>
                </div>
                <a
                  href="course-ai-ml.html"
                  className="btn btn-primary btn-block"
                >
                  View Program <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>

            {/* Course 2: Web Development */}
            <div className="course-card reveal visible">
              <div
                className="course-image"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=500&h=300&fit=crop')",
                }}
              >
                <div className="course-overlay">
                  <div className="course-category-badge">Full Stack</div>
                </div>
              </div>
              <div className="course-body">
                <h3 className="course-title">Full Stack Web Development</h3>
                <ul className="course-features">
                  <li>
                    <i className="fas fa-check-circle"></i> HTML, CSS,
                    JavaScript &amp; React
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i> Node.js, Express
                    &amp; MongoDB
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i> REST APIs &amp;
                    Authentication
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i> Deploy Real Web
                    Applications
                  </li>
                </ul>
                <div className="course-meta">
                  <span>
                    <i className="fas fa-clock"></i> 3 Months
                  </span>
                  <span>
                    <i className="fas fa-signal"></i> Beginner to Advanced
                  </span>
                </div>
                <a
                  href="course-web-dev.html"
                  className="btn btn-primary btn-block"
                >
                  View Program <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>

            {/* Course 3: Cybersecurity */}
            <div className="course-card reveal visible">
              <div
                className="course-image"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&h=300&fit=crop')",
                }}
              >
                <div className="course-overlay">
                  <div className="course-category-badge">In Demand</div>
                </div>
              </div>
              <div className="course-body">
                <h3 className="course-title">Cybersecurity Fundamentals</h3>
                <ul className="course-features">
                  <li>
                    <i className="fas fa-check-circle"></i> Network Security
                    &amp; Ethical Hacking
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i> Penetration Testing
                    Tools
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i> Security Auditing
                    &amp; Compliance
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i> Incident Response
                    &amp; Forensics
                  </li>
                </ul>
                <div className="course-meta">
                  <span>
                    <i className="fas fa-clock"></i> 3 Months
                  </span>
                  <span>
                    <i className="fas fa-signal"></i> Intermediate
                  </span>
                </div>
                <a
                  href="course-cybersecurity.html"
                  className="btn btn-primary btn-block"
                >
                  View Program <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>

            {/* Course 4: UI/UX */}
            <div className="course-card reveal visible">
              <div
                className="course-image"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=500&h=300&fit=crop')",
                }}
              >
                <div className="course-overlay">
                  <div className="course-category-badge">Creative</div>
                </div>
              </div>
              <div className="course-body">
                <h3 className="course-title">UI/UX Design Mastery</h3>
                <ul className="course-features">
                  <li>
                    <i className="fas fa-check-circle"></i> User Research &amp;
                    Wireframing
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i> Figma &amp;
                    Prototyping
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i> Design Systems &amp;
                    Components
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i> Portfolio-ready Case
                    Studies
                  </li>
                </ul>
                <div className="course-meta">
                  <span>
                    <i className="fas fa-clock"></i> 3 Months
                  </span>
                  <span>
                    <i className="fas fa-signal"></i> Beginner Friendly
                  </span>
                </div>
                <a
                  href="course-ui-ux.html"
                  className="btn btn-primary btn-block"
                >
                  View Program <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>

            {/* Course 5: Graphic Designing */}
            <div className="course-card reveal visible">
              <div
                className="course-image"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1626785774573-4b799315345d?w=500&h=300&fit=crop')",
                }}
              >
                <div className="course-overlay">
                  <div className="course-category-badge">Creative</div>
                </div>
              </div>
              <div className="course-body">
                <h3 className="course-title">Graphic Designing Professional</h3>
                <ul className="course-features">
                  <li>
                    <i className="fas fa-check-circle"></i> Adobe Photoshop
                    &amp; Illustrator
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i> Brand Identity &amp;
                    Logo Design
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i> Social Media &amp;
                    Marketing Design
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i> Print &amp; Digital
                    Media
                  </li>
                </ul>
                <div className="course-meta">
                  <span>
                    <i className="fas fa-clock"></i> 3 Months
                  </span>
                  <span>
                    <i className="fas fa-signal"></i> Beginner Friendly
                  </span>
                </div>
                <a
                  href="course-graphic-design.html"
                  className="btn btn-primary btn-block"
                >
                  View Program <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>

            {/* Course 6: Data Science */}
            <div className="course-card reveal visible">
              <div
                className="course-image"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop')",
                }}
              >
                <div className="course-overlay">
                  <div className="course-category-badge">Analytics</div>
                </div>
              </div>
              <div className="course-body">
                <h3 className="course-title">Data Science &amp; Analytics</h3>
                <ul className="course-features">
                  <li>
                    <i className="fas fa-check-circle"></i> Python, Pandas &amp;
                    NumPy
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i> Data Visualization
                    with Tableau
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i> Statistical Analysis
                    &amp; SQL
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i> Business
                    Intelligence Projects
                  </li>
                </ul>
                <div className="course-meta">
                  <span>
                    <i className="fas fa-clock"></i> 3 Months
                  </span>
                  <span>
                    <i className="fas fa-signal"></i> Beginner to Intermediate
                  </span>
                </div>
                <a
                  href="course-data-science.html"
                  className="btn btn-primary btn-block"
                >
                  View Program <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
