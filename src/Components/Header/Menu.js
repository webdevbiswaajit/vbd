import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Menu.css";
import logo from "./logo/logo.jpg";
function Menu() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="navBg" sticky="top">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Brand className="navBrand">
            <Link to="/home">
              <img src={logo} alt="logo" />
            </Link>
          </Navbar.Brand>

          <Navbar.Collapse id="responsive-navbar-nav nav_background">
            <Nav className="me-auto">
              <Nav.Link>
                <Link to="/home">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/services">Services</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/portfolio"> Portfolio</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/aboutus">About Us</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/contuct">Contact </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/career">Career</Link>
              </Nav.Link>
              {/* <Nav.Link>
                <Link to="/other">Other</Link>
              </Nav.Link> */}
            </Nav>

            <Nav.Link className="sing_area">
              <Link to="/sign-in">
                <span className="signIn">Sign In</span>
              </Link>
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Menu;
