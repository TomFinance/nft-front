import React, { useState } from 'react';
import { Filter } from '../Filter';

const PriceRange = () => {
  return (
    <div
      className='dropdown-menu show z-10 hidden min-w-[220px] whitespace-nowrap rounded-xl 
			bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800'
      aria-labelledby='priceRangeFilter'
      style={{
        position: 'absolute',
        inset: '0px auto auto 0px',
        margin: '0px',
        top: '-190px',
        left: 0,
        transform: 'translateY(100%)',
      }}>
      <div className='dropdown mb-4 cursor-pointer px-5 pt-2'>
        <div
          className='dropdown-toggle flex items-center justify-between rounded-lg border 
					border-jacarta-100 py-3.5 px-3 text-sm dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white'
          role='button'
          id='filterPriceBlockchain'
          data-bs-toggle='dropdown'
          aria-expanded='false'>
          <span className='flex items-center font-display'>
            <img src='img/chains/a1a.png' alt='a1a' className='mr-2 h-5 w-5 rounded-full' />
            A1A
          </span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            width='24'
            height='24'
            className='h-4 w-4 fill-jacarta-500 dark:fill-white'>
            <path fill='none' d='M0 0h24v24H0z'></path>
            <path d='M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z'></path>
          </svg>
        </div>

        <div
          className='dropdown-menu z-10 hidden min-w-[252px] whitespace-nowrap rounded-xl 
					bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800'
          aria-labelledby='filterPriceBlockchain'>
          <button
            className='dropdown-item flex w-full items-center justify-between rounded-xl 
					px-5 py-2 text-left font-display text-sm text-jacarta-700 transition-colors 
					hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600'>
            <span className='flex items-center'>
              <img src='img/chains/a1a.png' alt='a1a' className='mr-2 h-5 w-5 rounded-full' />
              A1A
            </span>
          </button>
          <button
            className='dropdown-item flex w-full items-center justify-between rounded-xl 
					px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 
					dark:text-white dark:hover:bg-jacarta-600'>
            <span className='flex items-center'>
              <img src='img/chains/usdt.png' alt='usdt' className='mr-2 h-5 w-5 rounded-full' />
              USDT
            </span>
          </button>

          <button
            className='dropdown-item flex w-full items-center justify-between rounded-xl 
					px-5 py-2 text-left font-display text-sm transition-colors hover:bg-jacarta-50 dark:text-white 
					dark:hover:bg-jacarta-600'>
            <span className='flex items-center'>
              <img src='img/chains/klay.png' alt='klay' className='mr-2 h-5 w-5 rounded-full' />
              KLAY
            </span>
          </button>
        </div>
      </div>

      <div className='flex items-center space-x-3 px-5 pb-2'>
        <input
          type='number'
          placeholder='From'
          className='w-full max-w-[7.5rem] rounded-lg border border-jacarta-100 py-[0.6875rem] px-4 
					text-jacarta-700 placeholder-jacarta-500 focus:ring-accent dark:border-transparent 
					dark:bg-white/[.15] dark:text-white dark:placeholder-white'
        />
        <input
          type='number'
          placeholder='To'
          className='w-full max-w-[7.5rem] rounded-lg border border-jacarta-100 py-[0.6875rem] px-4 
					text-jacarta-700 placeholder-jacarta-500 focus:ring-accent dark:border-transparent 
					dark:bg-white/[.15] dark:text-white dark:placeholder-white'
        />
      </div>

      <div
        className='-ml-2 -mr-2 mt-4 flex items-center justify-center space-x-3 border-t 
			border-jacarta-100 px-7 pt-4 dark:border-jacarta-600'>
        <button
          type='button'
          className='flex-1 rounded-full bg-white py-2 px-6 text-center text-sm font-semibold 
					text-accent shadow-white-volume transition-all hover:bg-accent-dark hover:text-white 
					hover:shadow-accent-volume'>
          Clear
        </button>
        <button
          type='button'
          className='flex-1 rounded-full bg-accent py-2 px-6 text-center text-sm font-semibold 
					text-white shadow-accent-volume transition-all hover:bg-accent-dark'>
          Apply
        </button>
      </div>
    </div>
  );
};

export { PriceRange };
