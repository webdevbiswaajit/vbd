import React from "react";
import "./Buisness.css";
import { Container, Row, Col } from "react-bootstrap";

function Buisness() {
  return (
    <>
      <section className="buisness_area">
        <Container>
          <div className="buisness_content">
            <h2>How we help your business succeed</h2>
            <p>How We Work</p>
          </div>
          <Row>
            <Col md={3} className="content_gap">
              <div className="content_sl">
                <div className="number">
                  <h1>1</h1>
                </div>
              </div>
              <div className="discussion">
                <h3>1. Discussion</h3>
                <p>
                  We meet customers in set place to discuss the details about
                  needs and demands before proposing a plan.
                </p>
              </div>
            </Col>
            <Col md={3}>
              <div className="content_sl">
                <div className="number">
                  <h1>2</h1>
                </div>
              </div>
              <div className="discussion">
                <h3>2. Concepts & Initatives</h3>
                <p>
                  We meet customers in set place to discuss the details about
                  needs and demands before proposing a plan.
                </p>
              </div>
            </Col>
            <Col md={3}>
              <div className="content_sl">
                <div className="number">
                  <h1>3</h1>
                </div>
              </div>
              <div className="discussion">
                <h3>3. Testing & Trying</h3>
                <p>
                  We meet customers in set place to discuss the details about
                  needs and demands before proposing a plan.
                </p>
              </div>
            </Col>
            <Col md={3}>
              <div className="last_content">
                <div className="number">
                  <h1>4</h1>
                </div>
              </div>
              <div className="discussion">
                <h3>4. Execute & install</h3>
                <p>
                  We meet customers in set place to discuss the details about
                  needs and demands before proposing a plan.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Buisness;
