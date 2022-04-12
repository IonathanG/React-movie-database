import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { handleBookmark } from "./HandleStorage";

const MediaDetail = ({ data, dataType }) => {
  const navigate = useNavigate();
  const [isBookmarked, setIsBoomarked] = useState(false);
  const [animBookmark, setAnimBookmark] = useState(false);

  const genreFinder = () => {
    let genreArray = [];

    for (let i = 0; i < data.genre_ids.length; i++) {
      switch (data.genre_ids[i]) {
        case 28:
          genreArray.push(`Action`);
          break;
        case 12:
          genreArray.push(`Aventure`);
          break;
        case 16:
          genreArray.push(`Animation`);
          break;
        case 35:
          genreArray.push(`Comédie`);
          break;
        case 80:
          genreArray.push(`Policier`);
          break;
        case 99:
          genreArray.push(`Documentaire`);
          break;
        case 18:
          genreArray.push(`Drame`);
          break;
        case 10751:
          genreArray.push(`Famille`);
          break;
        case 14:
          genreArray.push(`Fantasy`);
          break;
        case 36:
          genreArray.push(`Histoire`);
          break;
        case 27:
          genreArray.push(`Horreur`);
          break;
        case 10402:
          genreArray.push(`Musique`);
          break;
        case 9648:
          genreArray.push(`Mystère`);
          break;
        case 10749:
          genreArray.push(`Romance`);
          break;
        case 878:
          genreArray.push(`Science-fiction`);
          break;
        case 10770:
          genreArray.push(`Téléfilm`);
          break;
        case 53:
          genreArray.push(`Thriller`);
          break;
        case 10752:
          genreArray.push(`Guerre`);
          break;
        case 37:
          genreArray.push(`Western`);
          break;
        default:
          break;
      }
    }
    return genreArray.map((genre) => <li key={genre}>{genre}</li>);
  };

  //set bookmark icon on rerender
  useEffect(() => {
    let storedData = window.localStorage[dataType]
      ? window.localStorage[dataType].split(",")
      : [];

    if (storedData.includes(data.id.toString())) {
      setIsBoomarked(true);
    }
  }, []);

  return (
    <div>
      <h2>{data.original_title ? data.original_title : data.original_name}</h2>
      <div className="media-detail__content">
        <img
          src={
            data.backdrop_path !== null
              ? `https://image.tmdb.org/t/p/w500${data.poster_path}`
              : "/assets/images/poster.jpg"
          }
          alt="thumbnail"
        />
        <div className="media-detail__content--container">
          <p>
            Release Date:{" "}
            {data.release_date ? data.release_date : data.first_air_date}
          </p>
          <p>{data.vote_average}/10 ⭐</p>
          <ul>
            {data.genre_ids
              ? genreFinder()
              : data.genres.map((genre, index) => (
                  <li key={index}>{genre.name}</li>
                ))}
          </ul>
          <p className="overview">{data.overview}</p>

          <div className="option-container">
            <button onClick={() => navigate(-1)}>⇤ Go Back</button>

            <div
              className={`add-bookmark ${animBookmark ? "animBookmark" : ""}`}
              onClick={() => {
                handleBookmark(data, dataType, setIsBoomarked, false);
                setAnimBookmark(true);
              }}
              onAnimationEnd={() => setAnimBookmark(false)}
            >
              <p>Add to Bookmarks</p>
              <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
                {isBookmarked ? (
                  <svg
                    width="12"
                    height="14"
                    xmlns="http://www.w3.org/2000/svg"
                  >
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
        </div>
      </div>
    </div>
  );
};

export default MediaDetail;
