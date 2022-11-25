import React, { useState } from 'react';
import { AllCategories } from './AllCategories';
import { AllChains } from './AllChains';
import { DaysFilter } from './DaysFilter';

const RankingFilters = () => {
  const [allCategoriesIsOpen, setAllCategoriesIsOpen] = useState(false);
  const [allChainsIsOpen, setAllChainsIsOpen] = useState(false);
  const [daysFilterIsOpen, setDaysFilterIsOpen] = useState(false);
  function categories() {
    setAllCategoriesIsOpen((prev) => !prev);
    setAllChainsIsOpen(false);
    setDaysFilterIsOpen(false);
  }
  function allChains() {
    setAllChainsIsOpen((prev) => !prev);
    setAllCategoriesIsOpen(false);
    setDaysFilterIsOpen(false);
  }
  function filters() {
    setDaysFilterIsOpen((prev) => !prev);
    setAllChainsIsOpen(false);
    setAllCategoriesIsOpen(false);
  }
  return (
    <div className='mb-8 flex flex-wrap items-center justify-between'>
      <div className='flex flex-wrap items-center'>
        <div className='relative my-1 mr-2.5'>
          <button
            onClick={() => categories()}
            className='dropdown-toggle group group flex h-9 items-center rounded-lg border border-jacarta-100 
						bg-white px-4 font-display text-sm font-semibold text-jacarta-700 transition-colors 
						hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 
						dark:bg-jacarta-700 dark:text-white dark:hover:bg-accent'
            id='categoriesFilter'
            data-bs-toggle='dropdown'
            aria-expanded='false'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              width='24'
              height='24'
              className='mr-1 h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white 
							dark:fill-jacarta-100'>
              <path fill='none' d='M0 0h24v24H0z' />
              <path
                d='M14 10v4h-4v-4h4zm2 0h5v4h-5v-4zm-2 11h-4v-5h4v5zm2 0v-5h5v4a1 1 0 0 1-1 1h-4zM14 3v5h-4V3h4zm2 0h4a1 
							1 0 0 1 1 1v4h-5V3zm-8 7v4H3v-4h5zm0 11H4a1 1 0 0 1-1-1v-4h5v5zM8 3v5H3V4a1 1 0 0 1 1-1h4z'
              />
            </svg>
            <span>All Categories</span>
          </button>
          {allCategoriesIsOpen && <AllCategories />}
        </div>

        <div className='relative my-1 mr-2.5'>
          <button
            onClick={() => allChains()}
            className='dropdown-toggle group group flex h-9 items-center rounded-lg border border-jacarta-100 
						bg-white px-4 font-display text-sm font-semibold text-jacarta-700 transition-colors hover:border-transparent 
						hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-700 
						dark:text-white dark:hover:bg-accent'
            id='blockchainFilter'
            data-bs-toggle='dropdown'
            aria-expanded='false'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              width='24'
              height='24'
              className='mr-1 h-4 w-4 fill-jacarta-700 transition-colors group-hover:fill-white dark:fill-jacarta-100'>
              <path fill='none' d='M0 0h24v24H0z' />
              <path
                d='M20 16h2v6h-6v-2H8v2H2v-6h2V8H2V2h6v2h8V2h6v6h-2v8zm-2 0V8h-2V6H8v2H6v8h2v2h8v-2h2zM4 4v2h2V4H4zm0 
								14v2h2v-2H4zM18
							4v2h2V4h-2zm0 14v2h2v-2h-2z'
              />
            </svg>
            <span>All Chains</span>
          </button>
          {allChainsIsOpen && <AllChains />}
        </div>
      </div>

      <div className='dropdown relative my-1 cursor-pointer' onClick={() => filters()}>
        <div
          className='dropdown-toggle inline-flex w-48 items-center justify-between rounded-lg border 
					border-jacarta-100 bg-white py-2 
					px-3 text-sm dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white'
          role='button'
          id='sortOrdering'
          data-bs-toggle='dropdown'
          aria-expanded='false'>
          <span className='font-display'>Last 7 Days</span>
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
        {daysFilterIsOpen && <DaysFilter />}
      </div>
    </div>
  );
};

export { RankingFilters };
