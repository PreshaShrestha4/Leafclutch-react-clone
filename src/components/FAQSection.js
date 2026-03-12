function FAQSection() {
  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="faq-grid">
          <div className="faq-left">
            <span className="section-badge">FAQS</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-desc">
              Everything you need to know about our training programs,
              internships, and how to get started with Leafclutch Technologies.
            </p>
          </div>
          <div className="faq-right">
            <div className="accordion">
              {/* FAQ Item 1 */}
              <div className="accordion-item active">
                <button className="accordion-header">
                  <span>What is Leafclutch Technologies?</span>
                  <i className="fas fa-plus"></i>
                </button>
                <div className="accordion-body">
                  <p>
                    Leafclutch Technologies Pvt. Ltd. is a leading IT company
                    based in Siddharthanagar, Rupandehi, Nepal. We offer
                    enterprise software solutions, AI automation, and
                    industry-focused training &amp; internship programs in
                    AI/ML, Web Development, Cybersecurity, UI/UX, and Graphic
                    Design.
                  </p>
                </div>
              </div>

              {/* FAQ Item 2 */}
              <div className="accordion-item">
                <button className="accordion-header">
                  <span>Do I need prior experience to join?</span>
                  <i className="fas fa-plus"></i>
                </button>
                <div className="accordion-body">
                  <p>
                    No prior experience is required for most beginner-level
                    programs. We design courses for all skill levels — from
                    complete beginners to advanced practitioners.
                  </p>
                </div>
              </div>

              {/* FAQ Item 3 */}
              <div className="accordion-item">
                <button className="accordion-header">
                  <span>
                    Can I join the internship online from outside Bhairahawa?
                  </span>
                  <i className="fas fa-plus"></i>
                </button>
                <div className="accordion-body">
                  <p>
                    Yes! Our online internship programs let you join from
                    anywhere in Nepal or abroad. Virtual training includes live
                    sessions, mentor support, and real project work.
                  </p>
                </div>
              </div>

              {/* FAQ Item 4 */}
              <div className="accordion-item">
                <button className="accordion-header">
                  <span>
                    Do I get a certificate after completing a program?
                  </span>
                  <i className="fas fa-plus"></i>
                </button>
                <div className="accordion-body">
                  <p>
                    Upon completion, you will receive an industry-recognized
                    certificate from Leafclutch Technologies to add to LinkedIn
                    and your resume.
                  </p>
                </div>
              </div>

              {/* FAQ Item 5 */}
              <div className="accordion-item">
                <button className="accordion-header">
                  <span>What technologies and tools will I learn?</span>
                  <i className="fas fa-plus"></i>
                </button>
                <div className="accordion-body">
                  <p>
                    Depending on your program, you'll work with Python,
                    TensorFlow, React, Node.js, MongoDB, Figma, Adobe Creative
                    Suite, Kali Linux, and many more industry-standard tools.
                  </p>
                </div>
              </div>

              {/* FAQ Item 6 */}
              <div className="accordion-item">
                <button className="accordion-header">
                  <span>How do I enroll in a program?</span>
                  <i className="fas fa-plus"></i>
                </button>
                <div className="accordion-body">
                  <p>
                    Visit our Contact page or message us on WhatsApp at
                    +977-9766715768. Our team will guide you through program
                    selection, schedule, and enrollment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
