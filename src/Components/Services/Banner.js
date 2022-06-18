import React from "react";
import "./Banner.css";
import { Container } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";

function Banner() {
  return (
    <>
      <section className="banner_area">
        <Container>
          <h2>Our Service</h2>
          <div className="search_area">
            <form action="">
              <div className="search">
                <input type="text" placeholder="Search" />
                <div className="submite">
                  <button>
                    <BsSearch />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Banner;
