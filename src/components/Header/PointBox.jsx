import React from 'react';

function PointBox(props) {
  return (
    <div className='mx-5 mb-6 rounded-lg border border-jacarta-100 p-4 dark:border-jacarta-600'>
                    <span className='text-sm font-medium tracking-tight dark:text-jacarta-200'>
                      ONE Point
                    </span>
      <div className='flex items-center'>
        {/* <img src={point_icon} alt="avatar" className="mr-4 h-4 w-4 rounded-full"> */}
        <span className='text-base font-bold text-red'>10</span>
        <span className='text-xs text-red'>&nbsp;POINT</span>
      </div>
    </div>
  );
}

export default PointBox;
