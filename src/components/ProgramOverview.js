function ProgramOverview() {
  return (
    <section className="about-page-section">
      <div className="container">
        <div className="about-page-grid">
          <div className="about-page-content reveal-left reveal visible">
            <span className="section-badge">HOW IT WORKS</span>
            <h2 className="section-title">
              3-Month Training & Internship Program
            </h2>
            <p>
              Our program is designed to take you from beginner to
              industry-ready professional in just 3 months. It combines
              intensive hands-on training with real-world internship experience
              — all guided by expert mentors in your chosen tech track.
            </p>
            <p>
              You'll learn through practical projects, receive a lifetime Udemy
              course, and gain the certificates, skills, and experience
              employers are looking for.
            </p>
            <ul className="about-list">
              <li>
                <i className="fas fa-check-circle"></i> Expert-led training on
                real-world tech stacks
              </li>
              <li>
                <i className="fas fa-check-circle"></i> Internship with live
                projects & team collaboration
              </li>
              <li>
                <i className="fas fa-check-circle"></i> Certificates, Udemy
                course & job placement support
              </li>
            </ul>
          </div>

          <div className="about-page-image reveal-right reveal visible">
            <div className="about-image-stack">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
                alt="Team collaboration at Leafclutch"
                className="about-img-main"
              />
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=300&h=220&fit=crop"
                alt="Mentor guiding students"
                className="about-img-float"
              />
              <div className="about-img-accent">
                <div className="about-img-accent-number">3</div>
                <div className="about-img-accent-text">
                  Months to <br />
                  Get Job Ready
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProgramOverview;
