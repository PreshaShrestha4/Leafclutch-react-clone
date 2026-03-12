import { Link } from "react-router-dom";

function ContactHero() {
  return (
    <section className="page-hero">
      <div className="container">
        <span className="section-badge reveal visible">CONTACT US</span>

        <h1 className="section-title reveal visible">
          Let's Start a Conversation
        </h1>

        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link to="/">HOME</Link>
          <span className="breadcrumb-separator">&gt;</span>
          <span className="breadcrumb-current">CONTACT</span>
        </nav>

        <p className="section-desc reveal">
          Have a question about our programs or want to partner with us? We'd
          love to hear from you.
        </p>
      </div>
    </section>
  );
}

export default ContactHero;
