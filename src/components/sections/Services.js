import React from "react";
import {Link} from "react-router-dom";

const Services = () => {
  return (
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container py-5">
        <div
          className="section-title text-center position-relative pb-3 mb-5 mx-auto"
          style={{ maxWidth: "600px" }}
        >
          <h5 className="fw-bold text-blue text-uppercase">Our Services</h5>
          <h1 className="mb-0">IT Solutions To Suit Your Very Needs</h1>
        </div>
        <div className="row g-5">
          <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
            <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
              <div className="service-icon">
                <i className="fa fa-shield-alt text-white"></i>
              </div>
              <h4 className="mb-3">Graphic Design</h4>
              <p className="m-0">
                We create stunning visual designs and branding solutions to help
                your business stand out in the digital landscape
              </p>
              <a
                className="btn btn-lg btn-primary rounded position-absolute bottom-0 end-0 m-4"
                href=""
              >
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
            <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
              <div className="service-icon">
                <i className="fa fa-chart-pie text-white"></i>
              </div>
              <h4 className="mb-3">Technical Support</h4>
              <p className="m-0">
                "24/7 expert IT support and maintenance services to keep your
                systems running smoothly and minimize downtime"
              </p>
              <a className="btn btn-lg btn-primary rounded" href="">
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
            <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
              <div className="service-icon">
                <i className="fa fa-code text-white"></i>
              </div>
              <h4 className="mb-3">Web Development</h4>
              <p className="m-0">
                "Custom website development using cutting-edge technologies to
                deliver responsive, user-friendly digital experiences"
              </p>
              <a className="btn btn-lg btn-primary rounded" href="">
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
            <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
              <div className="service-icon">
                <i className="fab fa-android text-white"></i>
              </div>
              <h4 className="mb-3">Apps Development</h4>
              <p className="m-0">
                "Building innovative mobile applications for iOS and Android
                that engage users and drive business growth"
              </p>
              <a className="btn btn-lg btn-primary rounded" href="">
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
            <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
              <div className="service-icon">
                <i className="fa fa-search text-white"></i>
              </div>
              <h4 className="mb-3">SEO Optimization</h4>
              <p className="m-0">
                "Strategic search engine optimization to improve your online
                visibility and drive organic traffic to your website"
              </p>
              <a className="btn btn-lg btn-primary rounded" href="">
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
            <div className="position-relative bg-dark rounded h-100 d-flex flex-column align-items-center justify-content-center text-center p-5">
              <h3 className="text-white mb-3">
                Satisfied? Request A Quote Below
              </h3>
              <p className="text-white mb-3">
                Still need a specific service and have an enquiry? Contact us by
                clicking on the link
              </p>
              <Link
                to="/contact"
                className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
