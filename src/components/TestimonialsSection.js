function TestimonialsSection() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="testimonials-header">
          <span className="section-badge">TESTIMONIALS</span>
          <h2 className="section-title">What Our Students Say</h2>
          <p className="section-desc">
            Hear from students and professionals who have transformed their
            careers through our programs.
          </p>
        </div>
        <div className="testimonials-slider">
          <div className="testimonials-track" id="testimonials-track">
            {/* Testimonial 1 */}
            <div className="testimonial-card">
              <div className="testimonial-content">
                <div className="testimonial-stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <p>
                  "The AI &amp; ML course at Leafclutch was exactly what I
                  needed. The hands-on projects and mentor support helped me
                  land my first job as a data analyst in Kathmandu."
                </p>
              </div>
              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  <i className="fas fa-user"></i>
                </div>
                <div>
                  <h4>Priya Sharma</h4>
                  <span>DATA ANALYST</span>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="testimonial-card">
              <div className="testimonial-content">
                <div className="testimonial-stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <p>
                  "As someone from Butwal, having a quality tech training centre
                  nearby was a game changer. The web development bootcamp gave
                  me skills that are in demand everywhere."
                </p>
              </div>
              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  <i className="fas fa-user"></i>
                </div>
                <div>
                  <h4>Rajesh Adhikari</h4>
                  <span>WEB DEVELOPER</span>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="testimonial-card">
              <div className="testimonial-content">
                <div className="testimonial-stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <p>
                  "The online internship program was flexible and professional.
                  I could learn cybersecurity from my home in Pokhara while
                  getting mentored by industry experts."
                </p>
              </div>
              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  <i className="fas fa-user"></i>
                </div>
                <div>
                  <h4>Sarina Thapa</h4>
                  <span>CYBERSECURITY INTERN</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
