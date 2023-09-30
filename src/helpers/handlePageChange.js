
export const handlePageChange = (page, setSearchParams, setCurrentPage) => {
  setSearchParams({ page: page + 1 });
  setCurrentPage(page);
};
