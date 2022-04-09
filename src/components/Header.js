import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <nav>
        <div className="logo">
          <svg width="33" height="27" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m26.463.408 3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-1.6a3.186 3.186 0 0 0-3.184 3.2l-.016 19.2a3.2 3.2 0 0 0 3.2 3.2h25.6a3.2 3.2 0 0 0 3.2-3.2V.408h-6.4Z"
              fill="#FC4747"
            />
          </svg>
        </div>
        <ul>
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>
              <img src="/assets/images/icon-nav-home.svg" alt="Home" />
            </li>
          </NavLink>
          <NavLink
            to="/movies"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>
              <img src="/assets/images/icon-nav-movies.svg" alt="Movies" />
            </li>
          </NavLink>
          <NavLink
            to="/tv-shows"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>
              <img
                src="/assets/images/icon-nav-tv-series.svg"
                alt="TV Series"
              />
            </li>
          </NavLink>
          <NavLink
            to="/bookmarks"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>
              <img src="/assets/images/icon-nav-bookmark.svg" alt="Bookmarks" />
            </li>
          </NavLink>
        </ul>
      </nav>
      <div className="profil">
        <img src="/assets/images/image-avatar.png" alt="image_avatar" />
      </div>
    </div>
  );
};

export default Header;
