import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "./logo/logo.jpg";
import google from "./logo/google.png";
import apple from "./logo/apple.png";
import Socialmedia from "../Socialmedia/Socialmedia";
import "./Footer.css";
import FootetBottom from "./FootetBottom";

function Footer() {
  return (
    <>
      <footer className="footer_area">
        <Container>
          <div className="top_footer">
            <Row>
              <Col md={3}>
                <div className="fImage">
                  <img src={logo} alt="logo" />
                </div>
                <div className="footer_text">
                  <p>
                    We are developing business idea with technology. Then we are
                    analyzing market how we can ranking up this start-up to top
                    level.
                  </p>
                  <div className="media_social">
                    <Socialmedia />
                  </div>
                </div>
              </Col>
              <Col md={3}>
                <div className="footer_contuct">
                  <h3>Contact Us</h3>
                  <p>
                    <span>Phone:</span> +880 1711 666 603
                  </p>
                  <p>
                    <span>Email:</span> contact@thevirtualbd.com
                  </p>
                  <p>
                    <span>Address: </span> Home 234, Phase 2, Road 10,
                    Sonadanga, Khulna 9100, Bangladesh
                  </p>
                </div>
              </Col>
              <Col md={3}>
                <div className="quicLink">
                  <h3>Quick Links</h3>
                  <ul>
                    <li>
                      <Link to="/aboutus">About Us</Link>
                    </li>
                    <li>
                      <Link to="/services">Services</Link>
                    </li>

                    <li>
                      <Link to="/career">Carreer</Link>
                    </li>

                    <li>
                      <Link to="/privacy-policy">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="/contact"> Contact Us</Link>
                    </li>
                    <li>
                      <Link to="/data-protection">Data Protection</Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col md={3}>
                <div className="subsCribe">
                  <form action="">
                    <div className="email_form">
                      <input type="email" placeholder="Enter Your email" />
                    </div>
                    <button>Subscribe</button>
                  </form>
                  <p>
                    Be the first to find out about exclusive deals, the latest
                    Updates, and top trends.
                  </p>

                  <div className="paly_store">
                    <div className="googlePlay">
                      <Link to="/services">
                        <img src={google} alt="" />
                      </Link>
                    </div>

                    <div className="apple_store">
                      <Link to="/home">
                        <img src={apple} alt="" />
                      </Link>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
        {/* footer_bottom */}
        <FootetBottom />
      </footer>
    </>
  );
}

export default Footer;
