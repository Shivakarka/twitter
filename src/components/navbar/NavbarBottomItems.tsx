import { MoreOptions } from "../../utils/svgs";
import UserProfile from "../user/UserProfile";

const NavbarBottomItems = () => {
  return (
    <>
      <UserProfile location="navbar" />
      <span>
        <MoreOptions />
      </span>
    </>
  );
};

export default NavbarBottomItems;
