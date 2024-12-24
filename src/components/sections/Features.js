import React from "react";

const Features = () => {
  return (
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container py-5">
        <div
          className="section-title text-center position-relative pb-3 mb-5 mx-auto"
          style={{ maxWidth: "600px" }}
        >
          <h5 className="fw-bold text-blue text-uppercase">Why Choose Us</h5>
          <h1 className="mb-0">We Are Here to Make Your Business Stand Out</h1>
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
                  developments, allowing us to provide innovative solutions that
                  keep our clients ahead of the curve.
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
                alt="Features"
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
                  We provide reliable 24/7 support to our clients, ensuring that
                  any questions or concerns are addressed promptly and
                  efficiently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
