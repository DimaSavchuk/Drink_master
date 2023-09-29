export const updLimit = (setLimit, setPageRangeDisplayed) => {
  if (window.innerWidth >= 1440) {
    setLimit(9);
    setPageRangeDisplayed(6);
  } else if (window.innerWidth >= 768) {
    setLimit(8);
  } else {
    setLimit(8);
    setPageRangeDisplayed(3);
  }
};
