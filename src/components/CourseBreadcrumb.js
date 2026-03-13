import React from "react";
import { Link } from "react-router-dom";

function CourseBreadcrumb({ courseName }) {
  return (
    <section className="course-breadcrumb-bar">
      <div className="container">
        <nav aria-label="Breadcrumb">
          <Link to="/">HOME</Link>

          <span className="breadcrumb-separator"> &gt; </span>

          <Link to="/courses">COURSES</Link>

          {courseName && (
            <>
              <span className="breadcrumb-separator"> &gt; </span>
              <span className="breadcrumb-current">{courseName}</span>
            </>
          )}
        </nav>
      </div>
    </section>
  );
}

export default CourseBreadcrumb;
