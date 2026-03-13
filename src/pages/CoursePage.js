// src/pages/CoursePage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import courses from "../data/coursesData";

function CoursePage() {
  const { courseSlug } = useParams(); // Get the slug from URL
  const course = courses.find((c) => c.slug === courseSlug); // Find the course

  if (!course) return <h2>Course not found</h2>;

  return (
    <div className="course-page container">
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
