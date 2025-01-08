import React, { useState} from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://tangitex.onrender.com/api/v1/user/newsletter",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );
      if (response.ok) {
        setEmail("");
        alert("Thank you for subscribing!");
      } else {
        console.log("Subscription failed");
      }
    } catch (error) {
      console.log('Error details:', error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <>
      <div
        className="container-fluid bg-dark text-light mt-5 wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-4 col-md-6 footer-about">
              <div className="d-flex flex-column align-items-center justify-content-center text-center h-100 bg-mild p-4">
                <Link to="/" className="navbar-brand">
                  <img
                    src="/img/logo1.png"
                    alt="Logo"
                    style={{ height: "60px", width: "auto" }}
                  />
                </Link>
                <p className="mt-3 mb-4">
                  "Join our growing community of digital innovators and stay
                  ahead of the curve. Get exclusive insights, tech updates, and
                  industry best practices delivered straight to your inbox.
                  Subscribe now to power your digital journey with Tangitex's
                  expert knowledge and latest solutions."
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="input-group">
                    <input
                      type="email"
                      className="form-control border-white p-3"
                      placeholder="Your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <button type="submit" className="btn btn-dark">
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-8 col-md-6">
              <div className="row gx-5">
                <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                  <div className="section-title section-title-sm position-relative pb-3 mb-4">
                    <h3 className="text-light mb-0">Quick Links</h3>
                  </div>
                  <div className="link-animated d-flex flex-column justify-content-start">
                    <Link className="text-light mb-2" to="/">
                      <i className="bi bi-arrow-right text-primary me-2"></i>
                      Home
                    </Link>
                    <Link className="text-light mb-2" to="/about">
                      <i className="bi bi-arrow-right text-primary me-2"></i>
                      About Us
                    </Link>
                    <Link className="text-light mb-2" to="/service">
                      <i className="bi bi-arrow-right text-primary me-2"></i>Our
                      Services
                    </Link>
                    <Link className="text-light" to="/contact">
                      <i className="bi bi-arrow-right text-primary me-2"></i>
                      Contact Us
                    </Link>
                    <div className="d-flex mt-4">
                      <a
                        className="btn btn-primary btn-square me-2"
                        href="twitter.com/tangitex_tech"
                      >
                        <i className="fab fa-twitter fw-normal"></i>
                      </a>
                      <a
                        className="btn btn-primary btn-square me-2"
                        href="https://www.instagram.com/tangitex.solutions"
                      >
                        <i className="fab fa-instagram fw-normal"></i>
                      </a>
                      <a
                        className="btn btn-primary btn-square me-2"
                        href="https://www.linkedin.com/in/tangitex-nigeria-066187233"
                      >
                        <i className="fab fa-linkedin-in fw-normal"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid text-white"
        style={{ background: "#010e22" }}
      >
        <div className="container text-center">
          <div className="row justify-content-end">
            <div className="col-lg-8 col-md-6">
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ height: "75px" }}
              >
                <p className="mb-0">
                  ©{" "}
                  <Link className="text-white border-bottom" to="/">
                    Tangitex Technologies
                  </Link>
                  | All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
