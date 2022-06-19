import React from "react";
import { Container } from "react-bootstrap";
import Rating from "react-rating";
import "./Testimonial.css";
import TesimonialData from "./TesimonialData.js";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

function Testimonial() {
  return (
    <>
      <section className="tetiomial">
        <Container>
          <div className="testimonial_small">
            <p>Testimonials</p>
          </div>
          <div className="testimonial_head">
            <h2>Why do people praise about The Virtual BD?</h2>
          </div>

          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 2,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            {TesimonialData.map((data) => (
              <SwiperSlide key={data.id}>
                <div className="review_card">
                  <div className="review_author">
                    <div className="review_img">
                      <img src={data.Timg} alt="" />
                    </div>
                    <div className="review_info">
                      <div className="reviw_star">
                        <Rating
                          initialRating={data.Trating}
                          readonly
                          emptySymbol="fa-regular fa-star"
                          fullSymbol="fa-solid fa-star"
                        ></Rating>
                      </div>
                      <div className="rivew_name">
                        <p>{data.name}</p>
                      </div>
                      <div className="rivew_degination">
                        <p>{data.Tdegicnation}</p>
                      </div>
                    </div>
                  </div>
                  <div className="review_text">
                    <p>{data.TReviweText}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </section>
    </>
  );
}

export default Testimonial;
