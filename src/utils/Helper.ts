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

export { formatTweetCount };
