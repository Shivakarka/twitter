import { usePageContext } from "../../contexts/PageContext";
import { formatTweetCount } from "../../utils/Helper";
import {
  CommentIcon,
  LikeIcon,
  RetweetIcon,
  ShareIcon,
  VerifiedIcon,
} from "../../utils/svgs";
import AddTweet from "./AddTweet";
import "./trendingFeeds.css";

const TrendingFeeds = () => {
  const data = usePageContext();
  const { tweetThreads } = data;

  return (
    <div>
      <AddTweet />
      <div>
        {tweetThreads?.map((thread, threadIndex) => (
          <div key={threadIndex} className="threads">
            {thread?.map((tweet) => (
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
                    <span>
                      {<LikeIcon />}
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
