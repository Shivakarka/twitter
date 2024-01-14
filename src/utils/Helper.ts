import { IUserData, PageResponse } from "../types/api";

const formatTweetCount = (count: number | undefined) => {
  if (count === undefined) return;
  if (count < 1000) {
    return count.toString();
  } else if (count < 100000) {
    return (count / 1000).toFixed(1) + "k";
  } else if (count < 1000000) {
    return (count / 1000).toFixed(0) + "k";
  } else {
    return (count / 1000000).toFixed(1) + "m";
  }
};

const getUserData = (
  isNavbar: boolean,
  data: PageResponse,
  index: number | undefined
): IUserData | undefined => {
  if (isNavbar) {
    return {
      imageData: data?.loggedInUser?.imageData,
      userName: data?.loggedInUser?.userName || "",
      userId: data?.loggedInUser?.userId || "",
    };
  } else {
    const userToFollow = data?.followData?.usersToFollow?.[Number(index)];
    return {
      imageData: userToFollow?.imageData,
      userName: userToFollow?.userName || "",
      userId: userToFollow?.userId || "",
    };
  }
};

export { formatTweetCount, getUserData };
