import React from "react";
import "./ProtfolioSlider.css";
import prot_slider from "../Port_data.js";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper";
function ProtfolioSlider() {
  return (
    <>
      <section className="prot_slider">
        <div className="prot_text">
          <h2>Have a look at our work!</h2>
          <p>our ALl Project</p>

          <div className="slider_prot">
            <Swiper
              // spaceBetween={}
              loop={true}
              slidesPerView={5}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                "@0.00": {
                  slidesPerView: 1,
                },
                "@0.75": {
                  slidesPerView: 3,
                },
                "@1.00": {
                  slidesPerView: 5,
                },
                "@1.50": {
                  slidesPerView: 5,
                },
              }}
              navigation={true}
              modules={[Autoplay]}
              className="mySwiper"
            >
              {prot_slider.map((data) => (
                <SwiperSlide key={data.id}>
                  <img
                    style={{ width: 400, height: 300 }}
                    src={data.img}
                    alt=""
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProtfolioSlider;
