import React, { useEffect, useState } from "react";

const Topbar = () => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const updateDate = () => {
      const date = new Date();
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      setCurrentDate(date.toLocaleDateString("en-US", options));
    };

    updateDate();
    const timer = setInterval(updateDate, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container-fluid bg-dark px-5 d-none d-lg-block">
      <div className="row gx-0">
        <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
          <div
            className="d-inline-flex align-items-center"
            style={{ height: "45px" }}
          >
            <small className="me-3 text-light" id="currentDate">
              {currentDate}
            </small>
          </div>
        </div>
        <div className="col-lg-4 text-center text-lg-end">
          <div
            className="d-inline-flex align-items-center"
            style={{ height: "45px" }}
          >
            <a
              className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
              href=""
            >
              <i className="fab fa-twitter fw-normal"></i>
            </a>
            <a
              className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
              href=""
            >
              <i className="fab fa-facebook-f fw-normal"></i>
            </a>
            <a
              className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
              href=""
            >
              <i className="fab fa-linkedin-in fw-normal"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
