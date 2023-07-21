import React from 'react';
import PaginationProps from '../types/PaginationProps';

const Pagination: React.FC<PaginationProps> = ({
  totalCount,
  currentPage,
  postsPerPage,
  onPageChange,
}) => {
  const totalPages = React.useMemo(
    () => Math.ceil(totalCount / postsPerPage),
    [totalCount, postsPerPage]
  );
  const pages = React.useMemo(
    () => new Array(totalPages).fill(''),
    [totalPages]
  );
  const handlePageChange = (page: number) => {
    onPageChange(page);
  };

  const handlePageClick = (page: number) => {
    if (page === currentPage) return;
    if (page < 1) {
      onPageChange(totalPages);
    } else if (page > totalPages) {
      onPageChange(1);
    } else {
      onPageChange(page);
    }
  };

  return (
    <div className='flex flex-auto'>
      <ul className='flex flex-initial flex-row mx-auto'>
        <li
          className={`flex flex-auto text-xl ${
            currentPage === totalPages ? 'disabled' : ''
          }`}>
          <button onClick={() => handlePageClick(currentPage - 1)}>
            &#8592;
          </button>
        </li>
        {pages.map((p, i) => (
          <button onClick={() => handlePageChange(i + 1)}>
            <li
              key={i}
              className={`m-2 p-2 shadow-sm rounded ${
                currentPage === i + 1
                  ? 'text-gray-800 bg-lime-300'
                  : 'text-white bg-red-900  hover:text-gray-800 hover:bg-lime-300'
              }`}>
              {i + 1}
            </li>
          </button>
        ))}
        <li
          className={`flex flex-auto text-xl ${
            currentPage === 1 ? 'disabled' : ''
          }`}>
          <button onClick={() => handlePageClick(currentPage + 1)}>
            &#8594;
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
