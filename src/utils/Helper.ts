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

const convertTimestampToString = (timestamp: number | undefined): string => {
  if (timestamp === undefined) return "";
  const date = new Date(timestamp);
  const months: string[] = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month: string = months[date.getMonth()];
  const day: string = date.getDate().toString().padStart(2, "0");
  return `${month} ${day}`;
};

export { formatTweetCount, getUserData, convertTimestampToString };
