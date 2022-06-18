import React from "react";
import "./PricingPlan.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import boat from "../../../Images/planIcon/boat.png";
import flower from "../../../Images/planIcon/flower.png";
import love from "../../../Images/planIcon/love.png";
import ContuctForm from "../../ContuctUs/ContuctForm/ContuctForm";

function PricingPlan() {
  return (
    <>
      <section className="pricing_plan">
        <Container>
          <div className="pricing_text">
            <p>Pricing Plan</p>
            <h2>Pricing Plans For Business Development Services</h2>
          </div>

          <div className="plan">
            <Row>
              <Col md={4}>
                <div className="plan_card">
                  <p>Digital Marketing</p>
                  <div className="plan_icon">
                    <img src={boat} alt="Boat" />
                  </div>
                  <h2>
                    $200 <small>/ By Project</small>
                  </h2>
                  <div className="offer_item">
                    <li>Highly Professional Design</li>
                    <li>Responsive Design</li>
                    <li>Multi-level Security</li>
                    <li>Payment Gateway Intrigation</li>
                    <li>120 Days Free Support</li>
                  </div>
                  <div className="get_plan">
                    <Link to="/">Get Started</Link>
                  </div>
                </div>
              </Col>
              {/* =========================== */}
              <Col md={4}>
                <div className="plan_card ">
                  <div className="plan_mid mid_plan_text">
                    <p>Web Design & Development</p>
                    <div className="plan_icon">
                      <img src={love} alt="Love" />
                    </div>
                    <h2>
                      $200 <small>/ By Project</small>
                    </h2>
                    <div className="offer_item offer_mid">
                      <li>Highly Professional Design</li>
                      <li>Responsive Design</li>
                      <li>Multi-level Security</li>
                      <li>Payment Gateway Intrigation</li>
                      <li>120 Days Free Support</li>
                    </div>
                    <div className="get_plan get_middle">
                      <Link to="/">Get Started</Link>
                    </div>
                  </div>
                </div>
              </Col>
              {/* ===================================== */}
              <Col md={4}>
                <div className="plan_card">
                  <p>UI/UX Design</p>
                  <div className="plan_icon">
                    <img src={flower} alt="Boat" />
                  </div>
                  <h2>
                    $200 <small>/ By Project</small>
                  </h2>
                  <div className="offer_item">
                    <li>Highly Professional Design</li>
                    <li>Responsive Design</li>
                    <li>Multi-level Security</li>
                    <li>Payment Gateway Intrigation</li>
                    <li>120 Days Free Support</li>
                  </div>
                  <div className="get_plan">
                    <Link to="/">Get Started</Link>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
        <ContuctForm />
      </section>
    </>
  );
}

export default PricingPlan;
