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
                  {/* <img
                    className="flex-shrink-0 rounded-circle"
                    src="img/testimonial-1.jpg"
                    style={{ width: "70px", height: "70px" }}
                    alt=""
                  /> */}
                  <div className="ms-4">
                    <h5 className="mb-1">Kenestores</h5>
                    <span>Electronics eCommerce site</span>
                  </div>
                </div>
                <p className="mb-0">
                  "Partnering with Tangitex Technologies to develop our
                  e-commerce platform was a transformative experience. Their
                  expertise in web design and commitment to understanding our
                  unique needs resulted in a user-friendly, visually appealing,
                  and highly functional website. Since the launch, we've
                  observed a significant increase in customer engagement and
                  sales. The team's professionalism and attention to detail
                  exceeded our expectations, making them a highly recommended
                  choice for businesses seeking top-notch e-commerce solutions."
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="testimonial-item bg-light rounded p-4">
                <div className="d-flex align-items-center mb-4">
                  {/* <img
                    className="flex-shrink-0 rounded-circle"
                    src="img/testimonial-2.jpg"
                    style={{ width: "70px", height: "70px" }}
                    alt=""
                  /> */}
                  <div className="ms-4">
                    <h5 className="mb-1">Coursify</h5>
                    <span>Educational App</span>
                  </div>
                </div>
                <p className="mb-0">
                  Collaborating with Tangitex Technologies on our educational website was
                  a seamless experience. Their professionalism and attention to
                  detail resulted in a platform that exceeded our expectations.
                  The website's design is both intuitive and visually appealing,
                  enhancing our educational outreach. We highly recommend Tangitex Technologies for digital services
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
