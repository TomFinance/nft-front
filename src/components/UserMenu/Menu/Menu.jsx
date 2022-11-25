import React from 'react';

const Menu = () => {
  return (
    <div
      className='dropdown-menu dropdown-menu-end show z-10 hidden min-w-[200px] 
			whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800'
      aria-labelledby='collectionActions'
      style={{
        position: 'absolute',
        inset: '0px auto auto 0px',
        margin: '0px',
        top: '-140px',
        left: '-160px',
        transform: 'translateY(100%)',
      }}>
      <button
        className='block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors 
		hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600'>
        New bid
      </button>
      <hr className='my-2 mx-4 h-px border-0 bg-jacarta-100 dark:bg-jacarta-600' />
      <button
        className='block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors 
		hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600'>
        Refresh Metadata
      </button>
      <button
        className='block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors 
		hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600'>
        Share
      </button>
      <button
        className='block w-full rounded-xl px-5 py-2 text-left font-display text-sm transition-colors 
		hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600'>
        Report
      </button>
    </div>
  );
};

export { Menu };
