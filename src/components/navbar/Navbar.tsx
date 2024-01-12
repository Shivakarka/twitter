import { usePageContext } from "../../contexts/PageContext";
import "./navbar.css";
import MoreOptions from "../../utils/MoreOptions";

("");
const Navbar = () => {
  const data = usePageContext();

  return (
    <div className="nav-container">
      <div className="nav-top">
        <span>
          <img src={data.sideNavigationButtons?.[0]?.icon?.url} alt="logo" />
        </span>
        <div className="nav-row">
          <img src={data.sideNavigationButtons?.[1]?.icon?.url} alt="logo" />
          <p className="nav-title">Home</p>
        </div>

        <div className="nav-row">
          <img src={data.sideNavigationButtons?.[2]?.icon?.url} alt="logo" />
          <p className="nav-title">Explore</p>
        </div>

        <div className="nav-row">
          <img src={data.sideNavigationButtons?.[3]?.icon?.url} alt="logo" />
          <p className="nav-title">Notifications</p>
        </div>

        <div className="nav-row">
          <img src={data.sideNavigationButtons?.[4]?.icon?.url} alt="logo" />
          <p className="nav-title">Messages</p>
        </div>

        <div className="nav-row">
          <img src={data.sideNavigationButtons?.[5]?.icon?.url} alt="logo" />
          <p className="nav-title">Bookmarks</p>
        </div>

        <div className="nav-row">
          <img src={data.sideNavigationButtons?.[6]?.icon?.url} alt="logo" />
          <p className="bold" id="nav-title">
            Profile
          </p>
        </div>

        <button id="tweet-btn">Tweet</button>
      </div>

      <div className="bottom-nav">
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
        </span>
        <span>
          <MoreOptions />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
