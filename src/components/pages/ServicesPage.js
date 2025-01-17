import React from "react";
import { Link } from "react-router-dom";
import Footer from "../layout/Footer";

const ServicesPage = () => {
  return (
    <>
      <div className="container-fluid position-relative p-0">
        <div
          className="container-fluid bg-dark py-5 bg-header"
          style={{ marginBottom: "90px" }}
        >
          <div className="row py-5">
            <div className="col-12 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-4 text-white animated zoomIn">Services</h1>
              <Link to="/" className="h5 text-white">
                Home
              </Link>
              <i className="far fa-circle text-white px-2"></i>
              <Link to="/service" className="h5 text-white">
                Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Service Start */}
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
                  We create stunning visual designs and branding solutions to
                  help your business stand out in the digital landscape
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
                  Custom website development using cutting-edge technologies to
                  deliver responsive, user-friendly digital experiences
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
                  Building innovative mobile applications for iOS and Android
                  that engage users and drive business growth
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
                  Strategic search engine optimization to improve your online
                  visibility and drive organic traffic to your website
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
                  Still need a specific service and have an enquiry? Contact us
                  by clicking on the link
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

      {/* Testimonial Start */}
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div
            className="section-title text-center position-relative pb-3 mb-4 mx-auto"
            style={{ maxWidth: "600px" }}
          >
            <h5 className="fw-bold text-blue text-uppercase">Testimonial</h5>
            <h1 className="mb-0">What Our Clients Say About Our Services</h1>
          </div>
          <div
            className="owl-carousel testimonial-carousel wow fadeInUp"
            data-wow-delay="0.6s"
          >
            <div className="testimonial-item bg-light my-4">
              <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                {/* <img
                  className="img-fluid rounded"
                  src="/img/testimonial-1.jpg"
                  style={{ width: "60px", height: "60px" }}
                  alt="Testimonial 1"
                /> */}
                <div className="ps-4">
                  <h4 className="text-blue mb-1">Kaycee Lightings</h4>
                  <small className="text-uppercase">
                    Electronics Ecommerce site
                  </small>
                </div>
              </div>
              <div className="pt-4 pb-5 px-5">
                Partnering with Tangitex Technologies to develop our e-commerce
                platform was a transformative experience. Their expertise in web
                design and commitment to understanding our unique needs resulted
                in a user-friendly, visually appealing, and highly functional
                website. Since the launch, we've observed a significant increase
                in customer engagement and sales. The team's professionalism and
                attention to detail exceeded our expectations, making them a
                highly recommended choice for businesses seeking top-notch
                e-commerce solutions.
              </div>
            </div>

            <div className="testimonial-item bg-light my-4">
              <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                {/* <img
                  className="img-fluid rounded"
                  src="/img/testimonial-2.jpg"
                  style={{ width: "60px", height: "60px" }}
                  alt="Testimonial 2"
                /> */}
                <div className="ps-4">
                  <h4 className="text-blue mb-1">Coursify</h4>
                  <small className="text-uppercase">Educational App</small>
                </div>
              </div>
              <div className="pt-4 pb-5 px-5">
                Collaborating with Tangitex Technologies on our educational
                website was a seamless experience. Their professionalism and
                attention to detail resulted in a platform that exceeded our
                expectations. The website's design is both intuitive and
                visually appealing, enhancing our educational outreach. We
                highly recommend Tangitex Technologies for digital services
              </div>
            </div>

            <div className="testimonial-item bg-light my-4">
              <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                {/* <img
                  className="img-fluid rounded"
                  src="/img/testimonial-3.jpg"
                  style={{ width: "60px", height: "60px" }}
                  alt="Testimonial 3"
                /> */}
                <div className="ps-4">
                  <h4 className="text-blue mb-1">Wigsnstuff</h4>
                  <small className="text-uppercase">
                    Fashion eCommerce site
                  </small>
                </div>
              </div>
              <div className="pt-4 pb-5 px-5">
                "Working with Tangitex Technologies to create our wig and hair
                accessories eCommerce platform was an excellent decision. Their
                team delivered a stunning website that perfectly showcases our
                products and makes shopping easy for our customers. The seamless
                checkout process and beautiful product displays have
                significantly boosted our online sales. Their understanding of
                fashion eCommerce needs and technical expertise made the entire
                development process smooth and successful."
              </div>
            </div>

            <div className="testimonial-item bg-light my-4">
              <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                {/* <img
                  className="img-fluid rounded"
                  src="/img/testimonial-4.jpg"
                  style={{ width: "60px", height: "60px" }}
                  alt="Testimonial 4"
                /> */}
                <div className="ps-4">
                  <h4 className="text-blue mb-1">Direct Energy</h4>
                  <small className="text-uppercase">Energy Solutions Company</small>
                </div>
              </div>
              <div className="pt-4 pb-5 px-5">
                "Tangitex Technologies transformed our digital presence with a
                sophisticated and user-friendly website. Their team developed an
                intuitive platform that allows our customers to easily manage
                their energy accounts, view consumption data, and access
                important services. The integration of real-time analytics and
                responsive design has greatly improved our customer engagement
                and operational efficiency. Their expertise in creating
                enterprise-level solutions made them the perfect partner for our
                digital transformation."
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
