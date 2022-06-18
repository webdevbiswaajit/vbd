import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Apply.css";

function Apply() {
  return (
    <>
      <section className="apply_area">
        <Container>
          <div className="apply_text">
            <p>Career Plan</p>
            <h2>
              Become a part of our big family <br />
              to inspire and get inspired by
              <br /> professional experts.
            </h2>
          </div>

          <div className="get_job">
            <Row>
              <Col md={3} sm={12}>
                <div className="job_expertis">
                  <small>React/ Laravel</small>
                </div>
                <div className="job_name">
                  <h2>
                    Web Developer <span>/ Full Time</span>
                  </h2>
                </div>
                <div className="selary">
                  <p>Expected Salary - 10k - 15k</p>
                </div>
              </Col>
              <Col md={6} sm={12}>
                <div className="job_text">
                  <p>
                    We are currently seeking a highly motivated individual to
                    fill an I.T. This position will provide remote and onsite
                    hands-on support to staff, vendors, and customers as well
                    as, proactively identify issues.
                  </p>
                </div>
              </Col>
              <Col md={3} sm={12}>
                <div className="job_apply">
                  <Link to="/">Apply</Link>
                </div>
              </Col>
            </Row>
          </div>
          {/* ============================= */}
          <div className="get_job">
            <Row>
              <Col md={3} sm={12}>
                <div className="job_expertis">
                  <small>Photoshop/ Illustrator</small>
                </div>
                <div className="job_name">
                  <h2>
                    Graphic Designer<span>/ Full Time</span>
                  </h2>
                </div>
                <div className="selary">
                  <p>Expected Salary - 10k - 15k</p>
                </div>
              </Col>
              <Col md={6} sm={12}>
                <div className="job_text">
                  <p>
                    We are currently seeking a highly motivated individual to
                    fill an I.T. This position will provide remote and onsite
                    hands-on support to staff, vendors, and customers as well
                    as, proactively identify issues.
                  </p>
                </div>
              </Col>
              <Col md={3} sm={12}>
                <div className="job_apply">
                  <Link to="/">Apply</Link>
                </div>
              </Col>
            </Row>
          </div>
          {/* ========================== */}
          <div className="get_job">
            <Row>
              <Col md={3} sm={12}>
                <div className="job_expertis">
                  <small>Marketing</small>
                </div>
                <div className="job_name">
                  <h2>
                    Digital Marketer <span>/ Full Time</span>
                  </h2>
                </div>
                <div className="selary">
                  <p>Expected Salary - 10k - 15k</p>
                </div>
              </Col>
              <Col md={6} sm={12}>
                <div className="job_text">
                  <p>
                    We are currently seeking a highly motivated individual to
                    fill an I.T. This position will provide remote and onsite
                    hands-on support to staff, vendors, and customers as well
                    as, proactively identify issues.
                  </p>
                </div>
              </Col>
              <Col md={3} sm={12}>
                <div className="job_apply">
                  <Link to="/">Apply</Link>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Apply;
