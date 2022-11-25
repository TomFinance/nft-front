import React from 'react';
import { GridElement } from './GridElement';
import { Link } from 'react-router-dom';
import avatar_1 from '../../img/avatars/avatar_1.jpg';
import avatar_2 from '../../img/avatars/avatar_2.jpg';
import avatar_3 from '../../img/avatars/avatar_3.jpg';
import avatar_4 from '../../img/avatars/avatar_4.jpg';
import avatar_5 from '../../img/avatars/avatar_5.jpg';
import avatar_6 from '../../img/avatars/avatar_6.gif';
import avatar_7 from '../../img/avatars/avatar_7.jpg';
import avatar_8 from '../../img/avatars/avatar_8.jpg';
import avatar_9 from '../../img/avatars/avatar_9.jpg';
import avatar_10 from '../../img/avatars/avatar_10.jpg';
import avatar_11 from '../../img/avatars/avatar_11.jpg';
import avatar_12 from '../../img/avatars/avatar_12.jpg';
import avatar_13 from '../../img/avatars/avatar_13.jpg';
import avatar_14 from '../../img/avatars/avatar_14.jpg';
import avatar_15 from '../../img/avatars/avatar_15.jpg';
import avatar_16 from '../../img/avatars/avatar_16.jpg';

const data = [
  {
    title: 'NFT Funny Cat',
    order: '1',
    verified: true,
    price: '7,080.95 A1A',
    alt: 'avatar 1',
    url: avatar_1,
  },
  {
    title: 'NFT Funny Cat',
    order: '2',
    verified: true,
    price: '7,080.95 A1A',
    alt: 'avatar 2',
    url: avatar_2,
  },
  {
    title: 'NFT Funny Cat',
    order: '3',
    verified: false,
    price: '7,080.95 A1A',
    alt: 'avatar 3',
    url: avatar_3,
  },
  {
    title: 'NFT Funny Cat',
    order: '4',
    verified: false,
    price: '7,080.95 A1A',
    alt: 'avatar 4',
    url: avatar_4,
  },
  {
    title: 'NFT Funny Cat',
    order: '5',
    verified: false,
    price: '7,080.95 A1A',
    alt: 'avatar 5',
    url: avatar_5,
  },
  {
    title: 'NFT Funny Cat',
    order: '6',
    verified: true,
    price: '7,080.95 A1A',
    alt: 'avatar 6',
    url: avatar_6,
  },
  {
    title: 'NFT Funny Cat',
    order: '7',
    verified: true,
    price: '7,080.95 A1A',
    alt: 'avatar 7',
    url: avatar_7,
  },
  {
    title: 'NFT Funny Cat',
    order: '8',
    verified: true,
    price: '7,080.95 A1A',
    alt: 'avatar 8',
    url: avatar_8,
  },
  {
    title: 'NFT Funny Cat',
    order: '9',
    verified: false,
    price: '7,080.95 A1A',
    alt: 'avatar 9',
    url: avatar_9,
  },
  {
    title: 'NFT Funny Cat',
    order: '10',
    verified: true,
    price: '7,080.95 A1A',
    alt: 'avatar 10',
    url: avatar_10,
  },
  {
    title: 'NFT Funny Cat',
    order: '11',
    verified: false,
    price: '7,080.95 A1A',
    alt: 'avatar 11',
    url: avatar_11,
  },
  {
    title: 'NFT Funny Cat',
    order: '12',
    verified: false,
    price: '7,080.95 A1A',
    alt: 'avatar 12',
    url: avatar_12,
  },
  {
    title: 'NFT Funny Cat',
    order: '13',
    verified: true,
    price: '7,080.95 A1A',
    alt: 'avatar 13',
    url: avatar_13,
  },
  {
    title: 'NFT Funny Cat',
    order: '14',
    verified: false,
    price: '7,080.95 A1A',
    alt: 'avatar 14',
    url: avatar_14,
  },
  {
    title: 'NFT Funny Cat',
    order: '15',
    verified: true,
    price: '7,080.95 A1A',
    alt: 'avatar 15',
    url: avatar_15,
  },
  {
    title: 'NFT Funny Cat',
    order: '16',
    verified: false,
    price: '7,080.95 A1A',
    alt: 'avatar 16',
    url: avatar_16,
  },
];

const TopCreatorMain = ({data}) => {
  return (
    <div>
      <section className='relative py-24 dark:bg-jacarta-800'>
        <div className='container'>
          <div className='mb-12 text-center font-display text-3xl text-jacarta-700 dark:text-white'>
            <h2 className='inline'>Top Creator over </h2>
            <div className='dropdown inline cursor-pointer'>
              <button
                className='dropdown-toggle inline-flex items-center text-accent'
                type='button'
                id='collectionSort'
                data-bs-toggle='dropdown'
                aria-expanded='false'>
                last 7 days
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  width='24'
                  height='24'
                  className='h-8 w-8 fill-accent'>
                  <path fill='none' d='M0 0h24v24H0z' />
                  <path d='M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z' />
                </svg>
              </button>
              <div
                className='dropdown-menu z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white py-4 px-2 text-left
								shadow-xl dark:bg-jacarta-800'
                aria-labelledby='collectionSort'></div>
            </div>
          </div>

          <div className='grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-[1.875rem] lg:grid-cols-4'>
            {data.map((item) => {
              return (
                <GridElement
                  key={item.order}
                  title={item.title}
                  order={item.order}
                  verified={item.verified}
                  price={item.price}
                  alt={item.alt}
                  url={item.url}
                />
              );
            })}
          </div>
          <div className='mt-10 text-center'>
            <Link
              to='/rankings'
              className='inline-block rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume
							transition-all hover:bg-accent-dark'>
              Go to Rankings
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export { TopCreatorMain };
