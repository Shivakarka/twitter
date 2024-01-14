import { TrendData } from "../../types/api";
import { formatTweetCount } from "../../utils/Helper";

const TrendingItem = ({ category, text, hashTags, tweets }: TrendData) => {
  return (
    <div className="trending">
      <p>{category ? `${category} · Trending` : "Trending in India"}</p>
      <span>
        <a
          href={`https://twitter.com/search?q=${text}&src=trend_click&vertical=trends`}
          target="_blank"
        >
          {text}
        </a>
      </span>
      <p>
        {hashTags && (
          <>
            Trending with{" "}
            {hashTags.map((tag, index) => (
              <span className="hashtags" key={index}>
                <a
                  href={`https://twitter.com/search?q=${tag.slice(
                    1
                  )}&src=trend_click&vertical=trends`}
                  target="_blank"
                >
                  {tag}
                </a>{" "}
              </span>
            ))}
          </>
        )}
        {tweets && <>{formatTweetCount(tweets)} Tweets</>}
      </p>
    </div>
  );
};

export default TrendingItem;
