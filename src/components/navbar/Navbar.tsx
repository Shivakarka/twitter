import "./navbar.css";
import NavbarTopItems from "./NavBarTopItems";
import NavbarBottomItems from "./NavbarBottomItems";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="nav-top">
        <NavbarTopItems />
      </div>

      <div className="bottom-nav">
        <NavbarBottomItems />
      </div>
    </div>
  );
};

export default Navbar;
