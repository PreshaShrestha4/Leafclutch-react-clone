import React from "react";
import {
  FaStar,
  FaUserTie,
  FaBuilding,
  FaCalendarAlt,
  FaNetworkWired,
  FaAward,
} from "react-icons/fa";

function EnrollPerks() {
  return (
    <section className="enroll-perks-section">
      <div className="container">
        <div className="enroll-perks-grid">
          <div className="enroll-perks-content reveal-left reveal visible">
            <span className="section-badge reveal visible">
              AFTER YOU ENROLL
            </span>
            <h2 className="section-title reveal visible">
              What You Get From Day 1
            </h2>
            <p className="section-desc reveal visible">
              The moment you enroll, you unlock everything you need to kickstart
              your tech career — no waiting.
            </p>
          </div>

          <div className="enroll-perks-list reveal-right reveal visible">
            <div className="perk-item perk-item--highlight">
              <div className="perk-icon">
                <FaStar />
              </div>
              <div>
                <h4>Lifetime Udemy Course</h4>
                <p>
                  Get a premium Udemy course related to your chosen training
                  track — yours to keep forever.
                </p>
              </div>
            </div>

            <div className="perk-item">
              <div className="perk-icon">
                <FaUserTie />
              </div>
              <div>
                <h4>Dedicated Mentor Support</h4>
                <p>
                  Get assigned a personal mentor who guides you through every
                  step of your learning journey.
                </p>
              </div>
            </div>

            <div className="perk-item">
              <div className="perk-icon">
                <FaBuilding />
              </div>
              <div>
                <h4>Real Company Workflow Experience</h4>
                <p>
                  Understand how companies operate — from project planning to
                  delivery using industry tools.
                </p>
              </div>
            </div>

            <div className="perk-item">
              <div className="perk-icon">
                <FaCalendarAlt />
              </div>
              <div>
                <h4>1 Month Training + 2 Months Internship</h4>
                <p>
                  Intensive training in month 1, followed by hands-on internship
                  opportunity in months 2 &amp; 3.
                </p>
              </div>
            </div>

            <div className="perk-item">
              <div className="perk-icon">
                <FaNetworkWired />
              </div>
              <div>
                <h4>Connections &amp; Exposure</h4>
                <p>
                  Build your professional network, meet industry mentors, and
                  gain real-world exposure.
                </p>
              </div>
            </div>

            <div className="perk-item">
              <div className="perk-icon">
                <FaAward />
              </div>
              <div>
                <h4>Job Offer for Top Performers</h4>
                <p>
                  Best-performing candidates receive direct job offers — no
                  external interview required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EnrollPerks;
