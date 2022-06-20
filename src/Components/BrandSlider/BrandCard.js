import React from "react";
import "./BrandSlider.css";

function BrandCard(props) {
  return (
    <>
      <img className="mx-5" src={props.img} alt="" />
    </>
  );
}

export default BrandCard;
