import React from 'react';
import SwipeElement from './SwipeElement';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/scss/navigation';

const SmSwiper = ({ data }) => {
  return (
    <div className='relative'>
      {/* Slider  */}
      <div
        className='swiper-button-prev-3 group absolute top-1/2 -left-4 z-10 -mt-6 flex h-12 w-12 
						cursor-pointer items-center justify-center rounded-full bg-white p-3 text-base shadow-white-volume sm:-left-6'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          width='24'
          height='24'
          className='fill-jacarta-700 group-hover:fill-accent'>
          <path fill='none' d='M0 0h24v24H0z' />
          <path d='M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z' />
        </svg>
      </div>
      <div className='swiper card-slider-4-columns !py-5'>
        <div className='swiper-wrapper'>
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={4}
            // navigation={true}
          >
            {data.map((grid) => {
              return (
                <SwiperSlide key={grid.url}>
                  <SwipeElement
                    url={grid.url}
                    alt={grid.alt}
                    title={grid.title}
                    likes={grid.likes}
                    countComment={grid.countComment}
                    currentBid={grid.currentBid}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <div
        className='swiper-button-next-3 group absolute top-1/2 -right-4 z-10 -mt-6 flex h-12 w-12 
						cursor-pointer items-center justify-center rounded-full bg-white p-3 text-base shadow-white-volume sm:-right-6'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          width='24'
          height='24'
          className='fill-jacarta-700 group-hover:fill-accent'>
          <path fill='none' d='M0 0h24v24H0z' />
          <path d='M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z' />
        </svg>
      </div>
    </div>
  );
};

export { SmSwiper };
