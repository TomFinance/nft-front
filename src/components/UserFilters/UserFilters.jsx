import React, { useState } from 'react';
import { Filter } from './Filter';
import { PriceRange } from './PriceRange';

const UserFilters = () => {
  const [priceRangeIsOpen, setPriceRangeIsOpen] = useState(false);
  const [recentlyIsOpen, setRecentlyIsOpen] = useState(false);

  function range() {
    setPriceRangeIsOpen((prev) => !prev);
    setRecentlyIsOpen(false);
  }
  function recently() {
    setRecentlyIsOpen((prev) => !prev);
    setPriceRangeIsOpen(false);
  }

  return (
    <div className='mb-8 flex flex-wrap items-center justify-between'>
      <div className='flex flex-wrap items-center'>
        <div className='relative my-1 mr-2.5'>
          <button
            onClick={() => range()}
            className='dropdown-toggle group group flex h-9 items-center rounded-lg border border-jacarta-100 
					bg-white px-4 font-display text-sm font-semibold text-jacarta-700 transition-colors 
					hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 
					dark:bg-jacarta-700 dark:text-white dark:hover:bg-accent'
            id='ownedPriceRangeFilter'
            data-bs-toggle='dropdown'
            data-bs-auto-close='outside'
            aria-expanded='false'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              width='24'
              height='24'
              className='mr-1 h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white dark:fill-jacarta-100'>
              <path fill='none' d='M0 0h24v24H0z' />
              <path
                d='M17 16h2V4H9v2h8v10zm0 2v3c0 .552-.45 1-1.007 1H4.007A1.001 1.001 0 0 1 3 21l.003-14c0-.552.45-1 
						1.007-1H7V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3zM5.003 8L5 20h10V8H5.003zM7 16h4.5a.5.5 
						0 1 0 0-1h-3a2.5 2.5 0 1 1 0-5H9V9h2v1h2v2H8.5a.5.5 0 1 0 0 1h3a2.5 2.5 0 1 1 0 5H11v1H9v-1H7v-2z'
              />
            </svg>
            <span>Price Range</span>
          </button>
          {priceRangeIsOpen && <PriceRange />}
        </div>
      </div>

      <div className='dropdown relative my-1 cursor-pointer' onClick={() => recently()}>
        <div
          className='dropdown-toggle inline-flex w-48 items-center justify-between rounded-lg border border-jacarta-100 
				bg-white py-2 px-3 text-sm dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white'
          role='button'
          id='ownedSort'
          data-bs-toggle='dropdown'
          aria-expanded='false'>
          <span className='font-display'>Recently Added</span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            width='24'
            height='24'
            className='h-4 w-4 fill-jacarta-500 dark:fill-white'>
            <path fill='none' d='M0 0h24v24H0z' />
            <path d='M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z' />
          </svg>
        </div>
        {recentlyIsOpen && <Filter />}
      </div>
    </div>
  );
};

export { UserFilters };
