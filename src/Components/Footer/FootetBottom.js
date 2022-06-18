import React from "react";
import "./Footer.css";
import { BiCopyright } from "react-icons/bi";

function FootetBottom() {
  return (
    <>
      <div className="footerVBottom">
        <p>
          <BiCopyright className="copy" />
          2022 The Virtual BD. All Rights Reserved.
        </p>
      </div>
    </>
  );
}

export default FootetBottom;
