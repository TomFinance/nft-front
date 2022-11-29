import React from 'react';
import { Link } from 'react-router-dom';
import conment from '../../img/conment.svg';

const SwipeElement = ({ url, alt, title, likes, countComment, currentBid }) => {
  return (
    <div>
      <article>
        <div
          className='block rounded-2.5xl border border-jacarta-100 bg-white p-[1.1875rem] transition-shadow 
				hover:shadow-lg dark:border-jacarta-700 dark:bg-jacarta-700'>
          <figure>
            <Link to='/item'>
              <img
                src={url}
                alt={alt}
                width='230'
                height='230'
                className='w-full rounded-[0.625rem]'
                loading='lazy'
              />
            </Link>
          </figure>
          <div className='mt-4 flex items-center justify-between'>
            <Link to='item.html'>
              <span className='font-display text-base text-jacarta-700 hover:text-accent dark:text-white'>
                {title}
              </span>
            </Link>
            <span
              className='flex items-center whitespace-nowrap rounded-md border border-jacarta-100 py-1 px-2 
					dark:border-jacarta-600'>
              <span data-tippy-content='ETH'>
                <svg
                  version='1.1'
                  xmlns='http://www.w3.org/2000/svg'
                  x='0'
                  y='0'
                  viewBox='0 0 1920 1920'
                  // xml:space='preserve'
                  className='h-4 w-4'>
                  <path fill='#8A92B2' d='M959.8 80.7L420.1 976.3 959.8 731z' />
                  <path
                    fill='#62688F'
                    d='M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z'
                  />
                  <path fill='#454A75' d='M959.8 1295.4l539.8-319.1L959.8 731z' />
                  <path fill='#8A92B2' d='M420.1 1078.7l539.7 760.6v-441.7z' />
                  <path fill='#62688F' d='M959.8 1397.6v441.7l540.1-760.6z' />
                </svg>
              </span>
              <span className='text-sm font-medium tracking-tight text-green'>7 ETH</span>
            </span>
          </div>
          <div className='mt-2 text-sm'>
            <span className='dark:text-jacarta-300'>Current Bid</span>
            <span className='text-jacarta-700 dark:text-jacarta-100'>{currentBid}</span>
          </div>

          <div className='mt-8 flex items-center justify-between'>
            <button
              type='button'
              className='font-display text-sm font-semibold text-accent'
              data-bs-toggle='modal'
              data-bs-target='#placeBidModal'>
              Place bid
            </button>
            <div className='flex items-center space-x-1'>
              <span
                className='js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-cover 
								before:bg-center before:bg-no-repeat before:opacity-0'
                data-tippy-content='Favorite'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  width='24'
                  height='24'
                  className='h-4 w-4 fill-jacarta-500 hover:fill-red dark:fill-jacarta-200 dark:hover:fill-red'>
                  <path fill='none' d='M0 0H24V24H0z' />
                  <path d='M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 
									8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 
									1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 
									1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z' />
                </svg>
              </span>
              <span className='text-sm dark:text-jacarta-200'>{likes}</span>
            </div>
          </div>
          <div className='mt-2 flex items-center justify-between'>
            <button
              className='font-display text-sm font-semibold text-green'
              data-bs-toggle='modal'
              data-bs-target='#buyNowModal'>
              Comment
            </button>
            <Link to='item.html' className='group flex items-center'>
              <img src={conment} alt='conment' className='mr-2 h-4 w-4 rounded-full' />
              <span className='font-display text-sm font-semibold group-hover:text-accent dark:text-jacarta-200'>
                {countComment}
              </span>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default SwipeElement;
