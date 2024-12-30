import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector("#navbarCollapse");
    const navLinks = document.querySelectorAll(".nav-link");

    const handleNavLinkClick = () => {
      setIsOpen(false);
      navbarCollapse.classList.remove("show");
    };

    const handleToggle = () => {
      navbarCollapse.classList.toggle("show");
    };

    navbarToggler.addEventListener("click", handleToggle);
    navLinks.forEach((link) => {
      link.addEventListener("click", handleNavLinkClick);
    });

    return () => {
      navbarToggler.removeEventListener("click", handleToggle);
      navLinks.forEach((link) => {
        link.removeEventListener("click", handleNavLinkClick);
      });
    };
  }, [setIsOpen]);

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
          aria-expanded={isOpen}
          onClick={toggleMenu}
        >
          {isOpen ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0">
            <Link
              to="/"
              className={`nav-item nav-link ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`nav-item nav-link ${
                location.pathname === "/about" ? "active" : ""
              }`}
            >
              About
            </Link>
            <Link
              to="/service"
              className={`nav-item nav-link ${
                location.pathname === "/service" ? "active" : ""
              }`}
            >
              Services
            </Link>
            <Link
              to="/contact"
              className={`nav-item nav-link ${
                location.pathname === "/contact" ? "active" : ""
              }`}
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
