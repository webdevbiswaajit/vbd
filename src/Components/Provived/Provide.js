import React from "react";
import { Tabs, Tab, Container, Col, Row } from "react-bootstrap";
import web_banner from "../../Images/webBanner.jpg";
import ContuctBtn from "../GetStart&Contuct/ContuctUs/ContuctBtn";
import "./Provide.css";

function Provide() {
  return (
    <>
      <section className="provide">
        <Container>
          <div className="provide_top">
            <p>Know More About Our Services</p>
            <h2>Services We Provide</h2>
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
                      <div className="banner ">
                        <img src={web_banner} alt="Web Development" />
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="banner_content">
                        <p>
                          Bringing your ideas to live, website designs is our
                          forte. We carve perfect designs to build creative
                          websites that engage users on both desktop & mobile
                          devices with its ultra modern responsive UI.
                        </p>

                        <ul>
                          <li> Highly Professional Design</li>
                          <li> Responsive Design</li>
                          <li> Multi-level Security</li>
                          <li> payment Gateway </li>
                          <li> Email Marketing Integration </li>
                          <li> Dashboard/ Reporting Tools </li>
                          <li> 120 Days Free Support</li>
                        </ul>
                        <div className="button_area">
                          <ContuctBtn />
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
                      <div className="banner ">
                        <img src={web_banner} alt="Web Development" />
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="banner_content banner_gap">
                        <p>
                          We build interactive mobile apps to extend your reach
                          to potential customers & maximize conversions. Our App
                          run seamlessly to deliver amazing mobile user
                          experience.
                        </p>

                        <ul>
                          <li> Custom App Development</li>
                          <li>
                            Facebook, Google, Firebase, REST API Integration
                          </li>
                          <li> Web Services Apps</li>
                          <li> PhP API’s Implementation</li>
                          <li> Beginner friendly </li>
                          <li>Free updates </li>
                          <li> 120 Days Free Support</li>
                        </ul>
                        <div className="button_area">
                          <ContuctBtn />
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
                      <div className="banner ">
                        <img src={web_banner} alt="Web Development" />
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="banner_content">
                        <p>
                          Our skilled designers have the experience and
                          creativity it takes to drive results through graphic &
                          UI design. We gather information about your brand from
                          the big picture to the little details and explore your
                          objectives, so we can deliver creative solutions and
                          the results you need.
                        </p>

                        <ul>
                          <li> Pixel Perfect UI design</li>
                          <li>Clean coded</li>
                          <li>Professional and Creative Designs</li>
                          <li> Quick Delivery with 3D Mock-ups </li>
                          <li> Unlimited Revisions </li>
                        </ul>
                        <div className="button_area">
                          <ContuctBtn />
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
                      <div className="banner ">
                        <img src={web_banner} alt="Web Development" />
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="banner_content banner_gap">
                        <p>
                          We will help in Implementing all levels of Social
                          media marketing for new and aging websites. For taking
                          your business to a top, the virtual bd always helps by
                          marketing.
                        </p>

                        <ul>
                          <li> Social Media Marketing</li>
                          <li> B2B Lead Generation</li>
                          <li> Google Ads Marketing </li>
                          <li> LinkedIn Marketing </li>
                          <li> Email Marketing</li>
                          <li> Reporting After Marketing </li>
                          <li> Free Future consultant</li>
                        </ul>
                        <div className="button_area">
                          <ContuctBtn />
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Tab>
            </Tabs>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Provide;
