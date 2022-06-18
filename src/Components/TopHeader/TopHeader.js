import React from "react";
import "./TopHeader.css";
import { Container } from "react-bootstrap";
import { FaAddressBook } from "react-icons/fa";
import { BsClock, BsGeoAltFill } from "react-icons/bs";

import Logo from "../../Images/logo.jpg";
import Socialmedia from "../Socialmedia/Socialmedia";
function TopHeader() {
  return (
    <>
      <Container>
        <div className="top_header">
          <div className="logo">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="info">
            <div className="location">
              <div className="location_icon">
                <BsGeoAltFill />
              </div>
              <div className="location_info">
                <p>
                  Home 234, Phase 2, <br />
                  Road 10, Sonadanga, <br />
                  Khulna 9100, Bangladesh
                </p>
              </div>
            </div>
            <div className="contuct">
              <div className="contuct_icon">
                <FaAddressBook />
              </div>
              <div className="contuct_info">
                <p>
                  contact@thevirtualbd.com
                  <br /> +880 1711 666 603
                </p>
              </div>
            </div>
            <div className="time">
              <div className="time_icon">
                <BsClock />
              </div>
              <div className="time_info">
                <p>
                  Saturday - Thursday <br />
                  10:00 am - 06:00 pm
                </p>
              </div>
            </div>
          </div>
          <Socialmedia />
        </div>
      </Container>
    </>
  );
}

export default TopHeader;
