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
            </div>

            <div className="hero-images">
              <div className="hero-img-grid">
                <div className="hero-img-item">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                    alt="students learning"
                  />
                </div>

                <div className="hero-img-item">
                  <img
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998"
                    alt="web training"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
