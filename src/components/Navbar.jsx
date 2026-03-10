import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="header" id="header">
      <div className="container header-inner">
        <Link to="/" className="logo">
          <span className="logo-text">
            <span className="logo-line1">Leafclutch</span>
            <span className="logo-line2">Technologies Pvt. Ltd.</span>
          </span>
        </Link>

        <nav className="nav">
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
            <li>
              <Link to="/courses" className="nav-link">
                Courses
              </Link>
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
      </div>
    </header>
  );
}

export default Navbar;
