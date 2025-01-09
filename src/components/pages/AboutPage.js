import React from "react";
import { Link } from "react-router-dom";
import Footer from "../layout/Footer";

const AboutPage = () => {
  return (
    <>
      <div className="container-fluid position-relative p-0">
        <div
          className="container-fluid bg-dark py-5 bg-header"
          style={{ marginBottom: "90px" }}
        >
          <div className="row py-5">
            <div className="col-12 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-4 text-white animated zoomIn">About Us</h1>
              <Link to="/" className="h5 text-white">
                Home
              </Link>
              <i className="far fa-circle text-white px-2"></i>
              <Link to="/about" className="h5 text-white">
                About
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* About Start */}
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-7">
              <div className="section-title position-relative pb-3 mb-5">
                <h5 className="fw-bold text-blue text-uppercase">Who We Are</h5>
                <h1 className="mb-0">
                  The Best IT Solution With Innovation and Inspiration
                </h1>
              </div>
              <p className="mb-4">
                Our team's industry-leading expertise, innovative approach,
                personalized service, commitment to quality, and reliable track
                record set us apart and enable us to consistently deliver
                exceptional results for our clients.
              </p>
              <div className="row g-0 mb-3">
                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                  <h5 className="mb-3">
                    <i className="fa fa-check text-blue me-3"></i>Innovative
                  </h5>
                  <h5 className="mb-3">
                    <i className="fa fa-check text-blue me-3"></i>Professional
                    Staff
                  </h5>
                </div>
                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                  <h5 className="mb-3">
                    <i className="fa fa-check text-blue me-3"></i>24/7 Support
                  </h5>
                  <h5 className="mb-3">
                    <i className="fa fa-check text-blue me-3"></i>Fair Prices
                  </h5>
                </div>
              </div>
              <div
                className="d-flex align-items-center mb-4 wow fadeIn"
                data-wow-delay="0.6s"
              >
              </div>
              <Link
                to="/quote"
                className="btn btn-primary py-3 px-5 mt-3 wow zoomIn"
                data-wow-delay="0.9s"
              >
                Request A Quote
              </Link>
            </div>
            <div className="col-lg-5" style={{ minHeight: "500px" }}>
              <div className="position-relative h-100">
                <img
                  className="position-absolute w-100 h-100 rounded wow zoomIn"
                  data-wow-delay="0.9s"
                  src="/img/about.jpg"
                  style={{ objectFit: "cover" }}
                  alt="About"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Start */}
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div
            className="section-title text-center position-relative pb-3 mb-5 mx-auto"
            style={{ maxWidth: "600px" }}
          >
            <h5 className="fw-bold text-blue text-uppercase">Why Choose Us</h5>
            <h1 className="mb-0">
              We Are Here to Make Your Business Stand Out
            </h1>
          </div>
          <div className="row g-5">
            <div className="col-lg-4">
              <div className="row g-5">
                <div className="col-12 wow zoomIn" data-wow-delay="0.2s">
                  <div
                    className="bg-dark rounded d-flex align-items-center justify-content-center mb-3"
                    style={{ width: "60px", height: "60px" }}
                  >
                    <i className="fa fa-cubes text-white"></i>
                  </div>
                  <h4>Latest Trends</h4>
                  <p className="mb-0">
                    Our team stays at the forefront of industry trends and
                    developments, allowing us to provide innovative solutions
                    that keep our clients ahead of the curve.
                  </p>
                </div>
                <div className="col-12 wow zoomIn" data-wow-delay="0.6s">
                  <div
                    className="bg-dark rounded d-flex align-items-center justify-content-center mb-3"
                    style={{ width: "60px", height: "60px" }}
                  >
                    <i className="fa fa-award text-white"></i>
                  </div>
                  <h4>Just How it Suits you</h4>
                  <p className="mb-0">
                    We take the time to deeply understand your unique goals and
                    challenges, enabling us to design customized solutions that
                    perfectly fit your specific needs.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 wow zoomIn"
              data-wow-delay="0.9s"
              style={{ minHeight: "350px" }}
            >
              <div className="position-relative h-100">
                <img
                  className="position-absolute w-100 h-100 rounded wow zoomIn"
                  data-wow-delay="0.1s"
                  src="/img/feature.jpg"
                  style={{ objectFit: "cover" }}
                  alt="Feature"
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="row g-5">
                <div className="col-12 wow zoomIn" data-wow-delay="0.4s">
                  <div
                    className="bg-dark rounded d-flex align-items-center justify-content-center mb-3"
                    style={{ width: "60px", height: "60px" }}
                  >
                    <i className="fa fa-users-cog text-white"></i>
                  </div>
                  <h4>Professional Staff</h4>
                  <p className="mb-0">
                    Our team is composed of highly skilled and experienced
                    professionals who are experts in their respective fields,
                    ensuring the highest level of service and quality.
                  </p>
                </div>
                <div className="col-12 wow zoomIn" data-wow-delay="0.8s">
                  <div
                    className="bg-dark rounded d-flex align-items-center justify-content-center mb-3"
                    style={{ width: "60px", height: "60px" }}
                  >
                    <i className="fa fa-phone-alt text-white"></i>
                  </div>
                  <h4>24/7 Support</h4>
                  <p className="mb-0">
                    We provide reliable 24/7 support to our clients, ensuring
                    that any questions or concerns are addressed promptly and
                    efficiently.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;