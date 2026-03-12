import React from "react";

function StatsSection() {
  const stats = [
    { number: "6+", label: "Tech Tracks Available" },
    { number: "3", label: "Month Program Duration" },
    { number: "3", label: "Certificates Provided" },
    { number: "24/7", label: "Mentor Support" },
  ];

  return (
    <section className="about-stats-section">
      <div className="container">
        <div className="about-stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="about-stat-item reveal visible">
              <div className="about-stat-number">
                <span data-count={stat.number}>{stat.number}</span>
              </div>
              <div className="about-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
