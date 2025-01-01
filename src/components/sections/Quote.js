import React, { useState, useEffect } from "react";

const Quote = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
    productInterest: "",
    subject: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    if (submitStatus === "success") {
      const timer = setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://tangitex.onrender.com/api/v1/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      console.log("submitted");
      if (!response.ok) {
        console.log("some error");
        setIsSubmitting(false);
      }

      console.log("Form submitted:", formData);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        service: "",
        message: "",
        productInterest: "",
        subject: "",
      });
      setIsSubmitting(false);
    } catch (error) {
      console.log("some error occured");
      setIsSubmitting(false);
    }
  };

  return (
    <div
      id="quote"
      className="container-fluid py-5 wow fadeInUp"
      data-wow-delay="0.1s"
    >
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-7">
            <div className="section-title position-relative pb-3 mb-5">
              <h5 className="fw-bold text-blue text-uppercase">
                Request A Quote
              </h5>
              <h1 className="mb-0">
                Need A Free Quote? Please Feel Free to Contact Us
              </h1>
            </div>
            <div className="row gx-3">
              <div className="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                <h5 className="mb-4">
                  <i className="fa fa-reply text-blue me-3"></i>Reply within 24
                  hours
                </h5>
              </div>
              <div className="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                <h5 className="mb-4">
                  <i className="fa fa-phone-alt text-blue me-3"></i>24 hrs
                  telephone support
                </h5>
              </div>
            </div>
            <p className="mb-4">
              Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd
              ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo
              rebum sea invidunt voluptua. Eos vero eos vero ea et dolore eirmod
              et.
            </p>
            <div
              className="d-flex align-items-center mt-2 wow zoomIn"
              data-wow-delay="0.6s"
            >
              <div
                className="bg-dark d-flex align-items-center justify-content-center rounded"
                style={{ width: "60px", height: "60px" }}
              >
                <i className="fa fa-phone-alt text-white"></i>
              </div>
              <div className="ps-4">
                <h5 className="mb-2">Call to ask any question</h5>
                <h4 className="text-blue mb-0">+012 345 6789</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div
              className="bg-dark rounded h-100 d-flex align-items-center p-5 wow zoomIn"
              data-wow-delay="0.9s"
            >
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  {submitStatus === "success" && (
                    <div className="col-12">
                      <div className="alert alert-success">
                        Quote request submitted successfully! We will get in
                        touch with you shortly.
                      </div>
                    </div>
                  )}
                  <div className="col-xl-12">
                    <input
                      type="text"
                      name="name"
                      className="form-control bg-light border-0"
                      placeholder="Your Name"
                      style={{ height: "55px" }}
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="email"
                      name="email"
                      className="form-control bg-light border-0"
                      placeholder="Your Email"
                      style={{ height: "55px" }}
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <select
                      name="productInterest"
                      className="form-select bg-light border-0"
                      style={{ height: "55px" }}
                      value={formData.productInterest}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select A Service</option>
                      <option value="Graphic Design">Graphic Design</option>
                      <option value="Technical Support">
                        Technical Support
                      </option>
                      <option value="Web Development">Web Development</option>
                      <option value="Apps Development">Apps Development</option>
                      <option value="SEO Optimization">SEO Optimization</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <textarea
                      name="message"
                      className="form-control bg-light border-0"
                      rows="3"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button
                      className="btn btn-dark w-100 py-3"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Request A Quote"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
