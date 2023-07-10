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
        <button onClick={() => handlePageChange(i)}>
          <li
            key={i}
            className={`m-2 p-2 bg-red-900 text-white rounded-md shadow-sm hover:text-gray-800 hover:bg-lime-300 ${
              currentPage === i ? ' text-gray-800 bg-lime-300' : ''
            }`}>
            {i}
          </li>
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <ul className='flex flex-initial flex-row mx-auto'>
      {renderPageNumbers()}
    </ul>
  );
};

export default Pagination;
