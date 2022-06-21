import React from "react";
import "./SideLog.css";
import backLog from "./img/socialCover.jpg";
import { ExternalLink } from "react-external-link";
import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsYoutube,
  BsLinkedin,
} from "react-icons/bs";

function SideLog() {
  return (
    <>
      <div className="log_back">
        <div className="logimg">
          <img src={backLog} alt="" />
        </div>
        <div className="logSocial">
          <ul>
            <li>
              <ExternalLink href="https://twitter.com">
                <BsTwitter />
              </ExternalLink>
            </li>

            <li>
              <ExternalLink href="https://www.facebook.com/TheVirtualBD">
                <BsFacebook />
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://instagram.com">
                <BsInstagram />
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://youtube.com">
                <BsYoutube />
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://www.linkedin.com/company/thevirtualbd/?fbclid=IwAR2m8FL5D5L5m6wGU4-JNUfUp23_CN_HtRxDrRTJ0G3mPWaKu4VUUCK-WrI">
                <BsLinkedin />
              </ExternalLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default SideLog;
