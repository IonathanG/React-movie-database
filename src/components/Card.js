import React, { useState } from "react";

const Card = ({ media, largeDisplay, type }) => {
  const [isBookmarked, setIsBoomarked] = useState(false);
  const [mediaType] = useState(type);

  const dateFormater = (date) => {
    return date.slice(0, 4);
  };

  const mediaTypeFormater = (type) => {
    if (type === "movie") return "Movie";
    else if (type === "tv") return "TV Series";
    else return "N/A";
  };

  const handleBookmark = () => {
    let storedData = window.localStorage.medias
      ? window.localStorage.movies.split(",")
      : [];

    if (!storedData.includes(media.id.toString())) {
      storedData.push(media.id);
      window.localStorage.movies = storedData;
    } else {
      let newData = storedData.filter((id) => id != media.id);
      window.localStorage.medias = newData;
      window.location.reload();
    }
  };

  return (
    <div className="card">
      {largeDisplay && (
        <div className="trending__list--media">
          <img
            src={
              media.backdrop_path !== null
                ? `https://image.tmdb.org/t/p/w500${media.backdrop_path}`
                : "/assets/images/poster_wide.png"
            }
            alt="movie poster"
          />
          <div className="media-container">
            <p className="media-description">
              {media.release_date
                ? `${dateFormater(media.release_date)} - `
                : ""}
              {media.media_type ? mediaTypeFormater(media.media_type) : ""}
            </p>
            <p className="media-title">
              {media.title ? media.title : media.name}
            </p>
          </div>
          <div className="bookmark-tag" onClick={() => handleBookmark()}>
            <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
                stroke="#FFF"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>
          </div>
        </div>
      )}

      {!largeDisplay && (
        <div className="main__list--media">
          <img
            src={
              media.backdrop_path !== null
                ? `https://image.tmdb.org/t/p/w500${media.backdrop_path}`
                : "/assets/images/poster_wide.png"
            }
            alt="thumbnail"
          />
          <p className="media-description">
            {media.release_date ? `${dateFormater(media.release_date)} ` : ""}
            {media.media_type ? mediaTypeFormater(media.media_type) : ""}
          </p>
          <p className="media-title">
            {media.title ? media.title : media.name}
          </p>
          <div className="bookmark-tag">
            <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
                stroke="#FFF"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
