import React from "react";
import CourseBreadcrumb from "./CourseBreadcrumb";

function CourseHeader({ courseName, description }) {
  return (
    <section className="course-header">
      <div className="container">
        {/* Badge */}
        <span className="section-badge reveal visible">OUR PROGRAMS</span>

        {/* Section Title */}
        <h1 className="section-title reveal visible">{courseName}</h1>

        {/* Breadcrumb */}
        <CourseBreadcrumb courseName={courseName} />

        {/* Description */}
        <p className="section-desc reveal">
          {description ||
            "Industry-focused courses designed to build real-world skills. Choose your path and start your tech career with Leafclutch Technologies."}
        </p>
      </div>
    </section>
  );
}

export default CourseHeader;
