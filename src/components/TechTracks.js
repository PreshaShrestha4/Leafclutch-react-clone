import { Link } from "react-router-dom";

function TechTracks() {
  return (
    <section className="about-mv-section">
      <div className="container">
        <div className="about-features-header">
          <span className="section-badge reveal visible">AVAILABLE TRACKS</span>
          <h2 className="section-title reveal visible">
            Choose Your Tech Track
          </h2>
          <p className="section-desc reveal visible">
            Pick the specialization that matches your career goals. All tracks
            follow the same 3-month structure.
          </p>
        </div>

        <div className="about-features-grid">
          <Link to="/courses/web-dev" className="track-card reveal visible">
            <div className="track-card-icon">
              <i className="fas fa-code"></i>
            </div>
            <h3>Full Stack Web Development</h3>
            <p>HTML, CSS, JavaScript, React, Node.js, MongoDB & deployment.</p>
          </Link>

          <Link to="/courses/ai-ml" className="track-card reveal visible">
            <div className="track-card-icon">
              <i className="fas fa-brain"></i>
            </div>
            <h3>AI & Machine Learning</h3>
            <p>
              Python, ML, Deep Learning, NLP, TensorFlow & real-world projects.
            </p>
          </Link>

          <Link
            to="/courses/data-science"
            className="track-card reveal visible"
          >
            <div className="track-card-icon">
              <i className="fas fa-chart-bar"></i>
            </div>
            <h3>Data Science & Analytics</h3>
            <p>
              Python, SQL, Power BI, Tableau, Statistics & data visualization.
            </p>
          </Link>

          <Link
            to="/courses/graphic-design"
            className="track-card reveal visible"
          >
            <div className="track-card-icon">
              <i className="fas fa-palette"></i>
            </div>
            <h3>Graphic Designing</h3>
            <p>Photoshop, Illustrator, InDesign, branding & logo design.</p>
          </Link>

          <Link to="/courses/ui-ux" className="track-card reveal visible">
            <div className="track-card-icon">
              <i className="fas fa-pen-nib"></i>
            </div>
            <h3>UI/UX Design</h3>
            <p>Figma, wireframing, prototyping, components & design systems.</p>
          </Link>

          <Link
            to="/courses/cybersecurity"
            className="track-card reveal visible"
          >
            <div className="track-card-icon">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h3>Cybersecurity</h3>
            <p>Ethical hacking, Nmap, Metasploit, web pentesting & defense.</p>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default TechTracks;
