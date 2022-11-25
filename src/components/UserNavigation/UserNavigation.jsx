import React from 'react';

const UserNavigation = ({ setActiveWindow }) => {
  return (
    <ul
      className='nav nav-tabs scrollbar-custom mb-12 flex items-center justify-start overflow-x-auto overflow-y-hidden 
			border-b border-jacarta-100 pb-px dark:border-jacarta-600 md:justify-center'
      role='tablist'>
      <li
        className='nav-item'
        role='presentation'
        onClick={() => {
          setActiveWindow('onSale');
        }}>
        <button
          className='nav-link active relative flex items-center whitespace-nowrap py-3 px-6 text-jacarta-400 
					hover:text-jacarta-700 dark:hover:text-white'
          id='on-sale-tab'
          data-bs-toggle='tab'
          data-bs-target='#on-sale'
          type='button'
          role='tab'
          aria-controls='on-sale'
          aria-selected={true}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            width='24'
            height='24'
            className='mr-1 h-5 w-5 fill-current'>
            <path fill='none' d='M0 0h24v24H0z' />
            <path
              d='M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h16V5H4zm4.5 9H14a.5.5 
						0 1 0 0-1h-4a2.5 2.5 0 1 1 0-5h1V6h2v2h2.5v2H10a.5.5 0 1 0 0 1h4a2.5 2.5 0 1 1 0 5h-1v2h-2v-2H8.5v-2z'
            />
          </svg>
          <span className='font-display text-base font-medium'>On Sale</span>
        </button>
      </li>
      <li
        className='nav-item'
        role='presentation'
        onClick={() => {
          setActiveWindow('owned');
        }}>
        <button
          className='nav-link relative flex items-center whitespace-nowrap py-3 px-6 text-jacarta-400 hover:text-jacarta-700 
					dark:hover:text-white'
          id='owned-tab'
          data-bs-toggle='tab'
          data-bs-target='#owned'
          type='button'
          role='tab'
          aria-controls='owned'
          aria-selected={false}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            width='24'
            height='24'
            className='mr-1 h-5 w-5 fill-current'>
            <path fill='none' d='M0 0h24v24H0z' />
            <path
              d='M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2zM4 5v14h16V7h-8.414l-2-2H4zm9 
						8h3l-4 4-4-4h3V9h2v4z'
            />
          </svg>
          <span className='font-display text-base font-medium'>Owned</span>
        </button>
      </li>
      <li
        className='nav-item'
        role='presentation'
        onClick={() => {
          setActiveWindow('created');
        }}>
        <button
          className='nav-link relative flex items-center whitespace-nowrap py-3 px-6 text-jacarta-400 hover:text-jacarta-700 
					dark:hover:text-white'
          id='created-tab'
          data-bs-toggle='tab'
          data-bs-target='#created'
          type='button'
          role='tab'
          aria-controls='created'
          aria-selected={false}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            width='24'
            height='24'
            className='mr-1 h-5 w-5 fill-current'>
            <path fill='none' d='M0 0h24v24H0z' />
            <path
              d='M5 5v3h14V5H5zM4 3h16a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm2 9h6a1 1 0 0 1 1 
						1v3h1v6h-4v-6h1v-2H5a1 1 0 0 1-1-1v-2h2v1zm11.732 1.732l1.768-1.768 1.768 1.768a2.5 2.5 0 1 1-3.536 0z'
            />
          </svg>
          <span className='font-display text-base font-medium'>Created (20)</span>
        </button>
      </li>
      <li
        className='nav-item'
        role='presentation'
        onClick={() => {
          setActiveWindow('activity');
        }}>
        <button
          className='nav-link relative flex items-center whitespace-nowrap py-3 px-6 text-jacarta-400 hover:text-jacarta-700 
					dark:hover:text-white'
          id='activity-tab'
          data-bs-toggle='tab'
          data-bs-target='#activity'
          type='button'
          role='tab'
          aria-controls='activity'
          aria-selected={false}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            width='24'
            height='24'
            className='mr-1 h-5 w-5 fill-current'>
            <path fill='none' d='M0 0h24v24H0z' />
            <path
              d='M11.95 7.95l-1.414 1.414L8 6.828 8 20H6V6.828L3.465 9.364 2.05 7.95 7 3l4.95 4.95zm10 8.1L17 21l-4.95-4.95 
						1.414-1.414 2.537 2.536L16 4h2v13.172l2.536-2.536 1.414 1.414z'
            />
          </svg>
          <span className='font-display text-base font-medium'>Activity</span>
        </button>
      </li>
    </ul>
  );
};

export { UserNavigation };
