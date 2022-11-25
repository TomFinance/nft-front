import React from 'react';
import { Link } from 'react-router-dom';

const TableElement = ({
  url,
  alt,
  order,
  title,
  volume,
  day,
  week,
  floorPrice,
  owners,
  items,
  verified,
}) => {
  return (
    <Link to='/user' className='flex transition-shadow hover:shadow-lg' role='row'>
      <div
        className='flex w-[28%] items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600'
        role='cell'>
        <span className='mr-2 lg:mr-4'>{order}</span>
        <figure className='relative mr-2 w-8 shrink-0 self-start lg:mr-5 lg:w-12'>
          <img src={url} alt={alt} className='rounded-2lg' loading='lazy' />
          {verified && (
            <div
              className='absolute -right-2 -bottom-1 flex h-6 w-6 items-center justify-center rounded-full border-2 
							border-white bg-green dark:border-jacarta-600'
              data-tippy-content='Verified Collection'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                width='24'
                height='24'
                className='h-[.875rem] w-[.875rem] fill-white'>
                <path fill='none' d='M0 0h24v24H0z'></path>
                <path d='M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z'></path>
              </svg>
            </div>
          )}
        </figure>
        <span className='font-display text-sm font-semibold text-jacarta-700 dark:text-white'>
          {title}
        </span>
      </div>
      <div
        className='flex w-[12%] items-center whitespace-nowrap border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600'
        role='cell'>
        <span className='-ml-1' data-tippy-content='ETH'>
          <svg
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
            x='0'
            y='0'
            viewBox='0 0 1920 1920'
            // xml:space="preserve"
            className='mr-1 h-4 w-4'>
            <path fill='#8A92B2' d='M959.8 80.7L420.1 976.3 959.8 731z'></path>
            <path
              fill='#62688F'
              d='M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z'></path>
            <path fill='#454A75' d='M959.8 1295.4l539.8-319.1L959.8 731z'></path>
            <path fill='#8A92B2' d='M420.1 1078.7l539.7 760.6v-441.7z'></path>
            <path fill='#62688F' d='M959.8 1397.6v441.7l540.1-760.6z'></path>
          </svg>
        </span>
        <span className='text-sm font-medium tracking-tight'>{volume}</span>
      </div>
      <div
        className='flex w-[12%] items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600'
        role='cell'>
        {day >= 0 && <span className='text-green'>{day}%</span>}
        {day < 0 && <span className='text-red'>{day}%</span>}
      </div>
      <div
        className='flex w-[12%] items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600'
        role='cell'>
        {week >= 0 && <span className='text-green'>{week}%</span>}
        {week < 0 && <span className='text-red'>{week}%</span>}
      </div>
      <div
        className='flex w-[12%] items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600'
        role='cell'>
        <span className='-ml-1' data-tippy-content='ETH'>
          <svg
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
            x='0'
            y='0'
            viewBox='0 0 1920 1920'
            // xml:space="preserve"
            className='mr-1 h-4 w-4'>
            <path fill='#8A92B2' d='M959.8 80.7L420.1 976.3 959.8 731z'></path>
            <path
              fill='#62688F'
              d='M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z'></path>
            <path fill='#454A75' d='M959.8 1295.4l539.8-319.1L959.8 731z'></path>
            <path fill='#8A92B2' d='M420.1 1078.7l539.7 760.6v-441.7z'></path>
            <path fill='#62688F' d='M959.8 1397.6v441.7l540.1-760.6z'></path>
          </svg>
        </span>
        <span className='text-sm font-medium tracking-tight'>{floorPrice}</span>
      </div>
      <div
        className='flex w-[12%] items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600'
        role='cell'>
        <span>{owners}</span>
      </div>
      <div
        className='flex w-[12%] items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600'
        role='cell'>
        <span>{items}</span>
      </div>
    </Link>
  );
};

export { TableElement };
