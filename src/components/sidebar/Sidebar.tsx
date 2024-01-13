import { SearchIcon } from "../../utils/svgs";
import "./sidebar.css";
const Sidebar = () => {
  return (
    <div className={"sidebar"}>
      <div className="search">
        <SearchIcon />
        <input type="text" placeholder="Search Twitter" />
      </div>
    </div>
  );
};

export default Sidebar;
