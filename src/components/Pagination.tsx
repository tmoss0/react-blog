import React from 'react';

interface PaginationProps {
  totalCount: number;
  currentPage: number;
  postsPerPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalCount,
  currentPage,
  postsPerPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalCount / postsPerPage);
  const handlePageChange = (page: number) => {
    onPageChange(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li
          key={i}
          className={`page-item ${currentPage === i ? 'active' : ''}`}>
          <button onClick={() => handlePageChange(i)}>{i}</button>
        </li>
      );
    }
    return pageNumbers;
  };

  return (
    <div className='flex mx-auto'>
      <nav>
        <ul className='pagination'>{renderPageNumbers()}</ul>
      </nav>
    </div>
  );
};

export default Pagination;
