import { createContext, useState } from "react";

const BookmarkContext = createContext();

export function BookmarkProvider({ children }) {
  const [serieItems, setSerieItems] = useState([]);
  const [movieItems, setMovieItems] = useState([]);

  const addBookmark = (genre, id) => {
    switch (genre) {
      case "movie":
        setMovieItems((prevState) => [...prevState, { genre, id }]);
        console.log("movie: " + movieItems);
        break;
      case "tv":
        setSerieItems((prevState) => [...prevState, { genre, id }]);
        console.log("tv: " + serieItems);
        break;
      default:
        return null;
    }
  };

  return (
    <BookmarkContext.Provider value={{ serieItems, movieItems, addBookmark }}>
      {children}
    </BookmarkContext.Provider>
  );
}

export default BookmarkContext;
