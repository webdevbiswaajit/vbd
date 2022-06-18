import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsBox, BsCommand } from "react-icons/bs";
import ContuctBtn from "../../GetStart&Contuct/ContuctUs/ContuctBtn";
import { FiCodesandbox } from "react-icons/fi";
import { CgAwards } from "react-icons/cg";
import "./ProjectStart.css";

function ProjectStart() {
  return (
    <>
      <section className="project_Start">
        <Container>
          <div className="lets_started">
            <Row>
              <Col md={6}>
                <div className="lests_start_text">
                  <h2>Let’s Start a Project together.</h2>
                  <p>
                    Our Creative Technical Team is Ready to Help you to Grow
                    Your Business. Just contact us. Our Team will be very happy
                    to Grow your Business
                  </p>
                </div>
              </Col>
              <Col md={6}>
                <div className="contuct_now_btn">
                  <ContuctBtn />
                </div>
              </Col>
            </Row>
          </div>
          <div className="quality_assurence">
            <Row>
              <Col md={6}>
                <div className="quality">
                  <h2>
                    <span>
                      <CgAwards />
                    </span>
                    Quality Assurance System
                  </h2>
                  <p>
                    Our service offerings enhance customer experience throughout
                    secure & highly functional end-to-end warranty management.
                  </p>
                </div>
              </Col>
              {/* ============== */}
              <Col md={6}>
                <div className="quality">
                  <h2>
                    <span>
                      <BsBox />
                    </span>
                    Accurate Testing Processes
                  </h2>
                  <p>
                    Develop and propose product improvements through periodical
                    and accurate testing, repairing & refining every version.
                  </p>
                </div>
              </Col>
              {/* =========================== */}
              <Col md={6}>
                <div className="quality">
                  <h2>
                    <span>
                      <BsCommand />
                    </span>
                    Smart API Generation
                  </h2>
                  <p>
                    Develop and propose product improvements through periodical
                    and accurate testing, repairing & refining every version.
                  </p>
                </div>
              </Col>
              {/* ========================== */}
              <Col md={6}>
                <div className="quality">
                  <h2>
                    <span>
                      <FiCodesandbox />
                    </span>
                    Infrastructure Integration Technology
                  </h2>
                  <p>
                    At Mitech, we have a holistic and integrated approach
                    towards core modernization to experience technological
                    evolution.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
}

export default ProjectStart;
