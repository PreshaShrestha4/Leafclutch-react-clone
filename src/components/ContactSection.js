import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTiktok,
  FaDiscord,
  FaPaperPlane,
} from "react-icons/fa";

function ContactSection() {
  return (
    <section className="contact-section">
      <div className="container">
        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-info-card">
            <h2>Get in Touch</h2>
            <p>
              Reach out via phone, email, or visit us at our office in
              Siddharthanagar. We typically respond within 24 hours.
            </p>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <FaPhone />
              </div>
              <div>
                <h4>Phone</h4>
                <a href="tel:+9779766715768">+977-9766715768</a>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <FaEnvelope />
              </div>
              <div>
                <h4>Email</h4>
                <a href="mailto:info@leafclutchtech.com.np">
                  info@leafclutchtech.com.np
                </a>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4>Location</h4>
                <p>Siddharthanagar, Rupandehi, Nepal</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <FaWhatsapp />
              </div>
              <div>
                <h4>WhatsApp</h4>
                <a
                  href="https://api.whatsapp.com/send/?phone=9779766715768"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat with us on WhatsApp
                </a>
              </div>
            </div>

            {/* Socials */}
            <div className="contact-socials">
              <a
                href="https://www.facebook.com/profile.php?id=61584902195796"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.instagram.com/leafclutch.technologies/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.linkedin.com/company/leafclutch-technologies/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://www.youtube.com/@LeafclutchTechnologies"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube />
              </a>

              <a
                href="https://www.tiktok.com/@leafclutchtechnologies1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTiktok />
              </a>

              <a
                href="https://discord.gg/4aDwcMZBPq"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDiscord />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <h2>Send a Message</h2>

            <form>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    placeholder="Your first name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Your last name"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" placeholder="+977-XXXXXXXXXX" />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <select id="subject" defaultValue="">
                  <option value="" disabled>
                    Select a subject
                  </option>
                  <option value="course-inquiry">Course Inquiry</option>
                  <option value="internship">Internship Program</option>
                  <option value="partnership">Business Partnership</option>
                  <option value="support">Technical Support</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Tell us how we can help you..."
                  required
                />
              </div>

              <button className="btn btn-primary btn-block">
                Send Message <FaPaperPlane />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
