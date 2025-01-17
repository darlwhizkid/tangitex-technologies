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
                    <h5 className="mb-1">Kaycee Lightings</h5>
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
          <div className="carousel-item">
            <div className="testimonial-item bg-light rounded p-4">
              <div className="d-flex align-items-center mb-4">
                <div className="ms-4">
                  <h5 className="mb-1">Wigsnstuff</h5>
                  <span>Fashion eCommerce site</span>
                </div>
              </div>
              <p className="mb-0">
                "Working with Tangitex Technologies to create our wig and hair accessories 
                eCommerce platform was an excellent decision. Their team delivered a 
                stunning website that perfectly showcases our products and makes shopping 
                easy for our customers. The seamless checkout process and beautiful 
                product displays have significantly boosted our online sales. Their 
                understanding of fashion eCommerce needs and technical expertise made 
                the entire development process smooth and successful."
              </p>
            </div>
          </div>

          <div className="carousel-item">
            <div className="testimonial-item bg-light rounded p-4">
              <div className="d-flex align-items-center mb-4">
                <div className="ms-4">
                  <h5 className="mb-1">Direct Energy</h5>
                  <span>Energy Solutions Company</span>
                </div>
              </div>
              <p className="mb-0">
                "Tangitex Technologies transformed our digital presence with a sophisticated 
                and user-friendly website. Their team developed an intuitive platform that 
                allows our customers to easily manage their energy accounts, view consumption 
                data, and access important services. The integration of real-time analytics 
                and responsive design has greatly improved our customer engagement and 
                operational efficiency. Their expertise in creating enterprise-level 
                solutions made them the perfect partner for our digital transformation."
              </p>
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
