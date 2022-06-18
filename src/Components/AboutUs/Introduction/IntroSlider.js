import React from "react";
import AuthorSlider from "./AuthorSlider";
import "./IntroSlider.css";

function IntroSlider() {
  return (
    <>
      <section className="intro_area">
        <div className="intro_text">
          <h2>Welcome to The Virtual BD</h2>
          <p>Introduction</p>
        </div>
        <div className="intro_slider">
          <AuthorSlider />
        </div>
      </section>
    </>
  );
}

export default IntroSlider;
