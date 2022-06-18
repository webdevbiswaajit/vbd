import React from "react";
import Footer from "../Components/Footer/Footer";
import Menu from "../Components/Header/Menu";
import SearchHero from "../Components/Search/SearchHero/SearchHero";
import SearchLink from "../Components/Search/SearchLink/SearchLink";
import TopHeader from "../Components/TopHeader/TopHeader";

function Search() {
  return (
    <>
      <TopHeader />
      <Menu />
      <SearchHero />
      <SearchLink />
      <Footer />
    </>
  );
}

export default Search;
