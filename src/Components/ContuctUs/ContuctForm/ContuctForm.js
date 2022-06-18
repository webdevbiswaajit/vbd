import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { IoCallOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import FormArea from "../FormArea/FormArea";
import "./ContuctForm.css";

function ContuctForm() {
  return (
    <>
      <section className="contuct_form">
        <Container>
          <Row>
            <Col md={6}>
              <div className="phone">
                <div className="phone_number">
                  <div className="call">
                    <IoCallOutline className="dial_icon" />
                    <p>REACH OUT NOW!</p>
                  </div>
                  <div className="dial">
                    <h1>01711 666 603</h1>
                  </div>
                  <div className="contuct_btn">
                    <Link to="/">Contact Us</Link>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <FormArea />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default ContuctForm;
