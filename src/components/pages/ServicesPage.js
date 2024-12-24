import React from "react";
import { Link } from "react-router-dom";
import Footer from "../layout/Footer";

const ServicesPage = () => {
  return (
    <>
      <div className="container-fluid position-relative p-0">
        <div className="container-fluid bg-dark py-5 bg-header" style={{ marginBottom: "90px" }}>
          <div className="row py-5">
            <div className="col-12 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-4 text-white animated zoomIn">Services</h1>
              <Link to="/" className="h5 text-white">Home</Link>
              <i className="far fa-circle text-white px-2"></i>
              <Link to="/service" className="h5 text-white">Services</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Service Start */}
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: "600px" }}>
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
                  Amet justo dolor lorem kasd amet magna sea stet eos vero lorem
                  ipsum dolore sed
                </p>
                <a className="btn btn-lg btn-primary rounded" href="">
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
                  Amet justo dolor lorem kasd amet magna sea stet eos vero lorem
                  ipsum dolore sed
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
                  Amet justo dolor lorem kasd amet magna sea stet eos vero lorem
                  ipsum dolore sed
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
                  Amet justo dolor lorem kasd amet magna sea stet eos vero lorem
                  ipsum dolore sed
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
                  Amet justo dolor lorem kasd amet magna sea stet eos vero lorem
                  ipsum dolore sed
                </p>
                <a className="btn btn-lg btn-primary rounded" href="">
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
              <div className="position-relative bg-dark rounded h-100 d-flex flex-column align-items-center justify-content-center text-center p-5">
                <h3 className="text-white mb-3">Call Us For A Free Quote</h3>
                <p className="text-white mb-3">
                  Clita ipsum magna kasd rebum at ipsum amet dolor justo dolor est
                  magna stet eirmod
                </p>
                <h2 className="text-white mb-0">+012 345 6789</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Start */}
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="section-title text-center position-relative pb-3 mb-4 mx-auto" style={{ maxWidth: "600px" }}>
            <h5 className="fw-bold text-blue text-uppercase">Testimonial</h5>
            <h1 className="mb-0">What Our Clients Say About Our Services</h1>
          </div>
          <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.6s">
            <div className="testimonial-item bg-light my-4">
              <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                <img
                  className="img-fluid rounded"
                  src="/img/testimonial-1.jpg"
                  style={{ width: "60px", height: "60px" }}
                  alt="Testimonial 1"
                />
                <div className="ps-4">
                  <h4 className="text-blue mb-1">Client Name</h4>
                  <small className="text-uppercase">Profession</small>
                </div>
              </div>
              <div className="pt-4 pb-5 px-5">
                Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor
                stet amet eirmod eos labore diam
              </div>
            </div>

            <div className="testimonial-item bg-light my-4">
              <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                <img
                  className="img-fluid rounded"
                  src="/img/testimonial-2.jpg"
                  style={{ width: "60px", height: "60px" }}
                  alt="Testimonial 2"
                />
                <div className="ps-4">
                  <h4 className="text-blue mb-1">KeneStores</h4>
                  <small className="text-uppercase">Profession</small>
                </div>
              </div>
              <div className="pt-4 pb-5 px-5">
                Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor
                stet amet eirmod eos labore diam
              </div>
            </div>

            <div className="testimonial-item bg-light my-4">
              <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                <img
                  className="img-fluid rounded"
                  src="/img/testimonial-3.jpg"
                  style={{ width: "60px", height: "60px" }}
                  alt="Testimonial 3"
                />
                <div className="ps-4">
                  <h4 className="text-blue mb-1">Mayo's Place</h4>
                  <small className="text-uppercase">Profession</small>
                </div>
              </div>
              <div className="pt-4 pb-5 px-5">
                Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor
                stet amet eirmod eos labore diam
              </div>
            </div>

            <div className="testimonial-item bg-light my-4">
              <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                <img
                  className="img-fluid rounded"
                  src="/img/testimonial-4.jpg"
                  style={{ width: "60px", height: "60px" }}
                  alt="Testimonial 4"
                />
                <div className="ps-4">
                  <h4 className="text-blue mb-1">Client Name</h4>
                  <small className="text-uppercase">Profession</small>
                </div>
              </div>
              <div className="pt-4 pb-5 px-5">
                Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor
                stet amet eirmod eos labore diam
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ServicesPage;
