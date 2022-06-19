import React from "react";
import "./SearchLink.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function SearchLink() {
  return (
    <>
      <section className="search_link">
        <div className="search_text">
          <p>Help Center</p>
          <h2>FAQ - Frequently Ask Questions</h2>
        </div>
        <Container>
          <Row>
            <Col md={4}>
              <div className="search_item">
                <div className="course_name">
                  <h2>Web Design & Development</h2>
                </div>
                <div className="link">
                  <p>
                    <Link to="/">How much does a new website cost?</Link>
                  </p>
                  <p>
                    <Link to="/">How much does a new website cost?</Link>
                  </p>
                  <p>
                    <Link to="/">How much does a new website cost?</Link>
                  </p>
                  <p>
                    <Link to="/">How much does a new website cost?</Link>
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="search_item">
                <div className="course_name">
                  <h2>Graphic Design</h2>
                </div>
                <div className="link">
                  <p>
                    <Link to="/">How much does a new website cost?</Link>
                  </p>
                  <p>
                    <Link to="/">How much does a new website cost?</Link>
                  </p>
                  <p>
                    <Link to="/">How much does a new website cost?</Link>
                  </p>
                  <p>
                    <Link to="/">How much does a new website cost?</Link>
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="search_item">
                <div className="course_name">
                  <h2>Digital Marketing</h2>
                </div>
                <div className="link">
                  <p>
                    <Link to="/">How much does a new website cost?</Link>
                  </p>
                  <p>
                    <Link to="/">How much does a new website cost?</Link>
                  </p>
                  <p>
                    <Link to="/">How much does a new website cost?</Link>
                  </p>
                  <p>
                    <Link to="/">How much does a new website cost?</Link>
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="search_item">
                <div className="course_name">
                  <h2>Research & Development</h2>
                </div>
                <div className="link">
                  <p>
                    <Link to="/">How much does a new website cost?</Link>
                  </p>
                  <p>
                    <Link to="/">How much does a new website cost?</Link>
                  </p>
                  <p>
                    <Link to="/">How much does a new website cost?</Link>
                  </p>
                  <p>
                    <Link to="/">How much does a new website cost?</Link>
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="search_item">
                <div className="course_name">
                  <h2>UI/UX Design</h2>
                </div>
                <div className="link">
                  <p>
                    <Link to="/">How much does a new website cost?</Link>
                  </p>
                  <p>
                    <Link to="/">How much does a new website cost?</Link>
                  </p>
                  <p>
                    <Link to="/">How much does a new website cost?</Link>
                  </p>
                  <p>
                    <Link to="/">How much does a new website cost?</Link>
                  </p>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="search_item">
                <div className="course_name">
                  <h2>Android Application Development</h2>
                </div>
                <div className="link">
                  <p>
                    <Link to="/">How much does a new website cost?</Link>
                  </p>
                  <p>
                    <Link to="/">How much does a new website cost?</Link>
                  </p>
                  <p>
                    <Link to="/">How much does a new website cost?</Link>
                  </p>
                  <p>
                    <Link to="/">How much does a new website cost?</Link>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default SearchLink;
