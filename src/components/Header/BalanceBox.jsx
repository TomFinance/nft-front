import React from 'react';

function BalanceBox({balance}) {
  return (
    <div className='mx-5 mb-6 rounded-lg border border-jacarta-100 p-4 dark:border-jacarta-600'>
                    <span className='text-sm font-medium tracking-tight dark:text-jacarta-200'>
                      Balance
                    </span>
      <div className='flex items-center'>
        <svg
          version='1.1'
          xmlns='http://www.w3.org/2000/svg'
          x='0'
          y='0'
          viewBox='0 0 1920 1920'
          // xml:space='preserve'
          className='-ml-1 mr-1 h-[1.125rem] w-[1.125rem]'>
          <path fill='#8A92B2' d='M959.8 80.7L420.1 976.3 959.8 731z'></path>
          <path
            fill='#62688F'
            d='M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z'></path>
          <path fill='#454A75' d='M959.8 1295.4l539.8-319.1L959.8 731z'></path>
          <path fill='#8A92B2' d='M420.1 1078.7l539.7 760.6v-441.7z'></path>
          <path fill='#62688F' d='M959.8 1397.6v441.7l540.1-760.6z'></path>
        </svg>
        <span className='text-lg font-bold text-green'>{balance} KLAY</span>
      </div>
    </div>
  );
}

export default BalanceBox;




