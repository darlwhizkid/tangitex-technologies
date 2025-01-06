import React, { useEffect } from "react";
import { Carousel } from "bootstrap";
import { Link } from "react-router-dom";

const Hero = () => {
  useEffect(() => {
    const carousel = new Carousel("#header-carousel", {
      interval: 6000,
      ride: "carousel",
      touch: true,
      pause: "hover"
    });

    return () => {
      carousel.dispose();
    };
  }, []);

  const scrollToQuote = (e) => {
    e.preventDefault();
    const quoteSection = document.getElementById('quote');
    quoteSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="container-fluid position-relative p-0">
      <div
        id="header-carousel"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="w-100" src="/img/carousel-1.jpg" alt="Carousel" />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3" style={{ maxWidth: "900px" }}>
                <h5 className="text-white text-uppercase mb-3 animated slideInDown">
                  Welcome to Tangitex
                </h5>
                <h1 className="display-1 text-white mb-md-4 animated zoomIn">
                  Inspiring & Innovative Digital Solution
                </h1>
                <a
                  onClick={scrollToQuote}
                  href="#quote"
                  className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                >
                  Free Quote
                </a>
                <Link
                  to="/contact"
                  className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img className="w-100" src="/img/carousel-2.jpg" alt="Carousel" />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3" style={{ maxWidth: "900px" }}>
                <h5 className="text-white text-uppercase mb-3 animated slideInDown">
                  YOU ARE AT THE RIGHT DESTINATION
                </h5>
                <h1 className="display-1 text-white mb-md-4 animated zoomIn">
                  Inspiring & Innovative Digital Solution
                </h1>
                <a
                  onClick={scrollToQuote}
                  href="#quote"
                  className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                >
                  Free Quote
                </a>
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
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#header-carousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#header-carousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Hero;