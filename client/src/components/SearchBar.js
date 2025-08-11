import React from 'react';

const SearchBar = ({ value, onChange, onClear }) => {
  return (
    <div className="px-4 mx-auto w-full max-w-3xl -mt-6 sm:-mt-10">
      <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur border border-gray-200 dark:border-gray-800 rounded-full shadow-sm">
        <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-500 dark:text-gray-400">
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </span>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search products by model, brand, or category..."
          className="w-full bg-transparent placeholder-gray-400 dark:placeholder-gray-500 text-gray-900 dark:text-gray-100 py-3.5 pl-12 pr-12 rounded-full focus:outline-none"
        />
        {value && (
          <button
            type="button"
            aria-label="Clear search"
            onClick={onClear}
            className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path fillRule="evenodd" d="M6.225 4.811a1 1 0 011.414 0L12 9.172l4.361-4.361a1 1 0 111.415 1.414L13.414 10.586l4.362 4.362a1 1 0 01-1.415 1.414L12 12l-4.361 4.362a1 1 0 01-1.414-1.415L10.586 10.586 6.225 6.225a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;


