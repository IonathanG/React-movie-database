import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TVShows from "./pages/TVShows";
import Bookmarks from "./pages/Bookmarks";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";
import MovieDetail from "./pages/MovieDetail";
import TVDetail from "./pages/TVDetail";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tv-shows" element={<TVShows />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/search/:search" element={<Search />} />
          <Route path="/movie-detail/:id" element={<MovieDetail />} />
          <Route path="/tv-detail/:id" element={<TVDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
