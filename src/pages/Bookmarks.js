import React from "react";
import AllBookmarks from "../components/AllBookmarks";
import Header from "../components/Header";
import SearchForm from "../components/SearchForm";

const Bookmarks = () => {
  return (
    <div>
      <Header />
      <div className="home main-container">
        <SearchForm />
        <AllBookmarks />
      </div>
    </div>
  );
};

export default Bookmarks;
