import { useState } from "react";
import { usePageContext } from "../../contexts/PageContext";
import "./addtweet.css";

interface AddTweetProps {
  setTweetThreadsState: React.Dispatch<
    React.SetStateAction<
      | {
          id: string;
          user: {
            userId: string;
            userName: string;
            imageData: {
              url: string;
              alt: string;
            };
          };
          textArea: string;
          comments: {
            id: string;
            user: {
              userName: string;
              imageData: {
                url: string;
                alt: string;
              };
            };
            comment: string;
            replies: number;
            reTweets: number;
            likes: number;
            views: number;
          }[];
        }[][]
    >
  >;
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
          },
          textArea: tweet,
          comments: [],
          replies: 0,
          reTweets: 0,
          likes: 0,
          views: 0,
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
