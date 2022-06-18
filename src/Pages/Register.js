import React from "react";
import TopHeader from "./../Components/TopHeader/TopHeader";
import Menu from "./../Components/Header/Menu";
import RegisterComp from "./../Components/Create&Singin/Register/RegisterComp";
import Footer from "./../Components/Footer/Footer";

function Register() {
  return (
    <>
      <TopHeader />
      <Menu />
      <RegisterComp />
      <Footer />
    </>
  );
}

export default Register;
