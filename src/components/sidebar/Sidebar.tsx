import { SearchIcon } from "../../utils/svgs";
import FollowLists from "./FollowLists";
import Trending from "./Trending";
import "../../styles/sidebar/Sidebar.css";
const Sidebar = () => {
  return (
    <div className={"sidebar"}>
      <div className="search">
        <SearchIcon />
        <input type="text" placeholder="Search Twitter" />
      </div>
      <Trending />
      <FollowLists />
    </div>
  );
};

export default Sidebar;
