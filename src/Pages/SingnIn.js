import React from "react";
import Footer from "../Components/Footer/Footer";
import Menu from "../Components/Header/Menu";
import TopHeader from "../Components/TopHeader/TopHeader";
import Login from "./../Components/Create&Singin/Login/Login";

function SingnIn() {
  return (
    <>
      <TopHeader />
      <Menu />
      <Login />
      <Footer />
    </>
  );
}

export default SingnIn;
