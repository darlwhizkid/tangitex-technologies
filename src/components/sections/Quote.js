import React, { useState, useEffect } from "react";
import { BACKEND_URL } from "../../utils/api";
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
  const [successMessage, setSuccessMessage] = useState("Quote request submitted successfully! We will get in touch with you shortly.")
  const [successStatus, setSuccessStatus] = useState(null)
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
        `${BACKEND_URL}/contact`,
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
        setSuccessMessage(response.data.message)
        setSubmitStatus("failure")
        setSuccessStatus("alert-danger")
        setIsSubmitting(false);
        return
      }

      console.log("Form submitted:", formData);
      setSubmitStatus("success");
      setSuccessStatus("alert-success")
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
      setSuccessMessage("Some error occured with your request. Please try again later.")
      setSubmitStatus("failure")
      setSuccessStatus("alert-danger")
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
            </div>
            <p className="mb-4">
              We understand your business needs and are committed to delivering 
              exceptional IT solutions. Our team of experts is ready to provide 
              you with personalized service and innovative technology solutions 
              that will help your business grow and succeed.

            </p>
          </div>
          <div className="col-lg-5">
            <div
              className="bg-dark rounded h-100 d-flex align-items-center p-5 wow zoomIn"
              data-wow-delay="0.9s"
            >
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  {successStatus && (
                    <div className="col-12">
                      <div className={`alert ${successStatus}`}>
                        {successMessage}
                      </div>
                    </div>
                  ) }
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
