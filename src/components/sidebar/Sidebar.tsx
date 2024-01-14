import { SearchIcon } from "../../utils/svgs";
import Trending from "./Trending";
import "./sidebar.css";
const Sidebar = () => {
  return (
    <div className={"sidebar"}>
      <div className="search">
        <SearchIcon />
        <input type="text" placeholder="Search Twitter" />
      </div>
      <Trending />
    </div>
  );
};

export default Sidebar;
