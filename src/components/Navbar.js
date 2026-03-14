// src/components/Navbar.jsx
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const goToCourses = () => {
    navigate("/");
    setTimeout(() => {
      const section = document.getElementById("courses");
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <header className="header" id="header">
      <div className="container header-inner">
        {/* Logo */}
        <NavLink to="/" className="logo">
          <span className="logo-text">
            <span className="logo-line1">Leafclutch</span>
            <span className="logo-line2">Technologies Pvt. Ltd.</span>
          </span>
        </NavLink>

        {/* Navigation */}
        <nav className={`nav ${menuOpen ? "nav-open" : ""}`}>
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

            {/* Courses dropdown */}
            <li className={`has-dropdown ${dropdownOpen ? "open" : ""}`}>
              <div
                className="nav-link dropdown-toggle"
                onClick={toggleDropdown}
              >
                <span className="nav-link" onClick={goToCourses}>
                  Courses
                </span>
                <FaChevronDown className="nav-arrow" onClick={toggleDropdown} />
              </div>

              <ul className="dropdown">
                <li>
                  <NavLink to="/courses/ai-machine-learning">
                    AI & Machine Learning
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/courses/web-development">
                    Web Development
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/courses/cybersecurity">Cybersecurity</NavLink>
                </li>
                <li>
                  <NavLink to="/courses/ui-ux-design">UI/UX Design</NavLink>
                </li>
                <li>
                  <NavLink to="/courses/graphic-designing">
                    Graphic Designing
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/courses/data-science">Data Science</NavLink>
                </li>
              </ul>
            </li>

            {/* Contact menu item */}
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

          <button onClick={goToCourses} className="btn btn-signup">
            Explore Courses
          </button>
        </div>

        {/* Hamburger */}
        <button
          className={`hamburger ${menuOpen ? "is-active" : ""}`}
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
