import { usePageContext } from "../../contexts/PageContext";
import TrendingItem from "./TrendingItem";
import "../../styles/sidebar/Trending.css";

const Trending = () => {
  const data = usePageContext();

  if (!data) return null;

  return (
    <div className="trending-container">
      <h2>{data.trendingData?.title}</h2>

      {data.trendingData?.trends?.map((trend, index) => (
        <TrendingItem key={index} {...trend} />
      ))}

      <a
        href="https://twitter.com/explore/tabs/for-you"
        className="showMore"
        target="_blank"
      >
        Show More
      </a>
    </div>
  );
};

export default Trending;
