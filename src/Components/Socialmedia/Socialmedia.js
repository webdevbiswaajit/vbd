import React from "react";
import "./Socialmedia.css";
import { BsTwitter } from "react-icons/bs";
import { ExternalLink } from "react-external-link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

function Socialmedia() {
  return (
    <>
      <div className="social_media">
        <ul>
          <li>
            <ExternalLink href="https://facebook.com">
              <BsTwitter />
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://facebook.com">
              <FaFacebookF />
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://facebook.com">
              <FaInstagram />
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://facebook.com">
              <FaYoutube />
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://facebook.com">
              <FaLinkedinIn />
            </ExternalLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Socialmedia;
