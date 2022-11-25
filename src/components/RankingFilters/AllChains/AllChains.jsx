import React from 'react';
import { Link } from 'react-router-dom';

const AllChains = () => {
  return (
    <div
      className=' dropdown-menu show z-10 hidden min-w-[220px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800'
      aria-labelledby='blockchainFilter'
      style={{
        position: 'absolute',
        inset: '0px auto auto 0px',
        margin: '0px',
        top: '-125px',
        left: 0,
        transform: 'translateY(100%)',
      }}>
      <ul className='flex flex-col flex-wrap'>
        <li>
          <Link
            to='#'
            className='dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display text-sm 
				transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600'>
            <span className='text-jacarta-700 dark:text-white'>Ethereum</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              width='24'
              height='24'
              className='mb-[3px] h-4 w-4 fill-accent'>
              <path fill='none' d='M0 0h24v24H0z'></path>
              <path d='M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z'></path>
            </svg>
          </Link>
        </li>
        <li>
          <Link
            to='#'
            className='dropdown-item flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors 
				hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600'>
            Polygon
          </Link>
        </li>
        <li>
          <Link
            to='#'
            className='dropdown-item flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors 
				hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600'>
            Flow
          </Link>
        </li>
        <li>
          <Link
            to='#'
            className='dropdown-item flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm transition-colors 
				hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600'>
            Tezos
          </Link>
        </li>
      </ul>
    </div>
  );
};

export { AllChains };
