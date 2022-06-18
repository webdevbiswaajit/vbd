import React from "react";
import Apply from "../Components/Career/Apply/Apply";
import CareerHero from "../Components/Career/CareerHero/CareerHero";
import Menu from "../Components/Header/Menu";
import Footer from "./../Components/Footer/Footer";
import TopHeader from "./../Components/TopHeader/TopHeader";

function Career() {
  return (
    <>
      <TopHeader />
      <Menu />
      <CareerHero />
      <Apply />
      <Footer />
    </>
  );
}

export default Career;
