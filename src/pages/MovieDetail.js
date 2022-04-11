import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import SearchForm from "../components/SearchForm";
import axios from "axios";
import MediaDetail from "../components/MediaDetail";

const MovieDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=ed82f4c18f2964e75117c2dc65e2161d&language=en-US`
      )
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
        console.log(res.data);
      });
  }, []);

  return (
    <>
      <Header />
      <div className="main-container">
        <SearchForm />
        <div className="media-detail">
          {isLoading && <div>Content Loading...</div>}
          {!isLoading && <MediaDetail data={data} dataType={"movie"} />}
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
