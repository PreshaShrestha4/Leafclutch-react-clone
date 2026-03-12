// AboutHowItWorks.js
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

function AboutHowItWorks() {
  return (
    <section className="about-page-section">
      <div className="container">
        <div className="about-page-grid">
          {/* Content */}
          <div className="about-page-content reveal-left reveal visible">
            <span className="section-badge reveal visible">HOW IT WORKS</span>
            <h2 className="section-title reveal visible">
              3-Month Training &amp; Internship Program
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
                <FaCheckCircle className="about-list-icon" /> Expert-led
                training on real-world tech stacks
              </li>
              <li>
                <FaCheckCircle className="about-list-icon" /> Internship with
                live projects &amp; team collaboration
              </li>
              <li>
                <FaCheckCircle className="about-list-icon" /> Certificates,
                Udemy course &amp; job placement support
              </li>
            </ul>
          </div>

          {/* Image */}
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
                  Months to
                  <br />
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

export default AboutHowItWorks;
