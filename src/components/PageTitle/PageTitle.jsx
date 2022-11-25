import React from 'react';

const PageTitle = ({ title }) => {
  return (
    <h2 className='mb-2 font-display text-4xl font-medium text-jacarta-700 dark:text-white'>
      {title}
    </h2>
  );
};

export { PageTitle };
