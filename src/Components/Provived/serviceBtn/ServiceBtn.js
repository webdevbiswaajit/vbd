import React from "react";
import "./ServiceBtn.css";
import { Link } from "react-router-dom";

function ServiceBtn() {
  return (
    <>
      <div className="service_button">
        <div className="service_started_btn">
          <Link to="/services">Get Started</Link>
        </div>
        <div className="service_contuct_btn">
          <Link to="/contact">Contact Us</Link>
        </div>
      </div>
    </>
  );
}

export default ServiceBtn;
