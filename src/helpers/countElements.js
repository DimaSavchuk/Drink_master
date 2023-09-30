export const countElements = (cards, currentPage, limit) => {
  const startIndex = currentPage * limit;
  const endIndex = startIndex + limit;
  const elementsOnPage = cards.slice(startIndex, endIndex);
  const numberOfElementsOnPage = elementsOnPage.length;

  return { startIndex, endIndex, elementsOnPage, numberOfElementsOnPage };
};

