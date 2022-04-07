import Card from "./Card";
import useFetch from "./useFetch";

const Recommended = () => {
  const { data: recommendedList, isLoading } = useFetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=ed82f4c18f2964e75117c2dc65e2161d&language=en-US&page=1`
  );

  return (
    <div className="recommended">
      <h2>Movies Recommended for You</h2>

      <div className="recommended__list">
        {!isLoading &&
          recommendedList
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
