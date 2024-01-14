import { usePageContext } from "../../contexts/PageContext";
import { LockedIcon, VerifiedIcon } from "../../utils/svgs";
import "./UserProfile.css";

interface UserProfileProps {
  location: string;
  index?: number;
}

const UserProfile = ({ location, index }: UserProfileProps) => {
  const data = usePageContext();

  const isNavbar = location === "navbar";

  return (
    <>
      <span className="user-info">
        <div
          className={`user-info-items ${!isNavbar ? "sidebar-profile" : ""}`}
        >
          <img
            className="login"
            src={
              isNavbar
                ? data?.loggedInUser?.imageData?.url
                : data?.followData?.usersToFollow?.[Number(index)]?.imageData
                    ?.url
            }
            alt={
              isNavbar
                ? data?.loggedInUser?.imageData?.alt
                : data?.followData?.usersToFollow?.[Number(index)]?.imageData
                    ?.alt
            }
          />
          <div className="user-name">
            <p id="name">
              {isNavbar
                ? data?.loggedInUser?.userName
                : data?.followData?.usersToFollow?.[Number(index)].userName}
            </p>
            <p id="id">
              @
              {isNavbar
                ? data?.loggedInUser?.userId
                : data?.followData?.usersToFollow?.[Number(index)].userId}
            </p>
          </div>
        </div>
        <span className={`${!isNavbar ? "verified-icon" : ""}`}>
          {location === "navbar" ? <LockedIcon /> : <VerifiedIcon />}
        </span>
      </span>
    </>
  );
};

export default UserProfile;
