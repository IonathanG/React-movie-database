import React from "react";
import AllMovies from "../components/AllMovies";
import SearchForm from "../components/SearchForm";

const Movies = () => {
  return (
    <div>
      <div className="main-container">
        <SearchForm />
        <AllMovies />
      </div>
    </div>
  );
};

export default Movies;
