import React from "react";
import "./BrandSlider.css";

function BrandCard(props) {
  return (
    <>
      <div className="brand">
        <div className="logo_item">
          <img src={props.data.img} alt="" />
        </div>
      </div>
    </>
  );
}

export default BrandCard;
