import { usePageContext } from "../../contexts/PageContext";
import { LockedIcon, VerifiedIcon } from "../../utils/svgs";
import "./UserProfile.css";

interface UserProfileProps {
  location: string;
}

const UserProfile = ({ location }: UserProfileProps) => {
  const data = usePageContext();
  return (
    <>
      <span className="user-info">
        <div className="user-info-items">
          <img
            className="login"
            src={data?.loggedInUser?.imageData?.url}
            alt="profile"
          />
          <div className="user-name">
            <p id="name">{data?.loggedInUser?.userName}</p>
            <p id="id">@{data?.loggedInUser?.userId}</p>
          </div>
        </div>
        {location === "navbar" ? <LockedIcon /> : <VerifiedIcon />}
      </span>
    </>
  );
};

export default UserProfile;
