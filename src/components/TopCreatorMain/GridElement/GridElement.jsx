import React from 'react';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const GridElement = ({ title, order, verified, price, alt, url }) => {
  return (
    <div
      className='flex rounded-2.5xl border border-jacarta-100 bg-white py-4 px-7 transition-shadow hover:shadow-lg 
			dark:border-transparent dark:bg-jacarta-700'>
      <figure className='mr-4 shrink-0'>
        <Link to='/user' className='relative block'>
          <img src={url} alt={alt} className='rounded-2lg' loading='lazy' />
          <div
            className='absolute -left-3 top-1/2 flex h-6 w-6 -translate-y-2/4 items-center justify-center rounded-full border-2 
					border-white bg-jacarta-700 text-sm text-white dark:border-jacarta-600'>
            {order}
          </div>
          {verified && (
            <Tippy content='Verified Collection'>
              <div
                className='absolute -left-3 top-[60%] flex h-6 w-6 items-center justify-center rounded-full border-2 
							border-white bg-green 
							dark:border-jacarta-600'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  width='24'
                  height='24'
                  className='h-[.875rem] w-[.875rem] fill-white'>
                  <path fill='none' d='M0 0h24v24H0z' />
                  <path d='M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z' />
                </svg>
              </div>
            </Tippy>
          )}
        </Link>
      </figure>
      <div>
        <Link to='user.html' className='block'>
          <span className='font-display font-semibold text-jacarta-700 hover:text-accent dark:text-white'>
            {title}
          </span>
        </Link>
        <span className='text-sm dark:text-jacarta-300'>{price}</span>
      </div>
    </div>
  );
};

export { GridElement };
