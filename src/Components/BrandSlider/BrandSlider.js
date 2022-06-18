import React from "react";
import { Container } from "react-bootstrap";
import "./BrandSlider.css";
import Brandslider from "./BrandData";
import BrandCard from "./BrandCard.js";

function BrandSlider() {
  return (
    <>
      <section className="brandSlider">
        <Container>
          <div className="brand_text">
            <h2>OUR PARTNERS</h2>
          </div>

          <div className="nice">
            {Brandslider.map((data) => (
              <BrandCard key={data.id} data={data} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

export default BrandSlider;
