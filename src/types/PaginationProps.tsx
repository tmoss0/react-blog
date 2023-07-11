export default interface PaginationProps {
  totalCount: number;
  currentPage: number;
  postsPerPage: number;
  onPageChange: (page: number) => void;
}
