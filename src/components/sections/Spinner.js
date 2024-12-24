import React, { useEffect } from "react";

const Spinner = () => {
  useEffect(() => {
    setTimeout(() => {
      const spinner = document.getElementById("spinner");
      if (spinner) {
        spinner.classList.remove("show");
      }
    }, 1000);
  }, []);

  return (
    <div
      id="spinner"
      className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
    >
      <div className="loader"></div>
    </div>
  );
};

export default Spinner;
