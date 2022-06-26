import React from "react";
import "./TeamMember.css";
import { Container } from "react-bootstrap";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
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
              spaceBetween={50}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
                1360: {
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
                          {data.Tfacebook && (
                            <ExternalLink href={data.Tfacebook}>
                              <BsFacebook />
                            </ExternalLink>
                          )}
                        </div>
                        <div className="team_social_icon">
                          {data.Ttwiter && (
                            <ExternalLink href={data.Ttwiter}>
                              <BsTwitter />
                            </ExternalLink>
                          )}
                        </div>
                        <div className="team_social_icon">
                          {data.TInstragram && (
                            <ExternalLink href={data.TInstragram}>
                              <BsInstagram />
                            </ExternalLink>
                          )}
                        </div>
                        <div className="team_social_icon">
                          {data.Tlinkdin && (
                            <ExternalLink href={data.Tlinkdin}>
                              <BsLinkedin />
                            </ExternalLink>
                          )}
                        </div>
                        <div className="team_social_icon">
                          {data.Tgmail && (
                            <ExternalLink href={data.Tgmail}>
                              <SiGmail />
                            </ExternalLink>
                          )}
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
