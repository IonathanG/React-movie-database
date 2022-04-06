import React from "react";
import Header from "../components/Header";
import SearchForm from "../components/SearchForm";

const Movies = () => {
  return (
    <div>
      <Header />
      <div className="home main-container">
        <SearchForm />
        <h1>Movies</h1>
      </div>
    </div>
  );
};

export default Movies;
