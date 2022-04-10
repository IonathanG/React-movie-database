import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Card = ({ media, largeDisplay, type, renderBookmark = false }) => {
  const [mediaType] = useState(type);
  const [isBookmarked, setIsBoomarked] = useState(false);
  const [animBookmark, setAnimBookmark] = useState(false);

  const dateFormater = (date) => {
    return date.slice(0, 4);
  };

  const mediaTypeFormater = (type) => {
    if (type === "movie") return "Movie";
    else if (type === "tv") return "TV Series";
    else return "N/A";
  };

  //save and delete bookmarks in local storage
  const handleBookmark = () => {
    let storedData = window.localStorage[mediaType]
      ? window.localStorage[mediaType].split(",")
      : [];

    if (!storedData.includes(media.id.toString())) {
      storedData.push(media.id);
      window.localStorage[mediaType] = storedData;
      setIsBoomarked(true);
    } else {
      let newData = storedData.filter((id) => id != media.id);
      window.localStorage[mediaType] = newData;
      setIsBoomarked(false);

      //reload only the bookmark page if item is deleted
      if (renderBookmark) window.location.reload();
    }
  };

  //set bookmark icon on rerender
  useEffect(() => {
    let storedData = window.localStorage[mediaType]
      ? window.localStorage[mediaType].split(",")
      : [];

    if (storedData.includes(media.id.toString())) {
      setIsBoomarked(true);
    }
  }, []);

  return (
    <div className="card">
      {/* large display for Trending */}
      {largeDisplay && (
        <div className="trending__list--media">
          <Link
            className="link-large"
            to={
              mediaType === "movie"
                ? `/movie-detail/${media.id}`
                : `/tv-detail/${media.id}`
            }
          >
            <img
              src={
                media.backdrop_path !== null
                  ? `https://image.tmdb.org/t/p/w500${media.backdrop_path}`
                  : "/assets/images/poster_wide.png"
              }
              alt="movie poster"
            />
          </Link>
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
          <div
            className={`bookmark-tag ${animBookmark ? "animBookmark" : ""}`}
            onClick={() => {
              handleBookmark();
              setAnimBookmark(true);
            }}
            onAnimationEnd={() => setAnimBookmark(false)}
          >
            <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
              {isBookmarked ? (
                <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10.61 0c.14 0 .273.028.4.083a1.03 1.03 0 0 1 .657.953v11.928a1.03 1.03 0 0 1-.656.953c-.116.05-.25.074-.402.074-.291 0-.543-.099-.756-.296L5.833 9.77l-4.02 3.924c-.218.203-.47.305-.756.305a.995.995 0 0 1-.4-.083A1.03 1.03 0 0 1 0 12.964V1.036A1.03 1.03 0 0 1 .656.083.995.995 0 0 1 1.057 0h9.552Z"
                    fill="#FFF"
                  />
                </svg>
              ) : (
                <path
                  d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
                  stroke="#FFF"
                  strokeWidth="1.5"
                  fill="none"
                />
              )}
            </svg>
          </div>
        </div>
      )}

      {/* small card for main display */}
      {!largeDisplay && (
        <div className="main__list--media">
          <Link
            to={
              mediaType === "movie"
                ? `/movie-detail/${media.id}`
                : `/tv-detail/${media.id}`
            }
          >
            <img
              src={
                media.backdrop_path !== null
                  ? `https://image.tmdb.org/t/p/w500${media.backdrop_path}`
                  : "/assets/images/poster_wide.png"
              }
              alt="thumbnail"
            />
          </Link>
          <p className="media-description">
            {media.release_date ? `${dateFormater(media.release_date)} ` : ""}
            {media.media_type ? mediaTypeFormater(media.media_type) : ""}
          </p>
          <p className="media-title">
            {media.title ? media.title : media.name}
          </p>
          <div
            className={`bookmark-tag ${animBookmark ? "animBookmark" : ""}`}
            onClick={() => {
              handleBookmark();
              setAnimBookmark(true);
            }}
            onAnimationEnd={() => setAnimBookmark(false)}
          >
            <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
              {isBookmarked ? (
                <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10.61 0c.14 0 .273.028.4.083a1.03 1.03 0 0 1 .657.953v11.928a1.03 1.03 0 0 1-.656.953c-.116.05-.25.074-.402.074-.291 0-.543-.099-.756-.296L5.833 9.77l-4.02 3.924c-.218.203-.47.305-.756.305a.995.995 0 0 1-.4-.083A1.03 1.03 0 0 1 0 12.964V1.036A1.03 1.03 0 0 1 .656.083.995.995 0 0 1 1.057 0h9.552Z"
                    fill="#FFF"
                  />
                </svg>
              ) : (
                <path
                  d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
                  stroke="#FFF"
                  strokeWidth="1.5"
                  fill="none"
                />
              )}
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
