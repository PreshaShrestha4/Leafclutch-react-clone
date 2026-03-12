import React from "react";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

function Navbar() {
  return (
    <header className="header" id="header">
      <div className="container header-inner">
        {/* Logo */}
        <Link to="/" className="logo">
          <span className="logo-text">
            <span className="logo-line1">Leafclutch</span>
            <span className="logo-line2">Technologies Pvt. Ltd.</span>
          </span>
        </Link>

        {/* Navigation */}
        <nav className="nav" id="nav">
          <ul className="nav-menu">
            <li>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>

            <li>
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>

            {/* Courses dropdown */}
            <li className="has-dropdown">
              {/* Main pointer goes to Courses page */}
              <Link to="/courses" className="nav-link active">
                Courses <FaChevronDown className="nav-arrow" />
              </Link>

              {/* Dropdown items go to specific courses */}
              <ul className="dropdown">
                <li>
                  <Link to="/courses/ai-machine-learning">
                    AI & Machine Learning
                  </Link>
                </li>
                <li>
                  <Link to="/courses/web-development">Web Development</Link>
                </li>
                <li>
                  <Link to="/courses/cybersecurity">Cybersecurity</Link>
                </li>
                <li>
                  <Link to="/courses/ui-ux-design">UI/UX Design</Link>
                </li>
                <li>
                  <Link to="/courses/graphic-designing">Graphic Designing</Link>
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

        {/* Header buttons */}
        <div className="header-actions">
          <Link to="/contact" className="btn btn-login">
            Get in Touch
          </Link>
          <Link to="/courses" className="btn btn-signup">
            Explore Courses
          </Link>
        </div>

        {/* Hamburger */}
        <button className="hamburger" id="hamburger" aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
