import Tippy from "@tippyjs/react";
import React from "react";

const AddressLink = ({address}) => {
  return (
    <button
      className='js-copy-clipboard my-4 flex select-none items-center whitespace-nowrap px-5 font-display
									leading-none text-jacarta-700 dark:text-white'
      data-tippy-content='Copy'>
      <Tippy content='Copy'>
                      <span
                        className='max-w-[10rem] overflow-hidden text-ellipsis'
                        onClick={() => {
                          // writeText(your_state)
                          navigator.clipboard.writeText(
                            address,
                          );
                        }}>
                        {address}
                      </span>
      </Tippy>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        width='24'
        height='24'
        className='ml-1 mb-px h-4 w-4 fill-jacarta-500 dark:fill-jacarta-300'>
        <path fill='none' d='M0 0h24v24H0z' />
        <path
          d='M7 7V3a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-4v3.993c0 .556-.449 1.007-1.007
										1.007H3.007A1.006 1.006 0 0 1 2 20.993l.003-12.986C2.003 7.451 2.452 7 3.01 7H7zm2 0h6.993C16.549
										7 17 7.449 17 8.007V15h3V4H9v3zM4.003 9L4 20h11V9H4.003z'
        />
      </svg>
    </button>
    )
};

export { AddressLink };


