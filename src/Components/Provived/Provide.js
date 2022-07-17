import React from "react";
import "./Provide.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Container, Row, Col } from "react-bootstrap";
import web from "./ServiceTab/img/Web-Design-and-Development.jpg";
import graphic from "./ServiceTab/img/Graphic-and-UI-UX-Design.jpg";
import marketing from "./ServiceTab/img/Digital-Marketing-Service.jpg";
import dataAnalicis from "./ServiceTab/img/Data-analysis.jpg";
import cyber from "./ServiceTab/img/Cyber-Security.jpg";
import andriod from "./ServiceTab/img/andriod.jpg";
import "react-tabs/style/react-tabs.css";
import ServiceBtn from "./serviceBtn/ServiceBtn";

function Provide() {
  return (
    <>
      <div className="provide_service">
        <div className="provide_service_head">
          <p>Know More About Our Services</p>
          <h2>Services We Provide</h2>
        </div>

        <Container>
          <Tabs>
            <TabList>
              <Tab>Web Design & Development</Tab>
              <Tab>Android App Development</Tab>
              <Tab>Graphic & UI/UX Design</Tab>
              <Tab>Digital Marketing </Tab>
              <Tab>Data Analysis</Tab>
              <Tab>Cyber Security</Tab>
            </TabList>
            <div className="tabPanel_gap">
              <TabPanel>
                <Row>
                  <Col md={7} sm={12}>
                    <div className="service_poster">
                      <img src={web} alt="" />
                    </div>
                  </Col>
                  <Col md={5} sm={12}>
                    <div className="service_content">
                      <div className="service_text">
                        <p>
                          Web Development Bringing your ideas to live, website
                          designs is our forte. We carve perfect designs to
                          build creative websites that engage users on both
                          desktop & mobile devices with its ultra modern
                          responsive UI.
                        </p>
                      </div>
                      <div className="service_list_item">
                        <ul>
                          <li>Highly Professional Design</li>
                          <li>Responsive Design</li>
                          <li>Multi-level Security</li>
                          <li>payment Gateway </li>
                          <li>Email Marketing Integration </li>
                          <li>Dashboard/ Reporting Tools </li>
                          <li>120 Days Free Support</li>
                        </ul>
                      </div>
                      <ServiceBtn />
                    </div>
                  </Col>
                </Row>
              </TabPanel>

              <TabPanel>
                <Row>
                  <Col md={7} sm={12}>
                    <div className="service_poster">
                      <img src={web} alt="" />
                    </div>
                  </Col>
                  <Col md={5} sm={12}>
                    <div className="service_content">
                      <div className="service_text">
                        <p>
                          We build interactive mobile apps to extend your reach
                          to potential customers & maximize conversions. Our App
                          run seamlessly to deliver amazing mobile user
                          experience.
                        </p>
                      </div>
                      <div className="service_list_item">
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
                      </div>
                      <ServiceBtn />
                    </div>
                  </Col>
                </Row>
              </TabPanel>

              <TabPanel>
                <Row>
                  <Col md={7} sm={12}>
                    <div className="service_poster">
                      <img src={graphic} alt="" />
                    </div>
                  </Col>
                  <Col md={5} sm={12}>
                    <div className="service_content">
                      <div className="service_text">
                        <p>
                          Our skilled designers have the experience and
                          creativity it takes to drive results through graphic &
                          UI design. We gather information about your brand from
                          the big picture to the little details and explore your
                          objectives, so we can deliver creative solutions and
                          the results you need.
                        </p>
                      </div>
                      <div className="service_list_item">
                        <ul>
                          <li> Pixel Perfect UI design</li>
                          <li>Clean coded</li>
                          <li>Professional and Creative Designs</li>
                          <li> Quick Delivery with 3D Mock-ups </li>
                          <li> Unlimited Revisions </li>
                        </ul>
                      </div>
                      <ServiceBtn />
                    </div>
                  </Col>
                </Row>
              </TabPanel>
              <TabPanel>
                <Row>
                  <Col md={7} sm={12}>
                    <div className="service_poster">
                      <img src={marketing} alt="" />
                    </div>
                  </Col>
                  <Col md={5} sm={12}>
                    <div className="service_content">
                      <div className="service_text">
                        <p>
                          We will help in Implementing all levels of Social
                          media marketing for new and aging websites. For taking
                          your business to a top, the virtual bd always helps by
                          marketing.
                        </p>
                      </div>
                      <div className="service_list_item">
                        <ul>
                          <li> Social Media Marketing</li>
                          <li> B2B Lead Generation</li>
                          <li> Google Ads Marketing </li>
                          <li> LinkedIn Marketing </li>
                          <li> Email Marketing</li>
                          <li> Reporting After Marketing </li>
                          <li> Free Future consultant</li>
                        </ul>
                      </div>
                      <ServiceBtn />
                    </div>
                  </Col>
                </Row>
              </TabPanel>
              <TabPanel>
                <Row>
                  <Col md={7} sm={12}>
                    <div className="service_poster">
                      <img src={dataAnalicis} alt="" />
                    </div>
                  </Col>
                  <Col md={5} sm={12}>
                    <div className="service_content">
                      <div className="service_text">
                        <p>
                          We will help in Implementing all levels of Social
                          media marketing for new and aging websites. For taking
                          your business to a top, the virtual bd always helps by
                          marketing.
                        </p>
                      </div>
                      <div className="service_list_item">
                        <ul>
                          <li> Social Media Marketing</li>
                          <li> B2B Lead Generation</li>
                          <li> Google Ads Marketing </li>
                          <li> LinkedIn Marketing </li>
                          <li> Email Marketing</li>
                          <li> Reporting After Marketing </li>
                          <li> Free Future consultant</li>
                        </ul>
                      </div>
                      <div className="ser_contuct">
                        <ServiceBtn />
                      </div>
                    </div>
                  </Col>
                </Row>
              </TabPanel>
              <TabPanel>
                <Row>
                  <Col md={7} sm={12}>
                    <div className="service_poster">
                      <img src={cyber} alt="" />
                    </div>
                  </Col>
                  <Col md={5} sm={12}>
                    <div className="service_content">
                      <div className="service_text">
                        <p>
                          We will help in Implementing all levels of Social
                          media marketing for new and aging websites. For taking
                          your business to a top, the virtual bd always helps by
                          marketing.
                        </p>
                      </div>
                      <div className="service_list_item">
                        <ul>
                          <li> Social Media Marketing</li>
                          <li> B2B Lead Generation</li>
                          <li> Google Ads Marketing </li>
                          <li> LinkedIn Marketing </li>
                          <li> Email Marketing</li>
                          <li> Reporting After Marketing </li>
                          <li> Free Future consultant</li>
                        </ul>
                      </div>
                      <ServiceBtn />
                    </div>
                  </Col>
                </Row>
              </TabPanel>
            </div>
          </Tabs>
        </Container>
      </div>
    </>
  );
}

export default Provide;
