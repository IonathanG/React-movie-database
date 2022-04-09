import Card from "./Card";
import useFetch from "./useFetch";

const Recommended = () => {
  const { data: recommendedMovieList, isLoadingMovie } = useFetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=ed82f4c18f2964e75117c2dc65e2161d&language=en-US&page=1`
  );
  const { data: recommendedTVList, isLoadingTV } = useFetch(
    `https://api.themoviedb.org/3/tv/top_rated?api_key=ed82f4c18f2964e75117c2dc65e2161d&language=en-US&page=1`
  );

  return (
    <div className="main">
      <h2>Movies Recommended for You</h2>

      <div className="main__list">
        {isLoadingMovie && <div>Content Loading...</div>}
        {!isLoadingMovie &&
          recommendedMovieList
            .slice(0, 8)
            .map((recommended) => (
              <Card
                key={recommended.id}
                media={recommended}
                largeDisplay={false}
              />
            ))}
      </div>

      <h2>TV Series Recommended for You</h2>

      <div className="main__list">
        {isLoadingTV && <div>Content Loading...</div>}
        {!isLoadingTV &&
          recommendedTVList
            .slice(0, 8)
            .map((recommended) => (
              <Card
                key={recommended.id}
                media={recommended}
                largeDisplay={false}
              />
            ))}
      </div>
    </div>
  );
};

export default Recommended;
