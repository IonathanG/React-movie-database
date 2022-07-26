import React from "react";
import AllTV from "../components/AllTV";
import SearchForm from "../components/SearchForm";

const TVShows = () => {
  return (
    <div>
      <div className="main-container">
        <SearchForm />
        <AllTV />
      </div>
    </div>
  );
};

export default TVShows;
