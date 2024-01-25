import { useEffect, useState } from "react";
import { usePageContext } from "../../contexts/PageContext";
import AddTweet from "./AddTweet";
import "../../styles/main/TrendingFeeds.css";
import { TweetData } from "../../types/api";
import TweetThreads from "./TweetThreads";

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
      <TweetThreads tweetThreads={tweetThreadsState} />
    </div>
  );
};

export default TrendingFeeds;
