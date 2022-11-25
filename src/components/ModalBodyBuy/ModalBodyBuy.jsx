import React from 'react';
import { Link } from 'react-router-dom';
import a1a from '../../img/chains/a1a.png';

const ModalBodyBuy = () => {
  return (
    <div className='modal-body p-6'>
      <div className='mb-2 flex items-center justify-between'>
        <span className='font-display text-sm font-semibold text-jacarta-700 dark:text-white'>
          Price
        </span>
      </div>
      <div
        className='relative mb-2 flex items-center overflow-hidden rounded-lg 
			border border-jacarta-100 dark:border-jacarta-600'>
        <div className='flex h-12 flex-1 items-center self-stretch border-jacarta-100 bg-jacarta-50 px-2'>
          <span>
            <img src={a1a} alt='a1a' className='mr-2 h-5 w-5 rounded-full' />
          </span>
          <span className='font-display text-sm text-jacarta-700'>A1A</span>
        </div>
        <div className='flex h-12 flex-1 items-center self-stretch border-jacarta-100 bg-jacarta-50 px-2'>
          <span className='text-lg font-bold dark:text-jacarta-400'>200.25 A1A</span>
        </div>
        <div className='flex flex-1 justify-end self-stretch border-jacarta-100 bg-jacarta-50'>
          <span className='self-center px-2 text-sm'>$130.82</span>
        </div>
      </div>
      <div className='text-right'>
        <span className='text-sm dark:text-jacarta-400'>Balance: 0.0000 A1A</span>
      </div>
      <div className='mt-4 flex items-center space-x-2'>
        <input
          type='checkbox'
          className='h-5 w-5 self-start rounded border-jacarta-200 text-accent checked:bg-accent 
					focus:ring-accent/20 focus:ring-offset-0 dark:border-jacarta-500 dark:bg-jacarta-600'
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

export { ModalBodyBuy };
