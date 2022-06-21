import React from "react";
import "./Faq.css";
import { Tabs, Tab, Container, Col, Row, Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";

function Faq() {
  return (
    <>
      <Container>
        <div className="provide_top ">
          <p>Questions</p>
          <h2>Frequently Ask Questions</h2>
        </div>
        <div className="provide_tabs">
          <Tabs
            defaultActiveKey="web"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="web" title="Web Design & Development">
              <div className="provide_content">
                <Row>
                  <Col md={6}>
                    <Accordion>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header className="accordion_gap">
                          How much does a new website cost?
                        </Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>
                          How much does a new website cost?
                        </Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="2">
                        <Accordion.Header>
                          How much does a new website cost?
                        </Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="3">
                        <Accordion.Header>
                          How much does a new website cost?
                        </Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Col>
                  <Col md={6}>
                    <div className="faq_content">
                      <p>
                        Bringing your ideas to live, website designs is our
                        forte. We carve perfect designs to build creative
                        websites that engage users on both desktop & mobile
                        devices with its ultra modern responsive UI.
                      </p>
                      <div className="faq_button">
                        <Link to="/">Get Started</Link>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Tab>
            <Tab eventKey="android " title="Android Application Development">
              <div className="provide_content">
                <Row>
                  <Col md={6}>
                    <Accordion>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          How much does a new website cost?
                        </Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>
                          How much does a new website cost?
                        </Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="2">
                        <Accordion.Header>
                          How much does a new website cost?
                        </Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="3">
                        <Accordion.Header>
                          How much does a new website cost?
                        </Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Col>

                  <Col md={6}>
                    <div className="faq_content">
                      <p>
                        Bringing your ideas to live, website designs is our
                        forte. We carve perfect designs to build creative
                        websites that engage users on both desktop & mobile
                        devices with its ultra modern responsive UI.
                      </p>
                      <div className="faq_button">
                        <Link to="/">Get Started</Link>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Tab>
            <Tab eventKey="graphic" title="UI & Graphic Design Service">
              <div className="provide_content">
                <Row>
                  <Col md={6}>
                    <Accordion>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          How much does a new website cost?
                        </Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>
                          How much does a new website cost?
                        </Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="2">
                        <Accordion.Header>
                          How much does a new website cost?
                        </Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="3">
                        <Accordion.Header>
                          How much does a new website cost?
                        </Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Col>

                  <Col md={6}>
                    <div className="faq_content">
                      <p>
                        Bringing your ideas to live, website designs is our
                        forte. We carve perfect designs to build creative
                        websites that engage users on both desktop & mobile
                        devices with its ultra modern responsive UI.
                      </p>
                      <div className="faq_button">
                        <Link to="/">Get Started</Link>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Tab>
            <Tab eventKey="marketing" title="Digital Marketing Service">
              <div className="provide_content">
                <Row>
                  <Col md={6}>
                    <Accordion>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          How much does a new website cost?
                        </Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>
                          How much does a new website cost?
                        </Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="2">
                        <Accordion.Header>
                          How much does a new website cost?
                        </Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="3">
                        <Accordion.Header>
                          How much does a new website cost?
                        </Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Col>

                  <Col md={6}>
                    <div className="faq_content">
                      <p>
                        Bringing your ideas to live, website designs is our
                        forte. We carve perfect designs to build creative
                        websites that engage users on both desktop & mobile
                        devices with its ultra modern responsive UI.
                      </p>
                      <div className="faq_button">
                        <Link to="/">Get Started</Link>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Tab>
          </Tabs>
        </div>
      </Container>
    </>
  );
}

export default Faq;
