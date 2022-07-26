import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SearchForm from "../components/SearchForm";
import MediaDetail from "../components/MediaDetail";
import axios from "axios";

const TVDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      )
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
        console.log(res.data);
      });
  }, []);

  return (
    <>
      <div className="main-container">
        <SearchForm />
        <div className="media-detail">
          {isLoading && <div>Content Loading...</div>}
          {!isLoading && <MediaDetail data={data} dataType={"tv"} />}
        </div>
      </div>
    </>
  );
};

export default TVDetail;
