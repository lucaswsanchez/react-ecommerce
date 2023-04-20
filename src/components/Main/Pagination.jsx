import React from "react";
import { Link } from "react-router-dom";
import "./Pagination.css";

const Pagination = ({ productsPerPage, totalProducts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination">
      <ul>
        {pageNumbers.map((number) => (
          <li key={number}>
            <Link
              to={`#${number}`}
              onClick={() => paginate(number)}
              className="page-link"
            >
            {number}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
