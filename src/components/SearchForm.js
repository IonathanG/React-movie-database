import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SearchForm = () => {
  const [search, setSearch] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search !== null) {
      navigate(`/search/${search}`);
    }
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search for Movies or TV Series"
        onChange={(e) => setSearch(e.target.value)}
      />
      <Link to={search ? `/search/${search}` : ""}>
        <img src="/assets/images/icon-search.svg" alt="" />
      </Link>
    </form>
  );
};

export default SearchForm;
