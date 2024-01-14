import { useState } from "react";
import { TimelineIcon } from "../../utils/svgs";
import "./main.css";
import TrendingFeeds from "./TrendingFeeds";
import FollowedTimelineFeeds from "./FollowedTimelineFeeds";

const Main = () => {
  const [page, setPage] = useState("forYou");

  return (
    <div className={"main"}>
      <div className="pageTitle">
        <div className="pageTitleTop">
          {" "}
          <h2>Home</h2>
          <div className="pageIcons">
            <span>
              <TimelineIcon />
            </span>
          </div>
        </div>
        <div className="pageTitleBottom">
          <div className="pageSection" onClick={() => setPage("forYou")}>
            <p>For You</p>
            <div
              className={`blueBottom ${page === "forYou" && "showBottom"}`}
            ></div>
          </div>
          <div className="pageSection" onClick={() => setPage("following")}>
            <p>Following</p>
            <div
              className={`blueBottom ${page !== "forYou" && "showBottom"}`}
            ></div>
          </div>
        </div>
      </div>
      {page === "forYou" ? <TrendingFeeds /> : <FollowedTimelineFeeds />}
    </div>
  );
};

export default Main;
