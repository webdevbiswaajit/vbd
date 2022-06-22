import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import apply from "./ApplyData";
import "./Apply.css";
import { ExternalLink } from "react-external-link";

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

          {apply.map((data) => (
            <div className="get_job">
              <Row>
                <Col md={3} sm={12}>
                  <div className="job_expertis">
                    <small>{data.job_expertis}</small>
                  </div>
                  <div className="job_name">
                    <h2>
                      {data.job_name} <span>/ {data.jobNature}</span>
                    </h2>
                  </div>
                  <div className="selary">
                    <p>Expected Salary - {data.Salary}</p>
                  </div>
                </Col>
                <Col md={6} sm={12}>
                  <div className="job_text">
                    <p>{data.jobDes}</p>
                  </div>
                </Col>
                <Col md={3} sm={12}>
                  <div className="job_apply">
                    <ExternalLink href="https://www.gmail.com">
                      Apply
                    </ExternalLink>
                  </div>
                </Col>
              </Row>
            </div>
          ))}
        </Container>
      </section>
    </>
  );
}

export default Apply;
