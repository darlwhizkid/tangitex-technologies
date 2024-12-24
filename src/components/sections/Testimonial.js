import React from "react";

const Testimonial = () => {
  return (
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
          id="testimonial-carousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="testimonial-item bg-light my-4">
                <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                  <img
                    className="img-fluid rounded"
                    src="/img/testimonial-1.jpg"
                    style={{ width: "60px", height: "60px" }}
                    alt=""
                  />
                  <div className="ps-4">
                    <h4 className="text-blue mb-1">Kenestores</h4>
                    <small className="text-uppercase">Profession</small>
                  </div>
                </div>
                <div className="pt-4 pb-5 px-5">
                  Dolor et eos labore, stet justo sed est sed. Diam sed sed
                  dolor stet amet eirmod eos labore diam
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="testimonial-item bg-light my-4">
                <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                  <img
                    className="img-fluid rounded"
                    src="/img/testimonial-2.jpg"
                    style={{ width: "60px", height: "60px" }}
                    alt=""
                  />
                  <div className="ps-4">
                    <h4 className="text-blue mb-1">Mayo's Place</h4>
                    <small className="text-uppercase">Profession</small>
                  </div>
                </div>
                <div className="pt-4 pb-5 px-5">
                  Dolor et eos labore, stet justo sed est sed. Diam sed sed
                  dolor stet amet eirmod eos labore diam
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="testimonial-item bg-light my-4">
                <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                  <img
                    className="img-fluid rounded"
                    src="/img/testimonial-3.jpg"
                    style={{ width: "60px", height: "60px" }}
                    alt=""
                  />
                  <div className="ps-4">
                    <h4 className="text-blue mb-1">Client Name</h4>
                    <small className="text-uppercase">Profession</small>
                  </div>
                </div>
                <div className="pt-4 pb-5 px-5">
                  Dolor et eos labore, stet justo sed est sed. Diam sed sed
                  dolor stet amet eirmod eos labore diam
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#testimonial-carousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#testimonial-carousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
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
