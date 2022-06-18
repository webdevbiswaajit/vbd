import React from "react";
import "./Socialmedia.css";
import { BsTwitter } from "react-icons/bs";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Socialmedia() {
  return (
    <>
      <div className="social_media">
        <ul>
          <li>
            <Link to="/">
              <BsTwitter />
            </Link>
          </li>
          <li>
            <Link to="/">
              <FaFacebookF />
            </Link>
          </li>
          <li>
            <Link to="/">
              <FaInstagram />
            </Link>
          </li>
          <li>
            <Link to="/">
              <FaYoutube />
            </Link>
          </li>
          <li>
            <Link to="/">
              <FaLinkedinIn />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Socialmedia;
