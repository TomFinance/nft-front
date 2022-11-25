import React from 'react';
import avatar_2 from '../../img/avatars/avatar_2.jpg';
import { Link } from 'react-router-dom';

const ModalUserBuy = () => {
  return (
    <div className='modal-body p-6'>
      <div className='mb-2 flex items-center justify-between'>
        <span className='font-display text-sm font-semibold text-jacarta-700 dark:text-white'>
          Item
        </span>
        <span className='font-display text-sm font-semibold text-jacarta-700 dark:text-white'>
          Subtotal
        </span>
      </div>
      <div className='relative flex items-center border-t border-b border-jacarta-100 py-4 dark:border-jacarta-600'>
        <figure className='mr-5 self-start'>
          <img src={avatar_2} alt='avatar' className='rounded-2lg' />
        </figure>
        <div>
          <Link to='/collection' className='text-sm text-accent'>
            Elon Musk #709
          </Link>
          <h3 className='mb-1 font-display text-base font-semibold text-jacarta-700 dark:text-white'>
            Lazyone Panda
          </h3>
          <div className='flex flex-wrap items-center'>
            <span className='mr-1 block text-sm text-jacarta-500 dark:text-jacarta-300'>
              Creator Earnings: 5%
            </span>
            <span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                width='24'
                height='24'
                class='h-4 w-4 fill-jacarta-700 dark:fill-jacarta-300'>
                <path fill='none' d='M0 0h24v24H0z' />
                <path
                  d='M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 
								1 0 0-16 8 8 0 0 0 0 16zM11 7h2v2h-2V7zm0 4h2v6h-2v-6z'
                />
              </svg>
            </span>
          </div>
        </div>
        <div className='ml-auto'>
          <span className='mb-1 flex items-center whitespace-nowrap'>
            <span>
              <svg
                version='1.1'
                xmlns='http://www.w3.org/2000/svg'
                x='0'
                y='0'
                viewBox='0 0 1920 1920'
                // xml:space='preserve'
                class='h-4 w-4'>
                <path fill='#8A92B2' d='M959.8 80.7L420.1 976.3 959.8 731z'></path>
                <path
                  fill='#62688F'
                  d='M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z'></path>
                <path fill='#454A75' d='M959.8 1295.4l539.8-319.1L959.8 731z'></path>
                <path fill='#8A92B2' d='M420.1 1078.7l539.7 760.6v-441.7z'></path>
                <path fill='#62688F' d='M959.8 1397.6v441.7l540.1-760.6z'></path>
              </svg>
            </span>
            <span className='text-sm font-medium tracking-tight dark:text-jacarta-100'>
              1.55 ETH
            </span>
          </span>
          <div className='text-right text-sm dark:text-jacarta-300'>$130.82</div>
        </div>
      </div>
      <div className='mb-2 flex items-center justify-between border-b border-jacarta-100 py-2.5 dark:border-jacarta-600'>
        <span className='font-display font-semibold text-jacarta-700 dark:text-white'>Total</span>
        <div className='ml-auto'>
          <span className='flex items-center whitespace-nowrap'>
            <span>
              <svg
                version='1.1'
                xmlns='http://www.w3.org/2000/svg'
                x='0'
                y='0'
                viewBox='0 0 1920 1920'
                // xml:space='preserve'
                class='h-4 w-4'>
                <path fill='#8A92B2' d='M959.8 80.7L420.1 976.3 959.8 731z'></path>
                <path
                  fill='#62688F'
                  d='M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z'></path>
                <path fill='#454A75' d='M959.8 1295.4l539.8-319.1L959.8 731z'></path>
                <path fill='#8A92B2' d='M420.1 1078.7l539.7 760.6v-441.7z'></path>
                <path fill='#62688F' d='M959.8 1397.6v441.7l540.1-760.6z'></path>
              </svg>
            </span>
            <span className='font-medium tracking-tight text-green'>1.55 ETH</span>
          </span>
          <div className='text-right dark:text-jacarta-300'>$130.82</div>
        </div>
      </div>
      <div className='mt-4 flex items-center space-x-2'>
        <input
          type='checkbox'
          className='h-5 w-5 self-start rounded border-jacarta-200 text-accent 
					checked:bg-accent focus:ring-accent/20 focus:ring-offset-0 dark:border-jacarta-500 dark:bg-jacarta-600'
        />
        <label className='text-sm dark:text-jacarta-200'>
          By checking this box, I agree to Xhibiter's{' '}
          <Link to='#' className='text-accent'>
            Terms of Service
          </Link>
        </label>
      </div>
    </div>
  );
};

export { ModalUserBuy };
