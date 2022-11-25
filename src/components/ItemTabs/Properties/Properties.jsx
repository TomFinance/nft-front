import React from 'react';
import { Link } from 'react-router-dom';

const Properties = () => {
  return (
    <div
      // className='tab-pane fade'
      id='properties'
      role='tabpanel'
      aria-labelledby='properties-tab'>
      <div
        className='rounded-t-2lg rounded-b-2lg rounded-tl-none border border-jacarta-100 bg-white p-6 dark:border-jacarta-600 
			dark:bg-jacarta-700 md:p-10'>
        <div className='grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4'>
          <Link
            to='/collection'
            className='flex flex-col space-y-2 rounded-2lg border border-jacarta-100 bg-light-base p-5 text-center transition-shadow 
						hover:shadow-lg dark:border-jacarta-600 dark:bg-jacarta-800'>
            <span className='text-sm uppercase text-accent'>ACCESSORY</span>
            <span className='text-base text-jacarta-700 dark:text-white'>Metal headband</span>
            <span className='text-sm text-jacarta-400'>3% have this trait</span>
          </Link>
          <Link
            to='/collection'
            className='flex flex-col space-y-2 rounded-2lg border border-jacarta-100 bg-light-base p-5 text-center transition-shadow 
						hover:shadow-lg dark:border-jacarta-600 dark:bg-jacarta-800'>
            <span className='text-sm uppercase text-accent'>SKIN</span>
            <span className='text-base text-jacarta-700 dark:text-white'>Dark Brown</span>
            <span className='text-sm text-jacarta-400'>8% have this trait</span>
          </Link>
          <Link
            to='/collection'
            className='flex flex-col space-y-2 rounded-2lg border border-jacarta-100 bg-light-base p-5 text-center transition-shadow 
						hover:shadow-lg dark:border-jacarta-600 dark:bg-jacarta-800'>
            <span className='text-sm uppercase text-accent'>EYES</span>
            <span className='text-base text-jacarta-700 dark:text-white'>Cyborg</span>
            <span className='text-sm text-jacarta-400'>2% have this trait</span>
          </Link>
          <Link
            to='/collection'
            className='flex flex-col space-y-2 rounded-2lg border border-jacarta-100 bg-light-base p-5 text-center transition-shadow 
						hover:shadow-lg dark:border-jacarta-600 dark:bg-jacarta-800'>
            <span className='text-sm uppercase text-accent'>CLOTH</span>
            <span className='text-base text-jacarta-700 dark:text-white'>Adidas</span>
            <span className='text-sm text-jacarta-400'>7% have this trait</span>
          </Link>
          <Link
            to='collection'
            className='flex flex-col space-y-2 rounded-2lg border border-jacarta-100 bg-light-base p-5 text-center transition-shadow 
						hover:shadow-lg dark:border-jacarta-600 dark:bg-jacarta-800'>
            <span className='text-sm uppercase text-accent'>HAIR</span>
            <span className='text-base text-jacarta-700 dark:text-white'>White Ash</span>
            <span className='text-sm text-jacarta-400'>7% have this trait</span>
          </Link>
          <Link
            to='/collection'
            className='flex flex-col space-y-2 rounded-2lg border border-jacarta-100 bg-light-base p-5 text-center transition-shadow 
						hover:shadow-lg dark:border-jacarta-600 dark:bg-jacarta-800'>
            <span className='text-sm uppercase text-accent'>CHARACTER</span>
            <span className='text-base text-jacarta-700 dark:text-white'>TSAREVNA</span>
            <span className='text-sm text-jacarta-400'>1% have this trait</span>
          </Link>
          <Link
            to='/collection'
            className='flex flex-col space-y-2 rounded-2lg border border-jacarta-100 bg-light-base p-5 text-center transition-shadow 
						hover:shadow-lg dark:border-jacarta-600 dark:bg-jacarta-800'>
            <span className='text-sm uppercase text-accent'>BACKGROUND</span>
            <span className='text-base text-jacarta-700 dark:text-white'>CyberPunk</span>
            <span className='text-sm text-jacarta-400'>9% have this trait</span>
          </Link>
          <Link
            to='/collection'
            className='flex flex-col space-y-2 rounded-2lg border border-jacarta-100 bg-light-base p-5 text-center transition-shadow 
						hover:shadow-lg dark:border-jacarta-600 dark:bg-jacarta-800'>
            <span className='text-sm uppercase text-accent'>MOUTH</span>
            <span className='text-base text-jacarta-700 dark:text-white'>Flower</span>
            <span className='text-sm text-jacarta-400'>4% have this trait</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export { Properties };
