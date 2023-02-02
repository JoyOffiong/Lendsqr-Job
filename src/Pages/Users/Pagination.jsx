import React from "react";

function Pagination({ postsPerPage, totalPosts }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination">
      <ul >
        {pageNumbers.map((number) => (
          <li key={number}>
            <a href="">
              {" "}
              {number}{" "}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
