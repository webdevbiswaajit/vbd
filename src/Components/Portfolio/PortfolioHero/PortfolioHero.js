import React from "react";
import { Container } from "react-bootstrap";
import "./PortfolioHero.css";

function PortfolioHero() {
  return (
    <>
      <section className="portfolio_hero">
        <Container>
          <div className="portfolio_text">
            <h2>Portfolio</h2>
          </div>
        </Container>
      </section>
    </>
  );
}

export default PortfolioHero;
