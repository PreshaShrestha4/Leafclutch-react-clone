// src/components/Navbar.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <header className="header" id="header">
      <div className="container header-inner">
        <NavLink to="/" className="logo">
          <span className="logo-text">
            <span className="logo-line1">Leafclutch</span>
            <span className="logo-line2">Technologies Pvt. Ltd.</span>
          </span>
        </NavLink>

        {/* Navigation */}
        <nav className={`nav ${menuOpen ? "nav-open" : ""}`} id="nav">
          <ul className="nav-menu">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                onClick={() => setMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                onClick={() => setMenuOpen(false)}
              >
                About
              </NavLink>
            </li>

            {/* Courses Dropdown */}
            <li className={`has-dropdown ${dropdownOpen ? "open" : ""}`}>
              <div
                className="nav-link dropdown-toggle"
                onClick={toggleDropdown}
              >
                Courses <FaChevronDown className="nav-arrow" />
              </div>
              <ul className="dropdown">
                <li>
                  <NavLink
                    to="/courses/ai-machine-learning"
                    className={({ isActive }) => (isActive ? "active" : "")}
                    onClick={() => setMenuOpen(false)}
                  >
                    AI & Machine Learning
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/courses/web-development"
                    className={({ isActive }) => (isActive ? "active" : "")}
                    onClick={() => setMenuOpen(false)}
                  >
                    Web Development
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/courses/cybersecurity"
                    className={({ isActive }) => (isActive ? "active" : "")}
                    onClick={() => setMenuOpen(false)}
                  >
                    Cybersecurity
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/courses/ui-ux-design"
                    className={({ isActive }) => (isActive ? "active" : "")}
                    onClick={() => setMenuOpen(false)}
                  >
                    UI/UX Design
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/courses/graphic-designing"
                    className={({ isActive }) => (isActive ? "active" : "")}
                    onClick={() => setMenuOpen(false)}
                  >
                    Graphic Designing
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/courses/data-science"
                    className={({ isActive }) => (isActive ? "active" : "")}
                    onClick={() => setMenuOpen(false)}
                  >
                    Data Science
                  </NavLink>
                </li>
              </ul>
            </li>

            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Header Buttons */}
        <div className="header-actions">
          <NavLink to="/contact" className="btn btn-login">
            Get in Touch
          </NavLink>
          <NavLink to="/courses" className="btn btn-signup">
            Explore Courses
          </NavLink>
        </div>

        {/* Hamburger */}
        <button
          className={`hamburger ${menuOpen ? "is-active" : ""}`}
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

export default Navbar;
