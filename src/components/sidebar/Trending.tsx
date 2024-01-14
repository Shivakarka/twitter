import { usePageContext } from "../../contexts/PageContext";
import { formatTweetCount } from "../../utils/Helper";
import "./trending.css";

const Trending = () => {
  const data = usePageContext();

  if (!data) return null;

  return (
    <div className="trending-container">
      <h2>{data?.trendingData?.title}</h2>
      <div className="trending">
        <p>Trending in India</p>
        <span>
          <a
            href={`https://twitter.com/search?q=${data?.trendingData?.trends?.[0]?.text.slice(
              1
            )}&src=trend_click&vertical=trends`}
            target="_blank"
          >
            {data?.trendingData?.trends?.[0]?.text}
          </a>
        </span>
        <p>
          {formatTweetCount(data?.trendingData?.trends?.[0]?.tweets)} Tweets
        </p>
      </div>
      <div className="trending">
        <p>{data?.trendingData?.trends?.[1]?.category} · Trending</p>
        <span>
          <a
            href={`https://twitter.com/search?q=${data?.trendingData?.trends?.[1]?.text}&src=trend_click&vertical=trends`}
            target="_blank"
          >
            {data?.trendingData?.trends?.[1]?.text}
          </a>
        </span>
        <p>
          Trending with{" "}
          <span className="hashtags">
            <a
              href={`https://twitter.com/search?q=${data?.trendingData?.trends?.[1]?.hashTags?.[0].slice(
                1
              )}&src=trend_click&vertical=trends`}
              target="_blank"
            >
              {data?.trendingData?.trends?.[1]?.hashTags?.[0]}
            </a>{" "}
          </span>
          <span className="hashtags">
            <a
              href={`https://twitter.com/search?q=${data?.trendingData?.trends?.[1]?.hashTags?.[1].slice(
                1
              )}&src=trend_click&vertical=trends`}
              target="_blank"
            >
              {data?.trendingData?.trends?.[1]?.hashTags?.[1]}
            </a>
          </span>
        </p>
      </div>
      <div className="trending">
        <p>{data?.trendingData?.trends?.[2]?.category} · Trending</p>
        <span>
          <a
            href={`https://twitter.com/search?q=${data?.trendingData?.trends?.[2]?.text}&src=trend_click&vertical=trends`}
            target="_blank"
          >
            {data?.trendingData?.trends?.[2]?.text.toUpperCase()}
          </a>
        </span>
        <p>
          {formatTweetCount(data?.trendingData?.trends?.[2]?.tweets)} Tweets
        </p>
      </div>
      <div className="trending">
        <p>{data?.trendingData?.trends?.[3]?.category} · Trending</p>
        <span>
          <a
            href={`https://twitter.com/search?q=${data?.trendingData?.trends?.[3]?.text}&src=trend_click&vertical=trends`}
            target="_blank"
          >
            {data?.trendingData?.trends?.[3]?.text}
          </a>
        </span>
        <p>
          Trending with{" "}
          <span className="hashtags">
            <a
              href={`https://twitter.com/search?q=${data?.trendingData?.trends?.[3]?.hashTags?.[0].slice(
                1
              )}&src=trend_click&vertical=trends`}
              target="_blank"
            >
              {data?.trendingData?.trends?.[3]?.hashTags?.[0]}
            </a>{" "}
          </span>
          <span className="hashtags">
            <a
              href={`https://twitter.com/search?q=${data?.trendingData?.trends?.[3]?.hashTags?.[1].slice(
                1
              )}&src=trend_click&vertical=trends`}
              target="_blank"
            >
              {data?.trendingData?.trends?.[3]?.hashTags?.[1]}
            </a>
          </span>
        </p>
      </div>
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
