import React from "react";
import { Link } from "react-router-dom";

function CourseHero({ courseName, description }) {
  return (
    <div className="container">
      {/* Badge */}
      <span className="section-badge reveal visible">OUR PROGRAMS</span>

      {/* Section Title */}
      <h1 className="section-title reveal visible">{courseName}</h1>

      {/* Breadcrumb */}
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link to="/">HOME</Link>
        <span className="breadcrumb-separator">&gt;</span>

        <Link to="/courses">COURSES</Link>
        <span className="breadcrumb-separator">&gt;</span>

        <span className="breadcrumb-current">{courseName}</span>
      </nav>

      {/* Description */}
      <p className="section-desc reveal">
        {description ||
          "Industry-focused courses designed to build real-world skills. Choose your path and start your tech career with Leafclutch Technologies."}
      </p>
    </div>
  );
}

export default CourseHero;
