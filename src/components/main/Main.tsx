import { TimelineIcon } from "../../utils/svgs";
import "./main.css";
const Main = () => {
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
          <div className="pageSection">
            <p>For You</p>
            <div className="blueBottom"></div>
          </div>
          <div className="pageSection">
            <p>Following</p>
            <div className="blueBottom"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
