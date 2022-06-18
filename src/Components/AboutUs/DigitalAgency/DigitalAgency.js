import React from "react";
import "./DigitalAgency.css";
import { Container } from "react-bootstrap";

function DigitalAgency() {
  return (
    <>
      <section className="digital_agency">
        <Container>
          <div className="agency_text">
            <h2>Award Winning Digital Agency</h2>
            <small>Our Company</small>
            <p>
              Our CEO is The Winner of Bangabandhu Digital Social Innovation
              Award 2020 in INTEGRATED COMMUNITY DEVELOPMENT Group Category.
              Among 800+ applicants where 47 persons got nominations and 10
              persons are selected for this award. And he is within those 10
              persons!
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}

export default DigitalAgency;
