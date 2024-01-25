import { usePageContext } from "../../contexts/PageContext";
import { getUserData } from "../../utils/Helper";
import { LockedIcon, VerifiedIcon } from "../../utils/svgs";
import "../../styles/user/UserProfile.css";

interface UserProfileProps {
  location: string;
  index?: number;
}

const UserProfile = ({ location, index }: UserProfileProps) => {
  const data = usePageContext();
  const isNavbar = location === "navbar";

  const userData = getUserData(isNavbar, data, index);

  if (!userData) return null;

  const { imageData, userName, userId } = userData;

  return (
    <>
      <span className="user-info">
        <div
          className={`user-info-items ${
            !isNavbar ? "sidebar-profile" : "navbar-profile"
          }`}
        >
          <img className="login" src={imageData?.url} alt={imageData?.alt} />
          <div
            className={`user-name ${
              !isNavbar ? "sidebar-username" : "navbar-username"
            }`}
          >
            <p id="name">{userName}</p>
            <p id="id">@{userId}</p>
          </div>
        </div>
        <span className={`${!isNavbar ? "verified-icon" : "locked"}`}>
          {isNavbar ? <LockedIcon /> : <VerifiedIcon />}
        </span>
      </span>
    </>
  );
};

export default UserProfile;
