import React from "react";
import AuthorSlider from "./AuthorSlider";
import "./IntroSlider.css";

function IntroSlider() {
  return (
    <>
      <section className="intro_area">
        <div className="intro_text">
          <p>Introduction</p>
          <h2>Welcome to The Virtual BD</h2>
        </div>
        <div className="intro_slider">
          <AuthorSlider />
        </div>
      </section>
    </>
  );
}

export default IntroSlider;
