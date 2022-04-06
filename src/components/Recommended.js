import React from "react";

const Recommended = () => {
  return (
    <div className="recommended">
      <h2>Recommended for You</h2>
      <div className="recommended__list">
        <div className="recommended__list--media">
          <img
            src="assets/thumbnails/the-great-lands/regular/large.jpg"
            alt="thumbnail"
          />
          <p className="media-description">2019 - Movie - PG</p>
          <p className="media-title">The Great Lands</p>
        </div>
        <div className="recommended__list--media">
          <img
            src="assets/thumbnails/the-diary/regular/large.jpg"
            alt="thumbnail"
          />
          <p className="media-description">2019 - TV Series - PG</p>
          <p className="media-title">The Diary</p>
        </div>
        <div className="recommended__list--media">
          <img
            src="assets/thumbnails/earths-untouched/regular/large.jpg"
            alt="thumbnail"
          />
          <p className="media-description">2017 - Movie - 18+</p>
          <p className="media-title">Earth's Untouched</p>
        </div>
        <div className="recommended__list--media">
          <img
            src="assets/thumbnails/no-land-beyond/regular/large.jpg"
            alt="thumbnail"
          />
          <p className="media-description">2019 - Movie - PG</p>
          <p className="media-title">The Great Lands</p>
        </div>
        <div className="recommended__list--media">
          <img
            src="assets/thumbnails/during-the-hunt/regular/large.jpg"
            alt="thumbnail"
          />
          <p className="media-description">2016 - TV Series - PG</p>
          <p className="media-title">During the Hunt</p>
        </div>
        <div className="recommended__list--media">
          <img
            src="assets/thumbnails/autosport-the-series/regular/large.jpg"
            alt="thumbnail"
          />
          <p className="media-description">2016 - TV Series - PG</p>
          <p className="media-title">AutoSports The Series</p>
        </div>
        <div className="recommended__list--media">
          <img
            src="assets/thumbnails/same-answer-2/regular/large.jpg"
            alt="thumbnail"
          />
          <p className="media-description">2019 - Movie - E</p>
          <p className="media-title">No Land Beyond</p>
        </div>
        <div className="recommended__list--media">
          <img
            src="assets/thumbnails/below-echo/regular/large.jpg"
            alt="thumbnail"
          />
          <p className="media-description">2016 - TV Series - PG</p>
          <p className="media-title">Below Echo</p>
        </div>
      </div>
    </div>
  );
};

export default Recommended;
