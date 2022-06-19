import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import SideLog from "../SideLog/SideLog";
import SocialLogIn from "../SocialLogIn/SocialLogIn";
import "./RegisterComp.css";
import LoginSocial from "./../../LoginSocial/LoginSocial";

function RegisterComp() {
  return (
    <div>
      <section className="register">
        <Container className="back">
          <Row>
            <Col md={6}>
              <div className="form">
                <div className="log_form">
                  <div className="log_text">
                    <h2>Sign into your account</h2>
                  </div>
                  <div className="log_link">
                    <Link to="/sign-in">Login</Link>
                    <Link className="link_active" to="/register">
                      Register
                    </Link>
                  </div>
                  <div className="form_login">
                    <form action="">
                      <div className="user">
                        <input type="text" placeholder="Username" />
                      </div>
                      <div className="user">
                        <input type="email" placeholder="Email" />
                      </div>
                      <div className="pass">
                        <input type="text" placeholder="Password" />
                      </div>
                      <div className="control_area">
                        <div className="remember">
                          <input type="checkbox" />
                          <label htmlFor="remember">
                            I agree to the terms & conditions
                          </label>
                        </div>
                      </div>
                      <div className="form_submit">
                        <button>LOGIN</button>
                      </div>
                    </form>
                    <div className="dont_account">
                      <Link to="/sign-in">Aleready a member? Login here.</Link>
                    </div>
                  </div>
                  <SocialLogIn />
                  <LoginSocial />
                </div>
              </div>
            </Col>
            <Col md={6}>
              <SideLog />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default RegisterComp;
