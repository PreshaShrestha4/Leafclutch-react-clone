// src/pages/CoursePage.jsx
import React from "react";
import { Link, useParams } from "react-router-dom";
import courses from "../data/coursesData";

function CoursePage() {
  const { courseSlug } = useParams();
  const course = courses.find((c) => c.slug === courseSlug);

  if (!course) return <h2>Course not found</h2>;

  return (
    <div className="course-page container">
      {/* Breadcrumb */}
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link to="/">HOME</Link>
        <span className="breadcrumb-separator"> &gt; </span>
        <Link to="/courses">COURSES</Link>
        <span className="breadcrumb-separator"> &gt; </span>
        <span className="breadcrumb-current">{course.title}</span>
      </nav>

      <h1>{course.title}</h1>
      <img src={course.image} alt={course.title} />
      <p>{course.description}</p>
      <p>
        <strong>Duration:</strong> {course.duration}
      </p>
      <p>
        <strong>Level:</strong> {course.level}
      </p>
    </div>
  );
}

export default CoursePage;
