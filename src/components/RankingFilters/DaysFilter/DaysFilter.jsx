import React from 'react';

const DaysFilter = () => {
  return (
    <div
      className='dropdown-menu show z-10 hidden w-full whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left 
			shadow-xl dark:bg-jacarta-800'
      aria-labelledby='sortOrdering'
      style={{
        position: 'absolute',
        inset: '0px auto auto 0px',
        margin: '0px',
        transform: 'translate(0px, 37px)',
      }}>
      <button
        className='dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display text-sm 
		text-jacarta-700 transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600'>
        Last 7 Days
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          width='24'
          height='24'
          className='mb-[3px] h-4 w-4 fill-accent'>
          <path fill='none' d='M0 0h24v24H0z' />
          <path d='M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z' />
        </svg>
      </button>
      <button
        className='dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display 
		text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600'>
        Last 14 Days
      </button>
      <button
        className='dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display 
		text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600'>
        Last 30 Days
      </button>
      <button
        className='dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display 
		text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600'>
        Last 60 Days
      </button>
      <button
        className='dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display 
		text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600'>
        Last 90 Days
      </button>
      <button
        className='dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display 
		text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600'>
        Last Year
      </button>
      <button
        className='dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display 
		text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600'>
        All Time
      </button>
    </div>
  );
};

export { DaysFilter };
