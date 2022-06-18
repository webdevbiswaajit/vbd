import React from "react";
import "./HireUs.css";
import hire from "../../../Images/hireus.jpg";
import { Col, Container, Row } from "react-bootstrap";

function HireUs() {
  return (
    <>
      <section className="hire_us">
        <Container>
          <div className="hire_text">
            <p>Hire Us</p>
            <h2>Why not you hire us today?</h2>
          </div>
          <div className="hire_blog">
            <Row>
              <Col md={4}>
                <div className="blog_item">
                  <img src={hire} alt="" />

                  <div className="learn_more">
                    <button>Learn More</button>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="blog_item">
                  <img src={hire} alt="" />

                  <div className="learn_more">
                    <button>Learn More</button>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="blog_item">
                  <img src={hire} alt="" />

                  <div className="learn_more">
                    <button>Learn More</button>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
}

export default HireUs;
