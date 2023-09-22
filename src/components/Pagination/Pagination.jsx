import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
import {
  PaginationButton,
  PaginationContainer,
  PaginationNumber,
} from './Pagination.styled';

const Pagination = ({ currentPage, totalPages, handlePageChange }) => {
  return (
    <PaginationContainer>
      <PaginationButton
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <BsChevronLeft />
      </PaginationButton>

      {Array.from({ length: totalPages }).map((_, index) => (
        <PaginationNumber
          active={index + 1 === currentPage}
          key={index}
          onClick={() => handlePageChange(index + 1)}
          disabled={index + 1 === currentPage}
        >
          {index + 1}
        </PaginationNumber>
      ))}

      <PaginationButton
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <BsChevronRight />
      </PaginationButton>
    </PaginationContainer>
  );
};

export default Pagination;
