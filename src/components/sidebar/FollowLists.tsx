import { usePageContext } from "../../contexts/PageContext";
import UserProfile from "../user/UserProfile";
import "../../styles/sidebar/FollowList.css";

const FollowLists = () => {
  const data = usePageContext();

  const usersToFollowList = data?.followData?.usersToFollow;
  return (
    <div className="followList-container">
      <h2>Who to Follow</h2>
      <ul>
        {usersToFollowList?.map((_, index) => (
          <li key={index} className="profile-list">
            <UserProfile location="sidebar" index={index} />
            <button>
              <p>Follow</p>
            </button>
          </li>
        ))}
      </ul>
      <a
        href="https://twitter.com/explore/tabs/for-you"
        className="showMore"
        target="_blank"
      >
        Show More
      </a>
    </div>
  );
};

export default FollowLists;
