import React from "react";
import Header from "../components/Header";
import SearchForm from "../components/SearchForm";

const TVDetail = () => {
  return (
    <div>
      <Header />
      <div className="main-container">
        <SearchForm />
        <h2>TV Detail here</h2>
      </div>
    </div>
  );
};

export default TVDetail;
