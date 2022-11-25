import React from 'react';
import { Link } from 'react-router-dom';
import { ActivitySearch } from '../ActivitySearch';
import avatar_2 from '../../img/avatars/avatar_2.jpg';
import item_21_sm from '../../img/products/item_21_sm.jpg';
import item_22_sm from '../../img/products/item_22_sm.jpg';
import item_23_sm from '../../img/products/item_23_sm.jpg';
import item_24_sm from '../../img/products/item_24_sm.jpg';

const Activity = () => {
  return (
    <div className='lg:flex'>
      <div className='mb-10 shrink-0 basis-8/12 space-y-5 lg:mb-0 lg:pr-10'>
        <Link
          to='/item'
          className='relative flex items-center rounded-2.5xl border border-jacarta-100 bg-white p-8 transition-shadow hover:shadow-lg 
		dark:border-jacarta-700 dark:bg-jacarta-700'>
          <figure className='mr-5 self-start'>
            <img src={avatar_2} alt='avatar 2' className='rounded-2lg' loading='lazy' />
          </figure>

          <div>
            <h3 className='mb-1 font-display text-base font-semibold text-jacarta-700 dark:text-white'>
              Lazyone Panda
            </h3>
            <span className='mb-3 block text-sm text-jacarta-500 dark:text-jacarta-200'>
              sold for 1.515 ETH
            </span>
            <span className='block text-xs text-jacarta-300'>30 minutes 45 seconds ago</span>
          </div>

          <div className='ml-auto rounded-full border border-jacarta-100 p-3 dark:border-jacarta-600'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              width='24'
              height='24'
              className='fill-jacarta-700 dark:fill-white'>
              <path fill='none' d='M0 0h24v24H0z' />
              <path
                d='M6.5 2h11a1 1 0 0 1 .8.4L21 6v15a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6l2.7-3.6a1 1 0 0 1 .8-.4zM19 8H5v12h14V8zm-.5-2L17 
				4H7L5.5 6h13zM9 10v2a3 3 0 0 0 6 0v-2h2v2a5 5 0 0 1-10 0v-2h2z'
              />
            </svg>
          </div>
        </Link>
        <Link
          to='/item'
          className='relative flex items-center rounded-2.5xl border border-jacarta-100 bg-white p-8 transition-shadow hover:shadow-lg 
		dark:border-jacarta-700 dark:bg-jacarta-700'>
          <figure className='mr-5 self-start'>
            <img src={item_21_sm} alt='item 2' className='rounded-2lg' loading='lazy' />
          </figure>

          <div>
            <h3 className='mb-1 font-display text-base font-semibold text-jacarta-700 dark:text-white'>
              NFT Funny Cat
            </h3>
            <span className='mb-3 block text-sm text-jacarta-500 dark:text-jacarta-200'>
              listed by 051_Hart .08095 ETH
            </span>
            <span className='block text-xs text-jacarta-300'>40 minutes 36 seconds ago</span>
          </div>

          <div className='ml-auto rounded-full border border-jacarta-100 p-3 dark:border-jacarta-600'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              width='24'
              height='24'
              className='fill-jacarta-700 dark:fill-white'>
              <path fill='none' d='M0 0h24v24H0z' />
              <path
                d='M10.9 2.1l9.899 1.415 1.414 9.9-9.192 9.192a1 1 0 0 1-1.414 0l-9.9-9.9a1 1 0 0 1 0-1.414L10.9 2.1zm.707 2.122L3.828 
				12l8.486 8.485 7.778-7.778-1.06-7.425-7.425-1.06zm2.12 6.364a2 2 0 1 1 2.83-2.829 2 2 0 0 1-2.83 2.829z'
              />
            </svg>
          </div>
        </Link>
        <Link
          to='/'
          className='relative flex items-center rounded-2.5xl border border-jacarta-100 bg-white p-8 transition-shadow hover:shadow-lg 
		dark:border-jacarta-700 dark:bg-jacarta-700'>
          <figure className='mr-5 self-start'>
            <img src={item_22_sm} alt='item 3' className='rounded-2lg' loading='lazy' />
          </figure>

          <div>
            <h3 className='mb-1 font-display text-base font-semibold text-jacarta-700 dark:text-white'>
              Prince Ape Planet
            </h3>
            <span className='mb-3 block text-sm text-jacarta-500 dark:text-jacarta-200'>
              tranferred from 027ab52
            </span>
            <span className='block text-xs text-jacarta-300'>1 hour 15 minutes ago</span>
          </div>

          <div className='ml-auto rounded-full border border-jacarta-100 p-3 dark:border-jacarta-600'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              width='24'
              height='24'
              className='fill-jacarta-700 dark:fill-white'>
              <path fill='none' d='M0 0h24v24H0z' />
              <path
                d='M16.05 12.05L21 17l-4.95 4.95-1.414-1.414 2.536-2.537L4 18v-2h13.172l-2.536-2.536 1.414-1.414zm-8.1-10l1.414 1.414L6.828 
				6 20 6v2H6.828l2.536 2.536L7.95 11.95 3 7l4.95-4.95z'
              />
            </svg>
          </div>
        </Link>
        <Link
          to='/item'
          className='relative flex items-center rounded-2.5xl border border-jacarta-100 bg-white p-8 transition-shadow hover:shadow-lg 
		dark:border-jacarta-700 dark:bg-jacarta-700'>
          <figure className='mr-5 self-start'>
            <img src={item_23_sm} alt='item 3' className='rounded-2lg' loading='lazy' />
          </figure>

          <div>
            <h3 className='mb-1 font-display text-base font-semibold text-jacarta-700 dark:text-white'>
              Origin Morish
            </h3>
            <span className='mb-3 block text-sm text-jacarta-500 dark:text-jacarta-200'>
              bid cancelled by 0397fd
            </span>
            <span className='block text-xs text-jacarta-300'>1 hour 55 minutes ago</span>
          </div>

          <div className='ml-auto rounded-full border border-jacarta-100 p-3 dark:border-jacarta-600'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              width='24'
              height='24'
              className='fill-jacarta-700 dark:fill-white'>
              <path fill='none' d='M0 0h24v24H0z' />
              <path
                d='M14 20v2H2v-2h12zM14.586.686l7.778 7.778L20.95 9.88l-1.06-.354L17.413 12l5.657 5.657-1.414 1.414L16 13.414l-2.404 
				2.404.283 1.132-1.415 1.414-7.778-7.778 1.415-1.414 1.13.282 6.294-6.293-.353-1.06L14.586.686zm.707 3.536l-7.071 7.07 3.535 3.536 
				7.071-7.07-3.535-3.536z'
              />
            </svg>
          </div>
        </Link>
        <Link
          to='/item'
          className='relative flex items-center rounded-2.5xl border border-jacarta-100 bg-white p-8 transition-shadow hover:shadow-lg 
		dark:border-jacarta-700 dark:bg-jacarta-700'>
          <figure className='mr-5 self-start'>
            <img src={item_24_sm} alt='item 3' className='rounded-2lg' loading='lazy' />
          </figure>

          <div>
            <h3 className='mb-1 font-display text-base font-semibold text-jacarta-700 dark:text-white'>
              Portrait Gallery#029
            </h3>
            <span className='mb-3 block text-sm text-jacarta-500 dark:text-jacarta-200'>
              liked by Trina_more
            </span>
            <span className='block text-xs text-jacarta-300'>2 hours 24 minutes ago</span>
          </div>

          <div className='ml-auto rounded-full border border-jacarta-100 p-3 dark:border-jacarta-600'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              width='24'
              height='24'
              className='fill-jacarta-700 dark:fill-white'>
              <path fill='none' d='M0 0H24V24H0z' />
              <path
                d='M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 
				8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 
				1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 
				3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z'
              />
            </svg>
          </div>
        </Link>
      </div>

      <aside className='basis-4/12 lg:pl-5'>
        {/* search */}
        <ActivitySearch />

        {/* search */}
        <h3 className='mb-4 font-display font-semibold text-jacarta-500 dark:text-white'>
          Filters
        </h3>
        <div className='flex flex-wrap'>
          <button
            className='group mr-2.5 mb-2.5 inline-flex items-center rounded-xl border border-jacarta-100 bg-white px-4 py-3 
		hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white 
		dark:hover:border-transparent dark:hover:bg-accent'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              width='24'
              height='24'
              className='mr-2 h-4 w-4 fill-jacarta-700 group-hover:fill-white dark:fill-white'>
              <path fill='none' d='M0 0h24v24H0z' />
              <path
                d='M10.9 2.1l9.899 1.415 1.414 9.9-9.192 9.192a1 1 0 0 1-1.414 0l-9.9-9.9a1 1 0 0 1 0-1.414L10.9 2.1zm.707 2.122L3.828 
				12l8.486 8.485 7.778-7.778-1.06-7.425-7.425-1.06zm2.12 6.364a2 2 0 1 1 2.83-2.829 2 2 0 0 1-2.83 2.829z'
              />
            </svg>
            <span className='text-2xs font-medium'>Listing</span>
          </button>
          <button
            className='group mr-2.5 mb-2.5 inline-flex items-center rounded-xl border border-jacarta-100 bg-white px-4 py-3 
		hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white 
		dark:hover:border-transparent dark:hover:bg-accent'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              width='24'
              height='24'
              className='mr-2 h-4 w-4 fill-jacarta-700 group-hover:fill-white dark:fill-white'>
              <path fill='none' d='M0 0h24v24H0z' />
              <path
                d='M14 20v2H2v-2h12zM14.586.686l7.778 7.778L20.95 9.88l-1.06-.354L17.413 12l5.657 5.657-1.414 1.414L16 13.414l-2.404 
				2.404.283 1.132-1.415 1.414-7.778-7.778 1.415-1.414 1.13.282 6.294-6.293-.353-1.06L14.586.686zm.707 3.536l-7.071 7.07 3.535 
				3.536 7.071-7.07-3.535-3.536z'
              />
            </svg>
            <span className='text-2xs font-medium'>Bids</span>
          </button>
          <button
            className='group mr-2.5 mb-2.5 inline-flex items-center rounded-xl border border-jacarta-100 bg-white px-4 py-3 
		hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white 
		dark:hover:border-transparent dark:hover:bg-accent'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              width='24'
              height='24'
              className='mr-2 h-4 w-4 fill-jacarta-700 group-hover:fill-white dark:fill-white'>
              <path fill='none' d='M0 0h24v24H0z' />
              <path
                d='M16.05 12.05L21 17l-4.95 4.95-1.414-1.414 2.536-2.537L4 18v-2h13.172l-2.536-2.536 1.414-1.414zm-8.1-10l1.414 1.414L6.828 
				6 20 6v2H6.828l2.536 2.536L7.95 11.95 3 7l4.95-4.95z'
              />
            </svg>
            <span className='text-2xs font-medium'>Transfer</span>
          </button>
          <button
            className='group mr-2.5 mb-2.5 inline-flex items-center rounded-xl border border-jacarta-100 bg-white px-4 py-3 
		hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white 
		dark:hover:border-transparent dark:hover:bg-accent'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              width='24'
              height='24'
              className='mr-2 h-4 w-4 fill-jacarta-700 group-hover:fill-white dark:fill-white'>
              <path fill='none' d='M0 0H24V24H0z' />
              <path
                d='M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 
				8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 
				1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 
				1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z'
              />
            </svg>
            <span className='text-2xs font-medium'>Likes</span>
          </button>
          <button
            className='group mr-2.5 mb-2.5 inline-flex items-center rounded-xl border border-jacarta-100 bg-white 
		px-4 py-3 hover:border-transparent hover:bg-accent hover:text-white dark:border-jacarta-600 dark:bg-jacarta-700 
		dark:text-white dark:hover:border-transparent dark:hover:bg-accent'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              width='24'
              height='24'
              className='mr-2 h-4 w-4 fill-jacarta-700 group-hover:fill-white dark:fill-white'>
              <path fill='none' d='M0 0h24v24H0z' />
              <path
                d='M6.5 2h11a1 1 0 0 1 .8.4L21 6v15a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6l2.7-3.6a1 1 0 0 1 .8-.4zM19 8H5v12h14V8zm-.5-2L17 
				4H7L5.5 6h13zM9 10v2a3 3 0 0 0 6 0v-2h2v2a5 5 0 0 1-10 0v-2h2z'
              />
            </svg>
            <span className='text-2xs font-medium'>Purchases</span>
          </button>
        </div>
      </aside>
    </div>
  );
};

export {Activity};
