import React from "react";
import "./LoginSocial.css";
import { ExternalLink } from "react-external-link";
import { Icon } from "@iconify/react";
import googleContainedFill from "@iconify/icons-akar-icons/google-contained-fill";
import facebookFill from "@iconify/icons-akar-icons/facebook-fill";
import linkedinWithCircle from "@iconify/icons-entypo-social/linkedin-with-circle";

function LoginSocial() {
  return (
    <>
      <section className="login_ocial">
        <ul>
          <li className="google">
            <ExternalLink href="https://www.google.com/">
              <Icon icon={googleContainedFill} />
            </ExternalLink>
          </li>
          <li className="facebook">
            <ExternalLink href="">
              <Icon icon={facebookFill} />
            </ExternalLink>
          </li>
          <li className="linkdin">
            <ExternalLink href="">
              <Icon icon={linkedinWithCircle} />
            </ExternalLink>
          </li>
        </ul>
      </section>
    </>
  );
}

export default LoginSocial;
