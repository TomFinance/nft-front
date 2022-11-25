import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
const CopyLink = ({walletAddress}) => {
  return (
    <Tippy content='Copy'>
      <div
        className='mb-8 inline-flex items-center justify-center rounded-full border border-jacarta-100 bg-white py-1.5 px-4 
		dark:border-jacarta-600 dark:bg-jacarta-700'>
        <span data-tippy-content='ETH'>
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
        <button
          onClick={() => {
            // writeText(your_state)
            navigator.clipboard.writeText(0x7a86c0b064171007716bbd6af96676935799a63e);
          }}
          className='js-copy-clipboard max-w-[10rem] select-none overflow-hidden text-ellipsis whitespace-nowrap dark:text-jacarta-200'
          data-tippy-content='Copy'>
          <span>{walletAddress ?walletAddress : '0x7a86c0b064171007716bbd6af96676935799a63e'}</span>
        </button>
      </div>
    </Tippy>
  );
};

export { CopyLink };
