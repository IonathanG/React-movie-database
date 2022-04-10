import React from "react";
import AllMovies from "../components/AllMovies";
import Header from "../components/Header";
import SearchForm from "../components/SearchForm";

const Movies = () => {
  return (
    <div>
      <Header />
      <div className="main-container">
        <SearchForm />
        <AllMovies />
      </div>
    </div>
  );
};

export default Movies;
