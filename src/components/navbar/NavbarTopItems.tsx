import { usePageContext } from "../../contexts/PageContext";
import { TweetIcon } from "../../utils/svgs";

const NavbarTopItems = () => {
  const data = usePageContext();
  return (
    <>
      {data.sideNavigationButtons?.map((button, index) => (
        <div className="nav-row" key={index}>
          <img src={button?.icon?.url} alt="logo" />
          {button?.buttonText === "Notifications" && (
            <div className="notification">
              <p>1</p>
            </div>
          )}
          <p>{button?.buttonText}</p>
        </div>
      ))}

      <button id="tweet-btn">
        <span>Tweet</span>
        <p>
          <TweetIcon />
        </p>
      </button>
    </>
  );
};

export default NavbarTopItems;
