import React from "react";
import "./LoginSocial.css";
import { BsTwitter } from "react-icons/bs";
import { ExternalLink } from "react-external-link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

function LoginSocial() {
  return (
    <>
      <section className="login_ocial">
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
      </section>
    </>
  );
}

export default LoginSocial;
