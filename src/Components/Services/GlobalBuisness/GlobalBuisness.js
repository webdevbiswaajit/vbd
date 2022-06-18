import React from "react";
import "./GlobalBuisness.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function GlobalBuisness() {
  return (
    <>
      <section className="global_buisness">
        <Container>
          <Row>
            <Col md={8}>
              <div className="global_text">
                <h2>
                  Trusted by over 35 global businesses.
                  <br /> Try The Virtual BD today!
                </h2>
              </div>
            </Col>
            <Col md={4} className="global_btn_gap">
              <div className="global_btn">
                <div className="global_startde">
                  <Link to="/">Get Started</Link>
                </div>
                <div className="global_contuct">
                  <Link to="/">Contact Us</Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default GlobalBuisness;
