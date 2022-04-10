import React from "react";
import AllTV from "../components/AllTV";
import Header from "../components/Header";
import SearchForm from "../components/SearchForm";

const TVShows = () => {
  return (
    <div>
      <Header />
      <div className="main-container">
        <SearchForm />
        <AllTV />
      </div>
    </div>
  );
};

export default TVShows;
