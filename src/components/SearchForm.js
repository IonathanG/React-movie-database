import React from "react";

const SearchForm = () => {
  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <form className="search-form">
      <button type="submit" onClick={handleClick}>
        Search
      </button>
      <input type="search" placeholder="Search for Movies or TV Series" />
    </form>
  );
};

export default SearchForm;
<h2>Search Form</h2>;
