import React from "react";
import "./TeamMember.css";
import { Container } from "react-bootstrap";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { ExternalLink } from "react-external-link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import Teamdata from "./TeamData";

function TeamMember() {
  return (
    <>
      <section className="teamMember_area">
        <Container>
          <div className="teamMember_top">
            <p>Team Member</p>
          </div>
          <div className="teamMember_head">
            <h2>Get to know the people behind The Virtual BD</h2>
          </div>
          <div className="team_slider">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
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
                  slidesPerView: 3,
                },
              }}
              modules={[Pagination, Autoplay]}
              className="mySwiper"
            >
              {Teamdata.map((data) => (
                <SwiperSlide key={data.id}>
                  <div className="team_card">
                    <div className="team_img">
                      <img src={data.img} alt="" />
                    </div>
                    <div className="team_info">
                      <h2>{data.Tname}</h2>
                      <p>{data.TDegination}</p>
                      <div className="team_social">
                        <div className="team_social_icon">
                          <ExternalLink href="https://facebook.com">
                            <BsFacebook />
                          </ExternalLink>
                        </div>
                        <div className="team_social_icon">
                          <ExternalLink href="https://twitter.com/">
                            <BsTwitter />
                          </ExternalLink>
                        </div>
                        <div className="team_social_icon">
                          <ExternalLink href="https://instagram.com">
                            <BsInstagram />
                          </ExternalLink>
                        </div>
                        <div className="team_social_icon">
                          <ExternalLink href="https://linkdin.com">
                            <BsLinkedin />
                          </ExternalLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Container>
      </section>
    </>
  );
}

export default TeamMember;
