import { TimelineIcon } from "../../utils/svgs";

const PageHeader = () => {
  return (
    <div className="pageTitleTop">
      {" "}
      <h2>Home</h2>
      <div className="pageIcons">
        <span>
          <TimelineIcon />
        </span>
      </div>
    </div>
  );
};

export default PageHeader;
