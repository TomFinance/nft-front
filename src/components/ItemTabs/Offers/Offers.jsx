import React from 'react';

const Offers = () => {
  return (
    <div
      // className='tab-pane fade show active'
      id='offers'
      role='tabpanel'
      aria-labelledby='offers-tab'>
      <div
        role='table'
        className='scrollbar-custom grid max-h-72 w-full grid-cols-5 overflow-y-auto rounded-lg rounded-tl-none border border-jacarta-100 
			bg-white text-sm dark:border-jacarta-600 dark:bg-jacarta-700 dark:text-white'>
        <div className='contents' role='row'>
          <div
            className='sticky top-0 bg-light-base py-2 px-4 dark:bg-jacarta-600'
            role='columnheader'>
            <span className='w-full overflow-hidden text-ellipsis text-jacarta-700 dark:text-jacarta-100'>
              Price
            </span>
          </div>
          <div
            className='sticky top-0 bg-light-base py-2 px-4 dark:bg-jacarta-600'
            role='columnheader'>
            <span className='w-full overflow-hidden text-ellipsis text-jacarta-700 dark:text-jacarta-100'>
              USD Price
            </span>
          </div>
          <div
            className='sticky top-0 bg-light-base py-2 px-4 dark:bg-jacarta-600'
            role='columnheader'>
            <span className='w-full overflow-hidden text-ellipsis text-jacarta-700 dark:text-jacarta-100'>
              Floor Difference
            </span>
          </div>
          <div
            className='sticky top-0 bg-light-base py-2 px-4 dark:bg-jacarta-600'
            role='columnheader'>
            <span className='w-full overflow-hidden text-ellipsis text-jacarta-700 dark:text-jacarta-100'>
              Expiration
            </span>
          </div>
          <div
            className='sticky top-0 bg-light-base py-2 px-4 dark:bg-jacarta-600'
            role='columnheader'>
            <span className='w-full overflow-hidden text-ellipsis text-jacarta-700 dark:text-jacarta-100'>
              From
            </span>
          </div>
        </div>
        <div className='contents' role='row'>
          <div
            className='flex items-center whitespace-nowrap border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600'
            role='cell'>
            <span className='-ml-1' data-tippy-content='ETH'>
              <svg
                version='1.1'
                xmlns='http://www.w3.org/2000/svg'
                x='0'
                y='0'
                viewBox='0 0 1920 1920'
                // xml:space='preserve'
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
            <span className='text-sm font-medium tracking-tight text-green'>30 ETH</span>
          </div>
          <div
            className='flex items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600'
            role='cell'>
            $90,136.10
          </div>
          <div
            className='flex items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600'
            role='cell'>
            70% below
          </div>
          <div
            className='flex items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600'
            role='cell'>
            in 5 months
          </div>
          <div
            className='flex items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600'
            role='cell'>
            <a href='user.html' className='text-accent'>
              ViviGiallo
            </a>
          </div>
        </div>
        <div className='contents' role='row'>
          <div
            className='flex items-center whitespace-nowrap border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600'
            role='cell'>
            <span className='-ml-1' data-tippy-content='ETH'>
              <svg
                version='1.1'
                xmlns='http://www.w3.org/2000/svg'
                x='0'
                y='0'
                viewBox='0 0 1920 1920'
                // xml:space='preserve'
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
            <span className='text-sm font-medium tracking-tight text-green'>15.5 ETH</span>
          </div>
          <div
            className='flex items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600'
            role='cell'>
            $45,458.10
          </div>
          <div
            className='flex items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600'
            role='cell'>
            70% below
          </div>
          <div
            className='flex items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600'
            role='cell'>
            in 5 months
          </div>
          <div
            className='flex items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600'
            role='cell'>
            <a href='user.html' className='text-accent'>
              DB96DB
            </a>
          </div>
        </div>
        <div className='contents' role='row'>
          <div
            className='flex items-center whitespace-nowrap border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600'
            role='cell'>
            <span className='-ml-1' data-tippy-content='ETH'>
              <svg
                version='1.1'
                xmlns='http://www.w3.org/2000/svg'
                x='0'
                y='0'
                viewBox='0 0 1920 1920'
                // xml:space='preserve'
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
            <span className='text-sm font-medium tracking-tight text-green'>0.9 ETH</span>
          </div>
          <div
            className='flex items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600'
            role='cell'>
            $2,347.90
          </div>
          <div
            className='flex items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600'
            role='cell'>
            98% below
          </div>
          <div
            className='flex items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600'
            role='cell'>
            in 5 months
          </div>
          <div
            className='flex items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600'
            role='cell'>
            <a href='user.html' className='text-accent'>
              myc_nc
            </a>
          </div>
        </div>
        <div className='contents' role='row'>
          <div
            className='flex items-center whitespace-nowrap border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600'
            role='cell'>
            <span className='-ml-1' data-tippy-content='ETH'>
              <svg
                version='1.1'
                xmlns='http://www.w3.org/2000/svg'
                x='0'
                y='0'
                viewBox='0 0 1920 1920'
                // xml:space='preserve'
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
            <span className='text-sm font-medium tracking-tight text-green'>1.2 ETH</span>
          </div>
          <div
            className='flex items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600'
            role='cell'>
            $4,568.40
          </div>
          <div
            className='flex items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600'
            role='cell'>
            100% below
          </div>
          <div
            className='flex items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600'
            role='cell'>
            in 6 months
          </div>
          <div
            className='flex items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600'
            role='cell'>
            <a href='user.html' className='text-accent'>
              MetaRDnA
            </a>
          </div>
        </div>
        <div className='contents' role='row'>
          <div
            className='flex items-center whitespace-nowrap border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600'
            role='cell'>
            <span className='-ml-1' data-tippy-content='ETH'>
              <svg
                version='1.1'
                xmlns='http://www.w3.org/2000/svg'
                x='0'
                y='0'
                viewBox='0 0 1920 1920'
                // xml:space='preserve'
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
            <span className='text-sm font-medium tracking-tight text-green'>0.5 ETH</span>
          </div>
          <div
            className='flex items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600'
            role='cell'>
            $1,699.10
          </div>
          <div
            className='flex items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600'
            role='cell'>
            100% below
          </div>
          <div
            className='flex items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600'
            role='cell'>
            in 6 months
          </div>
          <div
            className='flex items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600'
            role='cell'>
            <a href='user.html' className='text-accent'>
              Karafuru
            </a>
          </div>
        </div>
        <div className='contents' role='row'>
          <div
            className='flex items-center whitespace-nowrap border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600'
            role='cell'>
            <span className='-ml-1' data-tippy-content='ETH'>
              <svg
                version='1.1'
                xmlns='http://www.w3.org/2000/svg'
                x='0'
                y='0'
                viewBox='0 0 1920 1920'
                // xml:space='preserve'
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
            <span className='text-sm font-medium tracking-tight text-green'>4.7 ETH</span>
          </div>
          <div
            className='flex items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600'
            role='cell'>
            $13,966.64
          </div>
          <div
            className='flex items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600'
            role='cell'>
            40% above
          </div>
          <div
            className='flex items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600'
            role='cell'>
            in 2 months
          </div>
          <div
            className='flex items-center border-t border-jacarta-100 py-4 px-4 dark:border-jacarta-600'
            role='cell'>
            <a href='user.html' className='text-accent'>
              seekortelur
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Offers };
