import React, { useEffect } from "react";

const Spinner = () => {
  useEffect(() => {
    // Increase timeout duration to 2.5 seconds for better visibility
    setTimeout(() => {
      const spinner = document.getElementById("spinner");
      if (spinner) {
        // Add fade-out transition
        spinner.style.transition = "opacity 0.5s ease-out";
        spinner.style.opacity = "0";
        
        // Remove spinner after fade completes
        setTimeout(() => {
          spinner.classList.remove("show");
        }, 500);
      }
    }, 2500);
  }, []);

  return (
    <div
      id="spinner"
      className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
      style={{ opacity: 1 }}
    >
      <div className="loader"></div>
    </div>
  );
};

export default Spinner;