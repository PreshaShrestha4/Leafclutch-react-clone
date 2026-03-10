import React, { useState } from "react";
import { Link } from "react-router-dom";
// import "./Header.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="header" id="header">
      <div className="container header-inner">
        <Link to="/" className="logo">
          <span className="logo-text">
            <span className="logo-line1">Leafclutch</span>
            <span className="logo-line2">Technologies Pvt. Ltd.</span>
          </span>
        </Link>

        <nav className={`nav ${isOpen ? "open" : ""}`} id="nav">
          <ul className="nav-menu">
            <li>
              <Link to="/" className="nav-link active">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="has-dropdown">
              <span className="nav-link">
                Courses <i className="fas fa-chevron-down nav-arrow"></i>
              </span>
              <ul className="dropdown">
                <li>
                  <Link to="/courses/ai-ml">AI & Machine Learning</Link>
                </li>
                <li>
                  <Link to="/courses/web-dev">Web Development</Link>
                </li>
                <li>
                  <Link to="/courses/cybersecurity">Cybersecurity</Link>
                </li>
                <li>
                  <Link to="/courses/ui-ux">UI/UX Design</Link>
                </li>
                <li>
                  <Link to="/courses/graphic-design">Graphic Designing</Link>
                </li>
                <li>
                  <Link to="/courses/data-science">Data Science</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <Link to="/contact" className="btn btn-login">
            Get in Touch
          </Link>
          <Link to="/courses" className="btn btn-signup">
            Explore Courses
          </Link>
        </div>

        <button
          className="hamburger"
          id="hamburger"
          aria-label="Toggle menu"
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
