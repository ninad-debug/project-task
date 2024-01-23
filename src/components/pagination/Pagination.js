import "./style.css";

const Pagination = ({ currentPage, onPrevPage, onNextPage }) => {
  return (
    <div className="pagination">
      <button onClick={onPrevPage} disabled={currentPage === 1}>
        Previous
      </button>
      <span className="page-info">{`${currentPage} of 100`}</span>
      <button onClick={onNextPage}>Next</button>
    </div>
  );
};

export default Pagination;
