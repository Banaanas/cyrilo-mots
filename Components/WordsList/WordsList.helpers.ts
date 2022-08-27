// Words displayed per Page
const wordsPerPage = 10;

// Initial range From
export const initialRangeFrom = 0;

// Initial range To / Start from 0 (that's why -1)
export const initialRangeTo = initialRangeFrom + (wordsPerPage - 1);

// Pagination - Number of pagination pages
export const getPagesCount = (maxRange: MaxRange) => {
  if (!maxRange) return null;
  return Math.ceil(maxRange / wordsPerPage);
};

// Get rangeFrom and rangeTo for Pagination
export const getPagination: GetPagination = (currentPage, maxRange) => {
  if (!maxRange) return null;

  const rangeFrom = currentPage * wordsPerPage;

  let rangeTo = rangeFrom + wordsPerPage - 1;
  if (rangeTo >= maxRange) rangeTo = maxRange;

  return { rangeFrom, rangeTo };
};

type MaxRange = number | null;

type GetPagination = (
  currentPage: number,
  maxRange: MaxRange,
) => { rangeFrom: number; rangeTo: number } | null;
