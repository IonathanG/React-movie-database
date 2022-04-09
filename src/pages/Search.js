import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import SearchForm from "../components/SearchForm";
import useFetch from "../components/useFetch";
import Card from "../components/Card";

const Search = () => {
  const { search } = useParams();
  console.log(`search: ${search}`);

  const { data: resultList, isLoading } = useFetch(
    `https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=${search}`
  );

  return (
    <div>
      <Header />
      <div className="search main-container">
        <SearchForm />
        <h2>Results for '{search}'</h2>

        <div className="main__list">
          {!isLoading &&
            resultList
              .slice(0, 12)
              .map((media) => (
                <Card key={media.id} media={media} largeDisplay={false} />
              ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
