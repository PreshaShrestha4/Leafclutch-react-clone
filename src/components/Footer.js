function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="index.html" className="logo">
              <span className="logo-text">
                <span className="logo-line1">Leafclutch</span>
                <span className="logo-line2">Technologies Pvt. Ltd.</span>
              </span>
            </a>
            <p>
              Empowering innovation through cutting-edge technology solutions,
              training, and digital transformation services.
            </p>
            <div className="footer-socials">
              <a
                href="https://www.facebook.com/profile.php?id=61584902195796"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.instagram.com/leafclutch.technologies/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/leafclutch-technologies/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://www.youtube.com/@LeafclutchTechnologies"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <i className="fab fa-youtube"></i>
              </a>
              <a
                href="https://www.tiktok.com/@leafclutchtechnologies1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
              >
                <i className="fab fa-tiktok"></i>
              </a>
              <a
                href="https://discord.gg/4aDwcMZBPq"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Discord"
              >
                <i className="fab fa-discord"></i>
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="about.html">About Us</a>
              </li>
              <li>
                <a
                  href="https://leafclutchtech.com.np/services/all-services"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="https://leafclutchtech.com.np/careers/jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Explore</h4>
            <ul>
              <li>
                <a href="courses.html">All Courses</a>
              </li>
              <li>
                <a href="course-ai-ml.html">AI &amp; Machine Learning</a>
              </li>
              <li>
                <a href="course-web-dev.html">Web Development</a>
              </li>
              <li>
                <a href="course-cybersecurity.html">Cybersecurity</a>
              </li>
              <li>
                <a href="blog.html">Blog</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact Us</h4>
            <ul className="footer-contact-list">
              <li>
                <i className="fas fa-phone"></i>{" "}
                <a href="tel:+9779766715768">+977-9766715768</a>
              </li>
              <li>
                <i className="fas fa-envelope"></i>{" "}
                <a href="mailto:info@leafclutchtech.com.np">
                  info@leafclutchtech.com.np
                </a>
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i> Siddharthanagar,
                Rupandehi, Nepal
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Leafclutch Technologies. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a
              href="https://leafclutchtech.com.np/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </a>
            <a
              href="https://leafclutchtech.com.np/terms"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
