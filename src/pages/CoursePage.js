import React from "react";
import { useParams } from "react-router-dom";
import CourseHero from "../components/CourseHero";

function CoursePage() {
  const { courseId } = useParams(); // e.g., ai-machine-learning

  // Convert URL slug to readable course name
  const courseName = courseId
    .split("-")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div>
      <CourseHero courseName={courseName} />
      {/* Add other sections like syllabus, instructors, reviews here */}
    </div>
  );
}

export default CoursePage;
