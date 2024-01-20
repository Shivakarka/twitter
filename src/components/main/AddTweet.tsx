import { useState } from "react";
import { usePageContext } from "../../contexts/PageContext";
import "./addtweet.css";
import { TweetData } from "../../types/api";

interface AddTweetProps {
  setTweetThreadsState: React.Dispatch<React.SetStateAction<TweetData[][]>>;
}

const AddTweet = ({ setTweetThreadsState }: AddTweetProps) => {
  const data = usePageContext();

  const [tweet, setTweet] = useState("");

  const handleAddTweet = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTweetThreadsState((prevTweetThreads) => [
      [
        {
          id: Date.now().toString(),
          user: {
            userId: data?.loggedInUser?.userId,
            userName: data?.loggedInUser?.userName,
            imageData: {
              url: data?.loggedInUser?.imageData?.url,
              alt: data?.loggedInUser?.imageData?.alt,
            },
            followers: data?.loggedInUser?.followers,
            following: data?.loggedInUser?.following,
            desc: data?.loggedInUser?.desc,
            blueTick: data?.loggedInUser?.blueTick,
            joiningDate: data?.loggedInUser?.joiningDate,
          },
          textArea: tweet,
          replies: 0,
          reTweets: 0,
          likes: 0,
          views: 0,
          tweetTime: Date.now(),
        },
      ],
      ...prevTweetThreads,
    ]);
    setTweet("");
  };

  return (
    <form className="add-container" onSubmit={handleAddTweet}>
      <div className="profile-details">
        {" "}
        <img
          src={data?.loggedInUser?.imageData?.url}
          alt={data?.loggedInUser?.imageData?.alt}
        />
        <textarea
          name="tweet"
          placeholder="What's happening?"
          value={tweet}
          onChange={(e) => {
            if (e.target.value.length > 280) {
              alert("Tweet cannot be more than 280 characters");
            }
            setTweet(e.target.value);
          }}
        />
      </div>
      <button type="submit">
        <p>Tweet</p>
      </button>
    </form>
  );
};

export default AddTweet;
