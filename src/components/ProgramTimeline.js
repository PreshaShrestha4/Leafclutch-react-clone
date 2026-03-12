function ProgramTimeline() {
  return (
    <section className="program-timeline-section">
      <div className="container">
        <div className="about-features-header">
          <span className="section-badge reveal visible">PROGRAM JOURNEY</span>
          <h2 className="section-title reveal visible">Your 3-Month Roadmap</h2>
          <p className="section-desc reveal visible">
            A structured path from learning the fundamentals to working on real
            projects as an intern.
          </p>
        </div>

        <div className="program-timeline">
          <div className="timeline-line"></div>

          {/* STEP 1 */}
          <div className="timeline-step reveal visible">
            <div className="timeline-dot">
              <span>1</span>
            </div>
            <div className="timeline-card">
              <div className="timeline-card-header">
                <i className="fas fa-book-open"></i>
                <div>
                  <h3>Month 1 — Intensive Training</h3>
                  <span className="timeline-tag">Weeks 1–4</span>
                </div>
              </div>
              <p>
                Deep-dive into your chosen technology track with daily hands-on
                sessions, assignments, mini projects, and 1-on-1 mentor
                guidance. Build a strong technical foundation.
              </p>
              <ul className="timeline-highlights">
                <li>
                  <i className="fas fa-check"></i> Daily mentor-led practical
                  sessions
                </li>
                <li>
                  <i className="fas fa-check"></i> Assignments, quizzes & mini
                  projects
                </li>
                <li>
                  <i className="fas fa-check"></i> Lifetime Udemy course access
                  provided
                </li>
              </ul>
            </div>
          </div>

          {/* STEP 2 */}
          <div className="timeline-step reveal visible">
            <div className="timeline-dot">
              <span>2</span>
            </div>
            <div className="timeline-card">
              <div className="timeline-card-header">
                <i className="fas fa-laptop-code"></i>
                <div>
                  <h3>Month 2 — Internship Begins</h3>
                  <span className="timeline-tag">Weeks 5–8</span>
                </div>
              </div>
              <p>
                Transition to internship based on your skills and performance.
                Work on live projects in a team environment with code reviews,
                standups, and real deadlines.
              </p>
              <ul className="timeline-highlights">
                <li>
                  <i className="fas fa-check"></i> Promoted to intern based on
                  performance
                </li>
                <li>
                  <i className="fas fa-check"></i> Live project work with team
                  collaboration
                </li>
                <li>
                  <i className="fas fa-check"></i> Regular code reviews &
                  feedback sessions
                </li>
              </ul>
            </div>
          </div>

          {/* STEP 3 */}
          <div className="timeline-step reveal visible">
            <div className="timeline-dot">
              <span>3</span>
            </div>
            <div className="timeline-card">
              <div className="timeline-card-header">
                <i className="fas fa-trophy"></i>
                <div>
                  <h3>Month 3 — Project & Placement</h3>
                  <span className="timeline-tag">Weeks 9–12</span>
                </div>
              </div>
              <p>
                Complete your capstone project, build your professional
                portfolio, and prepare for job interviews with resume building,
                mock interviews, and direct placement opportunities.
              </p>
              <ul className="timeline-highlights">
                <li>
                  <i className="fas fa-check"></i> Capstone project & portfolio
                  completion
                </li>
                <li>
                  <i className="fas fa-check"></i> Resume building & mock
                  interviews
                </li>
                <li>
                  <i className="fas fa-check"></i> Job opportunities &
                  recommendation letter
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProgramTimeline;
