import React from "react";
import "./SideLog.css";
import backLog from "./img/socialCover.jpg";
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
              <BsTwitter />
            </li>
            <li>
              <BsFacebook />
            </li>

            <li>
              <BsInstagram />
            </li>
            <li>
              <BsYoutube />
            </li>
            <li>
              <BsLinkedin />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default SideLog;
