function CTASection() {
  return (
    <section className="cta" id="cta">
      <div className="container">
        <div className="cta-content">
          <span className="section-badge section-badge--light">
            GET STARTED TODAY
          </span>
          <h2 className="section-title section-title--light">
            Ready to Transform Your Career?
          </h2>
          <p className="section-desc section-desc--light">
            Join hundreds of students across Nepal who are building their tech
            careers with Leafclutch Technologies. Get a free consultation with
            our experts.
          </p>
          <div className="cta-buttons">
            <a href="contact.html" className="btn btn-white">
              Contact Us
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=9779766715768&text=Hi%21+I%27m+interested+in+your+services.&type=phone_number&app_absent=0"
              className="btn btn-outline-light"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-whatsapp"></i> Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
