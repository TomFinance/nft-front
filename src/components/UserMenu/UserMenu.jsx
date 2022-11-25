import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from './Menu';
import { Share } from './Share';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const UserMenu = () => {
  const [shareIsOpen, setShareIsOpen] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  function share() {
    setShareIsOpen((prev) => !prev);
    setMenuIsOpen(false);
  }
  function menu() {
    setMenuIsOpen((prev) => !prev);
    setShareIsOpen(false);
  }
  function heart() {
    setMenuIsOpen(false);
    setShareIsOpen(false);
  }
  return (
    <div className='mt-6 flex items-center justify-center space-x-2.5'>
      <div
        className='rounded-xl border border-jacarta-100 bg-white hover:bg-jacarta-100 dark:border-jacarta-600 
			dark:bg-jacarta-700 
			dark:hover:bg-jacarta-600'>
        <Tippy content='Favorite'>
          <div
            onClick={() => heart()}
            className='js-likes relative inline-flex h-10 w-10 cursor-pointer items-center justify-center text-sm before:absolute 
					before:h-4 before:w-4 before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0'
            role='button'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              width='24'
              height='24'
              className='h-4 w-4 fill-jacarta-500 dark:fill-jacarta-200'>
              <path fill='none' d='M0 0H24V24H0z' />
              <path
                d='M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 
						8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 
						1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 
						1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z'
              />
            </svg>
          </div>
        </Tippy>
      </div>
      <Tippy content='Favorite'>
        <div
          className='dropdown relative rounded-xl border border-jacarta-100 bg-white hover:bg-jacarta-100 
			dark:border-jacarta-600 dark:bg-jacarta-700 dark:hover:bg-jacarta-600'>
          <Link
            onClick={() => share()}
            to='#'
            className='dropdown-toggle  inline-flex h-10 w-10 items-center justify-center text-sm'
            role='button'
            id='collectionShare'
            data-bs-toggle='dropdown'
            aria-expanded='false'
            data-tippy-content='Share'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              width='24'
              height='24'
              className='h-4 w-4 fill-jacarta-500 dark:fill-jacarta-200'>
              <path fill='none' d='M0 0h24v24H0z' />
              <path
                d='M13.576 17.271l-5.11-2.787a3.5 3.5 0 1 1 0-4.968l5.11-2.787a3.5 3.5 0 1 1 .958 1.755l-5.11 
						2.787a3.514 3.514 0 0 1 0 1.458l5.11 2.787a3.5 3.5 0 1 1-.958 1.755z'
              />
            </svg>
          </Link>
          {shareIsOpen && <Share />}
        </div>
      </Tippy>
      <div
        className='dropdown relative rounded-xl border border-jacarta-100 bg-white hover:bg-jacarta-100 
			dark:border-jacarta-600 dark:bg-jacarta-700 dark:hover:bg-jacarta-600'>
        <Link
          onClick={() => menu()}
          to='#'
          className='dropdown-toggle inline-flex h-10 w-10 items-center justify-center text-sm'
          role='button'
          id='collectionActions'
          data-bs-toggle='dropdown'
          aria-expanded='false'>
          <svg
            width='16'
            height='4'
            viewBox='0 0 16 4'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='fill-jacarta-500 dark:fill-jacarta-200'>
            <circle cx='2' cy='2' r='2' />
            <circle cx='8' cy='2' r='2' />
            <circle cx='14' cy='2' r='2' />
          </svg>
        </Link>
        {menuIsOpen && <Menu />}
      </div>
    </div>
  );
};

export { UserMenu };
