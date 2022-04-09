import React from "react";
import useFetch from "./useFetch";
import Card from "./Card";

const AllMovies = () => {
  const { data: movieList, isLoading } = useFetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=ed82f4c18f2964e75117c2dc65e2161d&language=en-US&page=1`
  );

  return (
    <div className="all-media">
      <h2>All Movies</h2>

      <div className="main__list">
        {!isLoading &&
          movieList
            .slice(0, 12)
            .map((movie) => (
              <Card key={movie.id} media={movie} largeDisplay={false} />
            ))}
      </div>
    </div>
  );
};

export default AllMovies;
