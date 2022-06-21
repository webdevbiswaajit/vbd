import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

import "./Menu.css";
import logo from "./logo/logo.jpg";
function Menu() {
  const getClass = (navData) => (navData.isActive ? "navActive" : "link");
  const routes = [
    { text: "Home", uri: "/home" },
    { text: "Services", uri: "/services" },
    { text: "Portfolio", uri: "/portfolio" },
    { text: "About Us", uri: "/aboutus" },
    { text: "Contact", uri: "/contact" },
    { text: "Career", uri: "/career" },
  ];

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
              {routes.map((item, index) => (
                <Nav.Link key={index}>
                  <NavLink className={getClass} to={item.uri}>
                    {item.text}
                  </NavLink>
                </Nav.Link>
              ))}
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
