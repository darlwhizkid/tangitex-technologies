import React from "react";

const About = () => {
  const scrollToQuote = (e) => {
    e.preventDefault();
    const quoteSection = document.getElementById('quote');
    quoteSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-7">
            <div className="section-title position-relative pb-3 mb-5">
              <h5 className="fw-bold text-blue text-uppercase">About Us</h5>
              <h1 className="mb-0">Why We Stand Out</h1>
            </div>
            <p className="mb-4 wow fadeInUp" data-wow-delay="0.3s">
              Our team's industry-leading expertise, innovative approach,
              personalized service, commitment to quality, and reliable track
              record set us apart and enable us to consistently deliver
              exceptional results for our clients.
            </p>
            <div className="row g-0 mb-3 wow fadeInUp" data-wow-delay="0.5s">
              <div className="col-sm-6">
                <h5 className="mb-3">
                  <i className="fa fa-check text-blue me-3"></i>Innovative
                </h5>
                <h5 className="mb-3">
                  <i className="fa fa-check text-blue me-3"></i>Professional
                  Staff
                </h5>
              </div>
              <div className="col-sm-6">
                <h5 className="mb-3">
                  <i className="fa fa-check text-blue me-3"></i>24/7 Support
                </h5>
                <h5 className="mb-3">
                  <i className="fa fa-check text-blue me-3"></i>Fair Prices
                </h5>
              </div>
            </div>
            <a
              onClick={scrollToQuote}
              href="#quote"
              className="btn btn-primary py-3 px-5 mt-3 wow zoomIn"
              data-wow-delay="0.7s"
            >
              Request A Quote
            </a>
          </div>
          <div className="col-lg-5" style={{ minHeight: "500px" }}>
            <div className="position-relative h-100 wow slideInRight" data-wow-delay="0.9s">
              <img className="position-absolute w-100 h-100 rounded" src="img/about.jpg" style={{ objectFit: "cover" }} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
