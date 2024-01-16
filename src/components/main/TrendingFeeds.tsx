import { useEffect, useState } from "react";
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
import { TweetData } from "../../types/api";

const TrendingFeeds = () => {
  const data = usePageContext();
  const { tweetThreads } = data;

  useEffect(() => {
    setTweetThreadsState(tweetThreads);
  }, [tweetThreads]);

  const [likedTweets, setLikedTweets] = useState<string[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [tweetThreadsState, setTweetThreadsState] =
    useState<TweetData[][]>(tweetThreads);

  console.log(tweetThreadsState);

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
      <AddTweet setTweetThreadsState={setTweetThreadsState} />
      <div>
        {tweetThreadsState?.map((thread, threadIndex) => (
          <div key={threadIndex} className="threads">
            {thread.length > 1 ? <div className="line"></div> : null}
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
                      {likedTweets.includes(tweet?.id)
                        ? formatTweetCount(tweet?.likes + 1)
                        : formatTweetCount(tweet?.likes)}
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
