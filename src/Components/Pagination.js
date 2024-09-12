import React from "react";
import { Pagination } from "react-bootstrap";
import PropTypes from "prop-types";
import "./Pagination.css";

const PaginationComponent = ({
  currentPage = 1,
  totalPages = 1,
  onPageChange,
}) => {
  const validTotalPages = Math.max(1, Math.floor(totalPages)); // Ensure totalPages is valid
  const validCurrentPage = Math.max(1, Math.min(currentPage, validTotalPages)); // Ensure currentPage is within bounds

  const handlePageChange = (page) => {
    if (page >= 1 && page <= validTotalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="pagination-container">
      <Pagination>
        <Pagination.Prev
          onClick={() => handlePageChange(validCurrentPage - 1)}
          disabled={validCurrentPage === 1}
        />
        {[...Array(validTotalPages)].map((_, index) => (
          <Pagination.Item
            key={index + 1}
            active={index + 1 === validCurrentPage}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next
          onClick={() => handlePageChange(validCurrentPage + 1)}
          disabled={validCurrentPage === validTotalPages}
        />
      </Pagination>
    </div>
  );
};

PaginationComponent.propTypes = {
  currentPage: PropTypes.number,
  totalPages: PropTypes.number,
  onPageChange: PropTypes.func.isRequired,
};

export default PaginationComponent;
