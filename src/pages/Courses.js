function Courses() {
  return (
    <section className="courses container">
      <h2>Our Courses</h2>
      <div className="course-list">
        {/* Copy course cards HTML from original site */}
        <div className="course-card">
          <h3>Web Development</h3>
          <p>Learn HTML, CSS, JavaScript and React.</p>
        </div>
        <div className="course-card">
          <h3>Data Science</h3>
          <p>Learn Python, Machine Learning, and AI.</p>
        </div>
      </div>
    </section>
  );
}

export default Courses;
