import React from 'react';

const ActivityButton = ({ url, title }) => {
  return (
    <button
      className='group mr-2.5 mb-2.5 inline-flex items-center rounded-xl border border-jacarta-100 bg-white 
			px-4 py-3 hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 
		dark:bg-jacarta-700 dark:text-white 
			dark:hover:border-transparent dark:hover:bg-accent'>
      <img src={url} alt='icon' />
      <span className='text-2xs font-medium'>{title}</span>
    </button>
  );
};

export { ActivityButton };
