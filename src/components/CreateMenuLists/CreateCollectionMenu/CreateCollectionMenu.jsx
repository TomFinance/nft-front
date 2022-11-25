import React from 'react';
import { Link } from 'react-router-dom';
import collection_ava_1 from '../../../img/avatars/collection_ava_1.png';
import collection_ava_2 from '../../../img/avatars/collection_ava_2.jpg';
import collection_ava_3 from '../../../img/avatars/collection_ava_3.png';
import collection_ava_4 from '../../../img/avatars/collection_ava_4.jpg';
import collection_ava_5 from '../../../img/avatars/collection_ava_5.png';
import collection_ava_6 from '../../../img/avatars/collection_ava_6.jpg';
import collection_ava_7 from '../../../img/avatars/collection_ava_7.png';

const CreateCollectionMenu = () => {
  return (
    <div
      className='dropdown-menu show z-10 hidden w-full whitespace-nowrap rounded-xl 
			bg-white py-4 px-2 text-left shadow-xl dark:bg-jacarta-800'
      aria-labelledby='item-collection'
      style={{
        position: 'absolute',
        inset: '0px auto auto 0px',
        margin: '0px',
        transform: 'translate(0px, 113px)',
      }}>
      <ul className='scrollbar-custom flex max-h-48 flex-col overflow-y-auto'>
        <li>
          <Link
            to='#'
            className='dropdown-item flex w-full items-center justify-between rounded-xl px-5 py-2 text-left font-display 
					text-sm transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600'>
            <span className='flex items-center space-x-3'>
              <img
                src={collection_ava_1}
                className='h-8 w-8 rounded-full'
                loading='lazy'
                alt='avatar'
              />
              <span className='text-jacarta-700 dark:text-white'>CryptoKitties</span>
            </span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              width='24'
              height='24'
              className='mb-[3px] h-4 w-4 fill-accent'>
              <path fill='none' d='M0 0h24v24H0z'></path>
              <path d='M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z'></path>
            </svg>
          </Link>
        </li>
        <li>
          <Link
            to='#'
            className='dropdown-item flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm 
					transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600'>
            <span className='flex items-center space-x-3'>
              <img
                src={collection_ava_2}
                className='h-8 w-8 rounded-full'
                loading='lazy'
                alt='avatar'
              />
              <span className='text-jacarta-700 dark:text-white'>KaijuKings</span>
            </span>
          </Link>
        </li>
        <li>
          <Link
            to='#'
            className='dropdown-item flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm 
					transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600'>
            <span className='flex items-center space-x-3'>
              <img
                src={collection_ava_3}
                className='h-8 w-8 rounded-full'
                loading='lazy'
                alt='avatar'
              />
              <span className='text-jacarta-700 dark:text-white'>Kumo x World</span>
            </span>
          </Link>
        </li>
        <li>
          <Link
            to='#'
            className='dropdown-item flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm 
					transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600'>
            <span className='flex items-center space-x-3'>
              <img
                src={collection_ava_4}
                className='h-8 w-8 rounded-full'
                loading='lazy'
                alt='avatar'
              />
              <span className='text-jacarta-700 dark:text-white'>Irene DAO</span>
            </span>
          </Link>
        </li>
        <li>
          <Link
            to='#'
            className='dropdown-item flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm 
					transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600'>
            <span className='flex items-center space-x-3'>
              <img
                src={collection_ava_5}
                className='h-8 w-8 rounded-full'
                loading='lazy'
                alt='avatar'
              />
              <span className='text-jacarta-700 dark:text-white'>GenerativeDungeon</span>
            </span>
          </Link>
        </li>
        <li>
          <Link
            to='#'
            className='dropdown-item flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm 
					transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600'>
            <span className='flex items-center space-x-3'>
              <img
                src={collection_ava_6}
                className='h-8 w-8 rounded-full'
                loading='lazy'
                alt='avatar'
              />
              <span className='text-jacarta-700 dark:text-white'>ENS Domains</span>
            </span>
          </Link>
        </li>
        <li>
          <Link
            to='#'
            className='dropdown-item flex w-full items-center rounded-xl px-5 py-2 text-left font-display text-sm 
					transition-colors hover:bg-jacarta-50 dark:text-white dark:hover:bg-jacarta-600'>
            <span className='flex items-center space-x-3'>
              <img
                src={collection_ava_7}
                className='h-8 w-8 rounded-full'
                loading='lazy'
                alt='avatar'
              />
              <span className='text-jacarta-700 dark:text-white'>Cozy Penguin</span>
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export { CreateCollectionMenu };
