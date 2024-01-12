import { usePageContext } from "../../contexts/PageContext";
import MoreOptions from "../../utils/MoreOptions";

const NavbarBottomItems = () => {
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
      </span>
      <span>
        <MoreOptions />
      </span>
    </>
  );
};

export default NavbarBottomItems;
