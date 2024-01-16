import { useState } from "react";
import { usePageContext } from "../../contexts/PageContext";
import { formatTweetCount } from "../../utils/Helper";
import {
  CommentIcon,
  LikedIcon,
  RetweetIcon,
  ShareIcon,
  UnlikedIcon,
  VerifiedIcon,
} from "../../utils/svgs";
import AddTweet from "./AddTweet";
import "./trendingFeeds.css";

const TrendingFeeds = () => {
  const data = usePageContext();
  const { tweetThreads } = data;

  const [likedTweets, setLikedTweets] = useState<string[]>([]);

  const handleLikeClick = (tweetId: string) => {
    if (likedTweets.includes(tweetId)) {
      // Unlike
      setLikedTweets((prevLikedTweets) =>
        prevLikedTweets.filter((id) => id !== tweetId)
      );
    } else {
      // Like
      setLikedTweets((prevLikedTweets) => [...prevLikedTweets, tweetId]);
    }
  };

  return (
    <div>
      <AddTweet />
      <div>
        {tweetThreads?.map((thread, threadIndex) => (
          <div key={threadIndex} className="threads">
            <div className="line"></div>
            {thread?.map((tweet, tweetIndex) => (
              <div key={tweet?.id} className="tweets">
                <img
                  src={tweet?.user?.imageData?.url}
                  alt={tweet?.user?.imageData?.alt}
                  width={50}
                  height={50}
                />
                <div className="tweet-userinfo">
                  <p>
                    <span>
                      {" "}
                      {tweet?.user?.userName}
                      {<VerifiedIcon />}{" "}
                    </span>
                    <span className="userId">@{tweet?.user?.userId}</span>
                    <span id="dot"></span>
                    <span className="tweet-date">Jan 20</span>
                  </p>
                  <div className="reply">
                    {tweetIndex % 2 !== 0 ? (
                      <p>
                        Replying to<span>@{tweet?.user?.userId}</span>
                      </p>
                    ) : null}
                  </div>
                  <p>{tweet?.textArea}</p>
                  <div className="tweet-icons">
                    <span>
                      {<CommentIcon />}
                      {formatTweetCount(tweet?.replies) || 0}
                    </span>
                    <span>
                      {<RetweetIcon />}
                      {formatTweetCount(tweet?.reTweets) || 0}
                    </span>
                    <span onClick={() => handleLikeClick(tweet?.id)}>
                      {likedTweets.includes(tweet?.id) ? (
                        <LikedIcon />
                      ) : (
                        <UnlikedIcon />
                      )}
                      {formatTweetCount(tweet?.likes) || 0}
                    </span>
                    <span>
                      {<ShareIcon />}
                      {formatTweetCount(tweet?.views) || 0}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingFeeds;
