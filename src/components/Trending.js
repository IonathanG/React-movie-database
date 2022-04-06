import React from "react";

const Trending = () => {
  return (
    <div className="trending">
      <h2>Trending</h2>
      <div className="trending__list">
        <div className="trending__list--media">
          <img
            src="assets/thumbnails/beyond-earth/trending/large.jpg"
            alt="thumbnail"
          />
          <div className="media-container">
            <p className="media-description">2019 - Movie - PG</p>
            <p className="media-title">Beyond Earth</p>
          </div>
        </div>
        <div className="trending__list--media">
          <img
            src="assets/thumbnails/bottom-gear/trending/large.jpg"
            alt="thumbnail"
          />
          <div className="media-container">
            <p className="media-description">2021 - Movie - PG</p>
            <p className="media-title">Bottom Gear</p>
          </div>
        </div>
        <div className="trending__list--media">
          <img
            src="assets/thumbnails/undiscovered-cities/trending/large.jpg"
            alt="thumbnail"
          />
          <div className="media-container">
            <p className="media-description">2019 - TV Series - E</p>
            <p className="media-title">Undiscovered Cities</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
