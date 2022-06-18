import React from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { Container } from "react-bootstrap";
import "./Hero.css";

function Hero() {
  return (
    <>
      <section className="hero">
        <Container>
          <div className="hero_content">
            <h2>Get ready to impress</h2>
            <h1>
              Adept Technology for <br />
              Tommorrow Business
            </h1>
          </div>
          <div className="play">
            <BsFillPlayCircleFill className="play_btn heartbeat " />
            <p>How we work</p>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Hero;
