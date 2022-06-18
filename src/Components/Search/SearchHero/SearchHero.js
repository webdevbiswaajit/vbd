import React from "react";
import { Container } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";

import "./SearchHero.css";

function SearchHero() {
  return (
    <>
      <section className="search_hero">
        <Container>
          <h2>Search</h2>
          <div className="search_area">
            <form action="">
              <div className="search">
                <input type="text" placeholder="Type your key-word here" />
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
// this files css part include import "../../../Components/Services/Banner.css";

export default SearchHero;
