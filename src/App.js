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
import Header from "./components/Header";
import { BookmarkProvider } from "./context/BookmarkContext";

function App() {
  return (
    <div className="App">
      <BookmarkProvider>
        <BrowserRouter>
          <Header />
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
        </BrowserRouter>
      </BookmarkProvider>
    </div>
  );
}

export default App;
