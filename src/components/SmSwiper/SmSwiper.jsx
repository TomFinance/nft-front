import React from 'react';
import SwipeElement from './SwipeElement';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/scss/navigation';
import arrayShuffle from 'array-shuffle';

const SmSwiper = ({ data }) => {
  data = arrayShuffle(data);

  return (
    <div className='relative'>
      {/* Slider  */}
      <div className='swiper-wrapper'>
        <Swiper
          className="swiper card-slider-4-columns !pb-5 swiper-initialized swiper-horizontal"
          //modules={[Navigation]}
          spaceBetween={30}
          //slidesPerView={4}
          slidesPerView={1}
          modules={[Navigation]}
          //spaceBetween={16}
          breakpoints={{560:{slidesPerView:2}, 768:{slidesPerView:3}, 1024:{slidesPerView:4}}}
          navigation={{nextEl: '.nbn2',prevEl: '.pbn2'}}


          // navigation={true}
        >
          {data.map((grid) => {
            return (
              <SwiperSlide key={grid.image}>
                <SwipeElement
                  idx={grid.idx}
                  url={grid.image}
                  alt={grid.title}
                  title={grid.title}
                  price={grid.price}
                  likes="0"//{grid.likes}
                  countComment="0"//{grid.countComment}
                  currentBid={grid.name}//{grid.currentBid}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      
      <div
        className='swiper-button-prev-3 pbn2 group absolute top-1/2 -left-4 z-10 -mt-6 flex h-12 w-12 
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
      <div
        className='swiper-button-next-3 nbn2 group absolute top-1/2 -right-4 z-10 -mt-6 flex h-12 w-12 
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
