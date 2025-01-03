import React, { useEffect } from "react";
import { Carousel } from "bootstrap";

const Testimonial = () => {
  useEffect(() => {
    const testimonialCarousel = new Carousel("#testimonialCarousel", {
      interval: 3000,
      ride: "carousel",
      wrap: true,
      touch: true,
    });

    return () => {
      testimonialCarousel.dispose();
    };
  }, []);

  return (
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container py-5">
        <div
          className="section-title text-center position-relative pb-3 mb-4 mx-auto"
          style={{ maxWidth: "600px" }}
        >
          <h5 className="fw-bold text-primary text-uppercase">Testimonial</h5>
          <h1 className="mb-0">
            What Our Clients Say About Our Digital Services
          </h1>
        </div>
        <div
          id="testimonialCarousel"
          className="carousel slide testimonial-carousel"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="testimonial-item bg-light rounded p-4">
                <div className="d-flex align-items-center mb-4">
                  <img
                    className="flex-shrink-0 rounded-circle"
                    src="img/testimonial-1.jpg"
                    style={{ width: "70px", height: "70px" }}
                    alt=""
                  />
                  <div className="ms-4">
                    <h5 className="mb-1">Kenestores</h5>
                    <span>Electronic eCommerce site</span>
                  </div>
                </div>
                <p className="mb-0">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit
                  diam amet diam et eos. Clita erat ipsum et lorem et sit.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="testimonial-item bg-light rounded p-4">
                <div className="d-flex align-items-center mb-4">
                  <img
                    className="flex-shrink-0 rounded-circle"
                    src="img/testimonial-2.jpg"
                    style={{ width: "70px", height: "70px" }}
                    alt=""
                  />
                  <div className="ms-4">
                    <h5 className="mb-1">Second Client</h5>
                    <span>Profession</span>
                  </div>
                </div>
                <p className="mb-0">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit
                  diam amet diam et eos. Clita erat ipsum et lorem et sit.
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon bg-primary rounded-circle"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon bg-primary rounded-circle"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
