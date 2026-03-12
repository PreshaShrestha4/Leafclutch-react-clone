function ContactForm() {
  return (
    <section className="contact-form-section">
      <div className="container">
        <form className="contact-form">
          <div className="form-row">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Email Address" required />
          </div>

          <div className="form-row">
            <input type="text" placeholder="Subject" required />
          </div>

          <textarea placeholder="Your Message" rows="5"></textarea>

          <button className="btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
