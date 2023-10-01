export const updLimit = () => {
  const newLimit =
    window.innerWidth >= 1440 ? 9 : window.innerWidth >= 768 ? 8 : 8;
  const newPageRangeDisplayed = window.innerWidth >= 1440 ? 6 : 3;

  return { newLimit, newPageRangeDisplayed };
};