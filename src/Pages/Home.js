import React from "react";
import Counter from "../Components/Counter/Counter";
import Footer from "../Components/Footer/Footer";
import Menu from "../Components/Header/Menu";
import Hero from "../Components/Hero/Hero";
import TopHeader from "../Components/TopHeader/TopHeader";
import Testimonial from "../Components/Testimonial/Testimonial";
import TeamMember from "../Components/TeamMember/TeamMember";
import BrandSlider from "../Components/BrandSlider/BrandSlider";
import GlobalBuisness from "./../Components/Services/GlobalBuisness/GlobalBuisness";
import Provide from "./../Components/Provived/Provide";

function Home() {
  return (
    <div>
      <TopHeader />
      <Menu />
      <Hero />
      <Provide />
      <Testimonial />
      <TeamMember />
      <Counter />
      <BrandSlider />
      <GlobalBuisness />
      <Footer />
    </div>
  );
}

export default Home;
