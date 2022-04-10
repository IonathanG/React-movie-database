import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Recommended from "../components/Recommended";
import SearchForm from "../components/SearchForm";
import Trending from "../components/Trending";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="main-container">
        <SearchForm />
        <Trending />
        <Recommended />
      </div>
    </div>
  );
};

export default Home;
