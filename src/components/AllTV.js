import React from "react";
import useFetch from "./useFetch";
import Card from "./Card";

const AllMovies = () => {
  const { data: TVSeriesList, isLoading } = useFetch(
    `https://api.themoviedb.org/3/tv/top_rated?api_key=ed82f4c18f2964e75117c2dc65e2161d&language=en-US&page=1`
  );

  return (
    <div className="all-media">
      <h2>All TV Series</h2>

      <div className="main__list">
        {!isLoading &&
          TVSeriesList.slice(0, 12).map((serie) => (
            <Card
              key={serie.id}
              media={serie}
              largeDisplay={false}
              type={"tv"}
            />
          ))}
      </div>
    </div>
  );
};

export default AllMovies;
