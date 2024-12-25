import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="container-fluid position-relative p-0">
      <nav className="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
        <Link to="/" className="navbar-brand p-0">
          <img
            src="/img/logo.png"
            alt="Logo"
            style={{ height: "45px", width: "auto" }}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="fa fa-bars"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0">
            <Link 
              to="/" 
              className={`nav-item nav-link ${currentPath === '/' ? 'active' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`nav-item nav-link ${currentPath === '/about' ? 'active' : ''}`}
            >
              About
            </Link>
            <Link 
              to="/service" 
              className={`nav-item nav-link ${currentPath === '/service' ? 'active' : ''}`}
            >
              Services
            </Link>
            <Link 
              to="/contact" 
              className={`nav-item nav-link ${currentPath === '/contact' ? 'active' : ''}`}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;