import React from 'react';

const InnerModalButton = ({ title }) => {
  return (
    <button
      className='mt-2 rounded-full border-2 border-accent py-2 px-8 text-center text-sm font-semibold 
		text-accent transition-all hover:bg-accent hover:text-white'>
      {title}
    </button>
  );
};

export { InnerModalButton };
