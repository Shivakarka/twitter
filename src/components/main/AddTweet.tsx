import { useState } from "react";
import { usePageContext } from "../../contexts/PageContext";
import "../../styles/main/Addtweet.css";
import { TweetData } from "../../types/api";
import { newTweet } from "../../utils/Helper";

interface AddTweetProps {
  setTweetThreadsState: React.Dispatch<React.SetStateAction<TweetData[][]>>;
}

const AddTweet = ({ setTweetThreadsState }: AddTweetProps) => {
  const data = usePageContext();

  const [tweet, setTweet] = useState("");

  const handleAddTweet = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTweetThreadsState((prevTweetThreads) => [
      [newTweet(tweet, data)],
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
