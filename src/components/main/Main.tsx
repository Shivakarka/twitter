import { useState } from "react";
import "../../styles/main/Main.css";
import TrendingFeeds from "./TrendingFeeds";
import FollowedTimelineFeeds from "./FollowedTimelineFeeds";
import PageHeader from "./PageHeader";
import PageSections from "./PageSections";

const Main = () => {
  const [page, setPage] = useState("forYou");

  return (
    <div className={"main"}>
      <div className="pageTitle">
        <PageHeader />
        <PageSections page={page} setPage={setPage} />
      </div>
      {page === "forYou" ? <TrendingFeeds /> : <FollowedTimelineFeeds />}
    </div>
  );
};

export default Main;
