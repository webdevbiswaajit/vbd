import React from "react";
import "./AboutHero.css";
import { Container } from "react-bootstrap";

function AboutHero() {
  return (
    <>
      <section className="about_hero">
        <Container>
          <div className="about_text">
            <h2>About The Virtual BD</h2>
          </div>
        </Container>
      </section>
    </>
  );
}

export default AboutHero;
