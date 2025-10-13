import React from "react";

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}) {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <nav className="flex justify-center mt-6">
      <ul className="flex items-center gap-2">
        {/* Previous Arrow */}
        <li>
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={
              "w-9 h-9 flex items-center justify-center rounded-full transition " +
              (currentPage === 1
                ? "text-gray-400 cursor-not-allowed"
                : "hover:bg-gray-100 text-gray-600")
            }
            aria-label="Previous"
          >
            &larr;
          </button>
        </li>
        {/* Page Numbers */}
        {pages.map((page) => (
          <li key={page}>
            <button
              onClick={() => onPageChange(page)}
              className={`w-9 h-9 rounded-full flex items-center justify-center transition
                ${
                  page === currentPage
                    ? "bg-blue-600 text-white font-bold"
                    : "bg-transparent text-gray-600 hover:bg-gray-100"
                }
              `}
              aria-current={page === currentPage ? "page" : undefined}
            >
              {page}
            </button>
          </li>
        ))}
        {/* Next Arrow */}
        <li>
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={
              "w-9 h-9 flex items-center justify-center rounded-full transition " +
              (currentPage === totalPages
                ? "text-gray-400 cursor-not-allowed"
                : "hover:bg-gray-100 text-gray-600")
            }
            aria-label="Next"
          >
            &rarr;
          </button>
        </li>
      </ul>
    </nav>
  );
}
