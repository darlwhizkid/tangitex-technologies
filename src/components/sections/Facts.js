import React, { useEffect, useState } from "react";

const Counter = ({ end, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(progress * end));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{count}</span>;
};

const Facts = () => {

  return (
    <div className="container-fluid facts py-5 pt-lg-0">
      <div className="container py-5 pt-lg-0">
        <div className="row gx-0">
          <div className="col-lg-4 wow zoomIn" data-wow-delay="0.1s">
            <div
              className="bg-dark shadow d-flex align-items-center justify-content-center p-4"
              style={{ height: "150px" }}
            >
              <div
                className="bg-white d-flex align-items-center justify-content-center rounded mb-2"
                style={{ width: "60px", height: "60px" }}
              >
                <i className="fa fa-users text-blue"></i>
              </div>
              <div className="ps-4">
                <h5 className="text-white mb-0">Happy Clients</h5>
                <h1 className="text-white mb-0 counter">50</h1>
              </div>
            </div>
          </div>
          <div className="col-lg-4 wow zoomIn" data-wow-delay="0.3s">
            <div
              className="bg-light shadow d-flex align-items-center justify-content-center p-4"
              style={{ height: "150px" }}
            >
              <div
                className="bg-dark d-flex align-items-center justify-content-center rounded mb-2"
                style={{ width: "60px", height: "60px" }}
              >
                <i className="fa fa-check text-white"></i>
              </div>
              <div className="ps-4">
                <h5 className="text-blue mb-0">Projects Done</h5>
                <h1 className="mb-0 counter">100</h1>
              </div>
            </div>
          </div>
          <div className="col-lg-4 wow zoomIn" data-wow-delay="0.6s">
            <div
              className="bg-dark shadow d-flex align-items-center justify-content-center p-4"
              style={{ height: "150px" }}
            >
              <div
                className="bg-white d-flex align-items-center justify-content-center rounded mb-2"
                style={{ width: "60px", height: "60px" }}
              >
                <i className="fa fa-award text-blue"></i>
              </div>
              <div className="ps-4">
                <h5 className="text-white mb-0">Ongoing Projects</h5>
                <h1 className="text-white mb-0 counter">5</h1>
                <h6 className="text-white mb-0">...and counting</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facts;
