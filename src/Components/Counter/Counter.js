import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import CountUp from "react-countup";
import "./Counter.css";

function Counter() {
  return (
    <>
      <section className="counter">
        <Container>
          <Row>
            <Col md={3}>
              <div className="counting">
                <CountUp end={459} duration={2} />
                <span>+</span>
              </div>
              <div className="counter_info">
                <p>Happy Clients</p>
              </div>
            </Col>

            <Col md={3}>
              <div className="counting">
                <CountUp end={356} duration={2} /> <span>+</span>
              </div>
              <div className="counter_info">
                <p>Finished Projects</p>
              </div>
            </Col>

            <Col md={3}>
              <div className="counting">
                <CountUp end={46} duration={2} /> <span>+</span>
              </div>
              <div className="counter_info">
                <p>Skilled Experts</p>
              </div>
            </Col>

            <Col md={3}>
              <div className="counting">
                <CountUp end={100} duration={2} /> <span>%</span>
              </div>
              <div className="counter_info">
                <p>Satisfaction Rate</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Counter;
