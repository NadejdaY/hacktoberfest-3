export const findNumberOfCards = (width) => {
  if (width >= 1024) {
    return 7;
  }
  if (width <= 1024 && width >= 768) {
    return 4;
  }
  if (width <= 768 && width >= 425) {
    return 3;
  }
  if (width <= 425) {
    return 2;
  }
};
