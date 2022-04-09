import React from "react";
import Card from "./Card";
import useFetch from "./useFetch";

const Trending = () => {
  const { data: trendingList, isLoading } = useFetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=ed82f4c18f2964e75117c2dc65e2161d`
  );

  return (
    <div className="trending">
      <h2>Trending</h2>

      <div className="trending__list">
        {isLoading && <div>Content Loading...</div>}
        {!isLoading &&
          trendingList
            .slice(0, 6)
            .map((trending) => (
              <Card
                key={trending.id}
                media={trending}
                largeDisplay={true}
                type={trending.media_type}
              />
            ))}
      </div>
    </div>
  );
};

export default Trending;
