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
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&amp;h=400&amp;fit=crop"
                    alt="Students learning AI and technology at Leafclutch Technologies Nepal"
                  />
                </div>

                <div className="hero-img-item">
                  <img
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&amp;h=400&amp;fit=crop"
                    alt="Web development internship training in Bhairahawa"
                  />
                </div>
                <div className="hero-img-item">
                  <img
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&amp;h=400&amp;fit=crop"
                    alt="Technology training and mentorship in Butwal Nepal"
                  />
                </div>
                <div className="hero-img-item">
                  <img
                    src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&amp;h=400&amp;fit=crop"
                    alt="Online internship program at best IT company in Nepal"
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
