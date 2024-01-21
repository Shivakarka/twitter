import { useEffect, useState } from "react";
import { usePageContext } from "../../contexts/PageContext";
import AddTweet from "./AddTweet";
import "./trendingFeeds.css";
import { TweetData } from "../../types/api";
import Tweet from "./Tweet";

const TrendingFeeds = () => {
  const data = usePageContext();
  const { tweetThreads } = data;

  useEffect(() => {
    setTweetThreadsState(tweetThreads);
  }, [tweetThreads]);

  const [tweetThreadsState, setTweetThreadsState] =
    useState<TweetData[][]>(tweetThreads);

  return (
    <div>
      <AddTweet setTweetThreadsState={setTweetThreadsState} />
      <div>
        {tweetThreadsState?.map((thread, threadIndex) => (
          <div key={threadIndex} className="threads">
            {thread.length > 1 ? <div className="line"></div> : null}
            {thread?.map((tweet, tweetIndex) => (
              <Tweet tweet={tweet} tweetIndex={tweetIndex} key={tweet?.id} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingFeeds;
