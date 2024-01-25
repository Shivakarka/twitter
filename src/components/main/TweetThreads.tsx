import { TweetData } from "../../types/api";
import Tweet from "./Tweet";

interface TweetThreadsProps {
  tweetThreads: TweetData[][];
}

const TweetThreads = ({ tweetThreads }: TweetThreadsProps) => {
  return (
    <div>
      {tweetThreads?.map((thread, threadIndex) => (
        <div key={threadIndex} className="threads">
          {thread.length > 1 ? <div className="line"></div> : null}
          {thread?.map((tweet, tweetIndex) => (
            <Tweet tweet={tweet} tweetIndex={tweetIndex} key={tweet?.id} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default TweetThreads;
