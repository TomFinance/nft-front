import React from 'react';
import { SlideElement } from './SlideElement';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/scss/navigation';
import { Left } from './Left';
import { Right } from './Right';

/*
import item_12_lg from '../../img/products/item_12_lg.jpg';
import item_13_lg from '../../img/products/item_13_lg.gif';
import item_16_lg from '../../img/products/item_16_lg.jpg';
import item_14_lg from '../../img/products/item_14_lg.jpg';
import item_15_lg from '../../img/products/item_15_lg.jpg';
import avatar_17_rounded from '../../img/avatars/avatar_17_rounded.jpg';
import avatar_18_rounded from '../../img/avatars/avatar_18_rounded.gif';
import avatar_22_rounded from '../../img/avatars/avatar_22_rounded.jpg';
import avatar_19_rounded from '../../img/avatars/avatar_19_rounded.jpg';
import avatar_20_rounded from '../../img/avatars/avatar_20_rounded.jpg';

const data = [
  {image: item_12_lg, avatar: avatar_17_rounded, title: 'Light Bars', name: 'Wow Frens'},
  {
    image: item_13_lg,
    avatar: avatar_18_rounded,
    title: 'A1Aerium NFT Launching Lab',
    name: '051_Hart',
  },
  {
    image: item_16_lg,
    avatar: avatar_22_rounded,
    title: 'Oceania \\ OVERSEER',
    name: 'MadeByM1KE',
  },
  {image: item_14_lg, avatar: avatar_19_rounded, title: 'Amazing NFT art', name: 'Lila Spacex'},
  {image: item_15_lg, avatar: avatar_20_rounded, title: 'SwagFox#133', name: 'Bored Bunny'},
];*/

const BgSwiper = ({data}) => {
  return (
        <div className='relative'>
          <Swiper
            className="swiper card-slider-3-columns !pb-5 swiper-initialized swiper-horizontal"
            slidesPerView={1}
            modules={[Navigation]}
            spaceBetween={16}
            breakpoints={{768:{slidesPerView:2}, 1024:{slidesPerView:3}}}
            navigation={{nextEl: '.swiper-button-next-3',prevEl: '.swiper-button-prev-3'}}
          >
            {data.map((card) => {
              return (
                <SwiperSlide key={card.title}>
                  <SlideElement
                    image={card.image}
                    avatar={card.avatar}
                    title={card.title}
                    name={card.name}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <Left />
          <Right />
        </div>
  );
};

export { BgSwiper };
