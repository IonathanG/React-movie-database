import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const AllBookmarks = () => {
  const [listMovies, setListMovies] = useState([]);
  const [listTV, setListTV] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [renderBookmark] = useState(true);

  useEffect(() => {
    getBookmarks("movie");
    getBookmarks("tv");
    console.log(renderBookmark);
  }, [renderBookmark]);

  const getBookmarks = (mediaType) => {
    let media_id = window.localStorage[mediaType]
      ? window.localStorage[mediaType].split(",")
      : [];

    for (let i = 0; i < media_id.length; i++) {
      axios
        .get(
          `https://api.themoviedb.org/3/${mediaType}/${media_id[i]}?api_key=ed82f4c18f2964e75117c2dc65e2161d&language=fr-FR`
        )
        .then((res) => {
          if (mediaType === "movie")
            setListMovies((listData) => [...listData, res.data]);
          else if (mediaType === "tv")
            setListTV((listData) => [...listData, res.data]);
          setIsLoading(false);
        });
    }
  };

  return (
    <div className="all-media">
      <h2>Bookmarked Movies</h2>
      <div className="main__list">
        {!isLoading &&
          listMovies.map((movie) => (
            <Card
              key={movie.id}
              media={movie}
              largeDisplay={false}
              type={"movie"}
              renderBookmark={renderBookmark}
            />
          ))}
        {!listMovies.length > 0 ? <p>No Bookmarks yet</p> : ""}
      </div>

      <h2>Bookmarked TV Series</h2>
      <div className="main__list">
        {!isLoading &&
          listTV.map((tv) => (
            <Card
              key={tv.id}
              media={tv}
              largeDisplay={false}
              type={"tv"}
              renderBookmark={renderBookmark}
            />
          ))}
        {!listTV.length > 0 ? <p>No Bookmarks yet</p> : ""}
      </div>
    </div>
  );
};

export default AllBookmarks;
