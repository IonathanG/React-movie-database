import React from "react";
import Header from "../components/Header";
import SearchForm from "../components/SearchForm";

const TVShows = () => {
  return (
    <div>
      <Header />
      <div className="home main-container">
        <SearchForm />
        <h1>TV Shows</h1>
      </div>
    </div>
  );
};

export default TVShows;
