export const checkAndSetPage = (
  numberOfElementsOnPage,
  currentPage,
  setSearchParams,
  setCurrentPage,
) => {
  if (numberOfElementsOnPage === 0) {
    if (currentPage > 0) {
      const newPage = currentPage;
      setSearchParams({ page: newPage + 1 });
      setCurrentPage(newPage);
    }
  }
};
