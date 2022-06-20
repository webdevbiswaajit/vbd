import React from "react";
import { Container } from "react-bootstrap";
import "./BrandSlider.css";

import Marquee from "react-fast-marquee";
import BrandData from "./BrandData";
import BrandCard from "./BrandCard.js";

function BrandSlider() {
  return (
    <>
      <section className="brandSlider">
        <div className="brand_text">
          <h2>OUR PARTNERS</h2>
        </div>
        <div className="nice">
          <Marquee gradient={false} speed={30}>
            {BrandData.map((data) => (
              <BrandCard key={data.id} img={data.img} />
            ))}
          </Marquee>
        </div>
      </section>
    </>
  );
}

export default BrandSlider;
