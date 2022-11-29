import React from 'react';

const Right = () => {
  return (
    <div
      className='group swiper-button-next-3 shadow-white-volume absolute top-1/2 -right-4 z-10 -mt-6 flex h-12 w-12 cursor-pointer 
					items-center justify-center rounded-full bg-white p-3 text-base shadow-white-volume sm:-right-6'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        width='24'
        height='24'
        className='fill-jacarta-700 group-hover:fill-accent'>
        <path fill='none' d='M0 0h24v24H0z' />
        <path d='M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z' />
      </svg>
    </div>
  );
};

export { Right };
