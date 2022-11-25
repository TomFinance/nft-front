import React from 'react';

const Filter = () => {
  return (
    <div
      className='dropdown-menu show z-10 hidden min-w-[220px] whitespace-nowrap rounded-xl 
			bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800'
      aria-labelledby='onSaleSort'
      style={{
        position: 'absolute',
        inset: '0px auto auto 0px',
        margin: '0px',
        top: '-290px',
        left: 0,
        transform: 'translateY(100%)',
      }}>
      <span className='block px-5 py-2 font-display text-sm font-semibold text-jacarta-300'>
        Sort By
      </span>
      <button
        className='dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display 
			text-sm text-jacarta-700 transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600'>
        Recently Added
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
        Price: Low to High
      </button>

      <button
        className='dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display 
			text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600'>
        Price: High to Low
      </button>

      <button
        className='dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display 
			text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600'>
        Auction ending soon
      </button>
      <span className='block px-5 py-2 font-display text-sm font-semibold text-jacarta-300'>
        Options
      </span>
      <div
        className='dropdown-item block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors 
			hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600'>
        <span className='flex items-center justify-between'>
          <span>Verified Only</span>
          <input
            type='checkbox'
            value='checkbox'
            name='check'
            className='relative h-4 w-7 cursor-pointer appearance-none rounded-lg border-none bg-jacarta-100 
						after:absolute after:top-0.5 after:left-0.5 after:h-3 after:w-3 after:rounded-full after:bg-jacarta-400 
						after:transition-all checked:bg-accent checked:bg-none checked:after:left-3.5 checked:after:bg-white 
						checked:hover:bg-accent focus:ring-transparent focus:ring-offset-0 checked:focus:bg-accent'
          />
        </span>
      </div>
      <div
        className='dropdown-item block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors 
			hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600'>
        <span className='flex items-center justify-between'>
          <span>NFSW Only</span>
          <input
            type='checkbox'
            value='checkbox'
            name='check'
            className='relative h-4 w-7 cursor-pointer appearance-none rounded-lg border-none bg-jacarta-100 
						after:absolute after:top-0.5 after:left-0.5 after:h-3 after:w-3 after:rounded-full after:bg-jacarta-400 
						after:transition-all checked:bg-accent checked:bg-none checked:after:left-3.5 checked:after:bg-white 
						checked:hover:bg-accent focus:ring-transparent focus:ring-offset-0 checked:focus:bg-accent'
          />
        </span>
      </div>
      <div
        className='dropdown-item block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors 
			hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600'>
        <span className='flex items-center justify-between'>
          <span>Show Lazy Minted</span>
          <input
            type='checkbox'
            value='checkbox'
            name='check'
            className='relative h-4 w-7 cursor-pointer appearance-none rounded-lg border-none 
							bg-jacarta-100 after:absolute after:top-0.5 after:left-0.5 after:h-3 after:w-3 
							after:rounded-full after:bg-jacarta-400 after:transition-all checked:bg-accent 
							checked:bg-none checked:after:left-3.5 checked:after:bg-white checked:hover:bg-accent 
							focus:ring-transparent focus:ring-offset-0 checked:focus:bg-accent'
          />
        </span>
      </div>
    </div>
  );
};

export { Filter };
