import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./AuthorSlider.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay } from "swiper";
import { Container, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import introduction from "./Data";

function AuthorSlider() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {introduction.map((data) => (
          <SwiperSlide key={data.id}>
            <Container>
              <Row className="author">
                <Col md={4}>
                  <div className="intro_img">
                    <img src={data.pic} alt="" />
                  </div>
                </Col>
                <Col md={8}>
                  <div className="author_text">
                    <p>{data.intro_text}</p>
                    <p>{data.intro_person}</p>
                  </div>
                  <div className="author_info">
                    <h3>{data.name}</h3>
                    <small>{data.designation}</small>
                    <div className="author_social_media">
                      <ul>
                        <li>
                          <Link to="/">
                            <FaTwitter />
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <FaFacebookF />
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <FaInstagram />
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <FaLinkedinIn />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default AuthorSlider;
