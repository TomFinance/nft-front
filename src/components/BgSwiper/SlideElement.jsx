import React from 'react';
import { Link } from 'react-router-dom';

const SlideElement = ({ idx, image, avatar, title, name }) => {
  const itemPath = `/item/${idx}`;
  return (
    <div>
      <article>
        <div className='block overflow-hidden rounded-2.5xl bg-white shadow-md transition-shadow hover:shadow-lg dark:bg-jacarta-700'>
          <figure className='relative'>
            <Link to={itemPath}>
              <img
                src={image}
                alt='item 1'
                height='430'
                width='379'
                className='swiper-lazy h-[430px] w-full object-cover'
              />
              {/* Loading UI => active later */}
              {/*<div className='swiper-lazy-preloader'></div>*/}
            </Link>
          </figure>
          <div className='p-6'>
            <div className='flex'>
              <Link to={itemPath} className='shrink-0'>
                <img src={avatar} alt='avatar' className='mr-4 h-10 w-10 rounded-full' />
              </Link>
              <div>
                <Link to={itemPath} className='block'>
                  <span className='font-display text-lg leading-none text-jacarta-700 hover:text-accent dark:text-white'>
                    {title}
                  </span>
                </Link>
                <Link to={itemPath} className='text-2xs text-accent'>
                  {name}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export { SlideElement };
