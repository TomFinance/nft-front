import React from 'react';

const TableTitle = () => {
  return (
    <div className='flex rounded-t-2lg bg-jacarta-50 dark:bg-jacarta-600' role='row'>
      <div className='w-[28%] py-3 px-4' role='columnheader'>
        <span className='w-full overflow-hidden text-ellipsis text-jacarta-700 dark:text-jacarta-100'>
          Collection
        </span>
      </div>
      <div className='w-[12%] py-3 px-4' role='columnheader'>
        <span className='w-full overflow-hidden text-ellipsis text-jacarta-700 dark:text-jacarta-100'>
          Volume
        </span>
      </div>
      <div className='w-[12%] py-3 px-4' role='columnheader'>
        <span className='w-full overflow-hidden text-ellipsis text-jacarta-700 dark:text-jacarta-100'>
          24h %
        </span>
      </div>
      <div className='w-[12%] py-3 px-4' role='columnheader'>
        <span className='w-full overflow-hidden text-ellipsis text-jacarta-700 dark:text-jacarta-100'>
          7d %
        </span>
      </div>
      <div className='w-[12%] py-3 px-4' role='columnheader'>
        <span className='w-full overflow-hidden text-ellipsis text-jacarta-700 dark:text-jacarta-100'>
          Floor Price
        </span>
      </div>
      <div className='w-[12%] py-3 px-4' role='columnheader'>
        <span className='w-full overflow-hidden text-ellipsis text-jacarta-700 dark:text-jacarta-100'>
          Owners
        </span>
      </div>
      <div className='w-[12%] py-3 px-4' role='columnheader'>
        <span className='w-full overflow-hidden text-ellipsis text-jacarta-700 dark:text-jacarta-100'>
          Items
        </span>
      </div>
    </div>
  );
};

export {TableTitle};
