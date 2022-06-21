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
            <ExternalLink href="https://www.twitter.com">
              <BsTwitter />
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://www.facebook.com/TheVirtualBD">
              <FaFacebookF />
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://instagram.com">
              <FaInstagram />
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://youtube.com">
              <FaYoutube />
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://www.linkedin.com/company/thevirtualbd/?fbclid=IwAR2m8FL5D5L5m6wGU4-JNUfUp23_CN_HtRxDrRTJ0G3mPWaKu4VUUCK-WrI">
              <FaLinkedinIn />
            </ExternalLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Socialmedia;
