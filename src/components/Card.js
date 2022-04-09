import React from "react";

const Card = ({ media, largeDisplay }) => {
  const dateFormater = (date) => {
    return date.slice(0, 4);
  };

  const mediaTypeFormater = (type) => {
    if (type === "movie") return "Movie";
    else if (type === "tv") return "TV Series";
    else return "N/A";
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
        </div>
      )}
    </div>
  );
};

export default Card;
