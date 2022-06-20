import React from "react";
import "./Footer.css";
import { BiCopyright } from "react-icons/bi";
import { ExternalLink } from "react-external-link";

function FootetBottom() {
  return (
    <>
      <div className="footerVBottom">
        <p>
          <BiCopyright className="copy" />
          2022
          <span>
            <ExternalLink href="https://thevirtualbd.com/">
              The Virtual BD
            </ExternalLink>
          </span>
          . All Rights Reserved.
        </p>
      </div>
    </>
  );
}

export default FootetBottom;
