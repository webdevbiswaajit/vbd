import React from "react";
import AboutHero from "../Components/AboutUs/AboutHero/AboutHero";
import DigitalAgency from "../Components/AboutUs/DigitalAgency/DigitalAgency";
import HireUs from "../Components/AboutUs/HireUs/HireUs";
import IntroSlider from "../Components/AboutUs/Introduction/IntroSlider";
import Menu from "../Components/Header/Menu";
import TopHeader from "../Components/TopHeader/TopHeader";
import Footer from "./../Components/Footer/Footer";

function AboutUs() {
  return (
    <>
      <TopHeader />
      <Menu />
      <AboutHero />
      <DigitalAgency />
      <IntroSlider />
      <HireUs />
      <Footer />
    </>
  );
}

export default AboutUs;
