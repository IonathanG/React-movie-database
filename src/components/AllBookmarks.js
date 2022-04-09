import React, { useEffect, useState } from "react";
import axios from "axios";
import useFetch from "./useFetch";
import Card from "./Card";

const AllBookmarks = () => {
  const [listData, setListData] = useState([]);
  const { data: mediaList, isLoading } = useFetch(``);

  useEffect(() => {
    let moviesid = window.localStorage.movies
      ? window.localStorage.movies.split(",")
      : [];

    for (let i = 0; i < moviesid.length; i++) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${moviesid[i]}?api_key=ed82f4c18f2964e75117c2dc65e2161d&language=fr-FR`
        )
        .then((res) => setListData((listData) => [...listData, res.data]));
    }
  }, []);

  return (
    <div className="all-media">
      <h2>All Bookmarks</h2>
      <div className="main__list">
        {!isLoading &&
          mediaList.map((media) => (
            <Card key={media.id} media={media} largeDisplay={false} />
          ))}
      </div>
    </div>
  );
};

export default AllBookmarks;
