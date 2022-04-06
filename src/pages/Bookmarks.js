import React from "react";
import Header from "../components/Header";
import SearchForm from "../components/SearchForm";

const Bookmarks = () => {
  return (
    <div>
      <Header />
      <div className="home main-container">
        <SearchForm />
        <h2>Bookmarked Movies</h2>
        <h2>Bookmarked TV Series</h2>
      </div>
    </div>
  );
};

export default Bookmarks;
