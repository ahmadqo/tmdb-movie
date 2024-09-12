interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ page, totalPages, onPageChange }: PaginationProps) => {
  const handleChangePrev = () => {
    if (page > 1) {
      onPageChange(page - 1);
    }
  };

  const handleChangeNext = () => {
    if (page < totalPages) {
      onPageChange(page + 1);
    }
  };

  return (
    <nav aria-label="Page navigation example">
      <ul className="list-style-none flex gap-2">
        <li>
          <a
            onClick={handleChangePrev}
            className={`rounded-full text-sm  w-28 h-10 flex items-center justify-center text-white font-medium transition-all duration-300 ease-in-out ${
              page === 1
                ? "pointer-events-none bg-zinc-950"
                : "cursor-pointer bg-orange-500"
            }`}
          >
            Previous
          </a>
        </li>

        <li>
          <a
            onClick={handleChangeNext}
            className={`rounded-full text-sm w-28 h-10 flex items-center justify-center text-white font-medium transition-all duration-300 ease-in-out ${
              page === totalPages
                ? "pointer-events-none bg-zinc-950"
                : "cursor-pointer bg-orange-500"
            }`}
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
