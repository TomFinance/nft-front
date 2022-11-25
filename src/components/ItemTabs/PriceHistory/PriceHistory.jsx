import React from 'react';

const PriceHistory = () => {
  return (
    <div
      // className='tab-pane fade'
      id='price-history'
      role='tabpanel'
      aria-labelledby='price-history-tab'>
      <div
        className='rounded-t-2lg rounded-b-2lg rounded-tl-none border border-jacarta-100 
			bg-white p-6 dark:border-jacarta-600 dark:bg-jacarta-700'>
        <div className='mb-10 flex flex-wrap items-center'>
          <select
            className='mr-8 min-w-[12rem] rounded-lg border-jacarta-100 py-3.5 text-sm dark:border-jacarta-600
					dark:bg-jacarta-700 dark:text-white'>
            <option value='7-days'>Last 7 Days</option>
            <option value='14-days'>Last 14 Days</option>
            <option value='30-days'>Last 30 Days</option>
            <option value='60-days'>Last 60 Days</option>
            <option value='90-days' defaultValue>
              Last 90 Days
            </option>
            <option value='last-year'>Last Year</option>
            <option value='all-time'>All Time</option>
          </select>

          <div className='py-2'>
            <span className='mr-4 inline-block align-middle'>
              <span className='block text-sm font-bold dark:text-white'>90 Day Avg. Price:</span>
              <span className='block text-sm font-bold text-green'>Ξ7.0633</span>
            </span>

            <span className='inline-block align-middle'>
              <span className='block text-sm font-bold dark:text-white'>90 Day Volume:</span>
              <span className='block text-sm font-bold text-green'>Ξ24,085.6957</span>
            </span>
          </div>
        </div>

        <div className='chart-container relative h-80 w-full'>
          <canvas id='activityChart'>{/* canvas */}</canvas>
        </div>
      </div>
    </div>
  );
};

export { PriceHistory };
