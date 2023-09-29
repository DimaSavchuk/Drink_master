import { Paginate, SvgWrap } from './Paginator.styled';
import sprite from "../../assets/sprite.svg"

export const Paginator = ({limit, currentPage, itemsLength, handlePageChange, pageRangeDisplayed}) => {
  //Логіка написана для тестування пагінації
  const pageCount = Math.ceil(itemsLength / limit);

  const handlePageClick = ({ selected }) => {
    handlePageChange(selected);

    window.scrollTo({
      top: 0, 
      behavior: 'smooth', 
    });
  };

  return (
    <div>
        <Paginate
          previousLabel={<SvgWrap><use href={`${sprite}#icon-paginateLeft`} /></SvgWrap>}
          nextLabel={<SvgWrap><use href={`${sprite}#icon-paginateRight`} /></SvgWrap>}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          forcePage={currentPage} 
          renderOnZeroPageCount={null}
          breakLabel={'...'}
          pageRangeDisplayed={pageRangeDisplayed}
          marginPagesDisplayed={1}
        />
    </div>
  );
}