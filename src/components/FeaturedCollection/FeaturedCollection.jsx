import React from 'react';

/*import item_1 from '../../img/products/item_1.jpg';
import item_2 from '../../img/products/item_2.jpg';
import item_6 from '../../img/products/item_6.jpg';
import item_4 from '../../img/products/item_4.jpg';
import item_3 from '../../img/products/item_3.gif';
import item_5 from '../../img/products/item_5.jpg';*/
import { SmSwiper } from '../SmSwiper';

/*const data = [
  {
    url: item_1,
    alt: 'item',
    title: 'ETH Me Outside',
    likes: '159',
    countComment: '10',
    currentBid: '1.3 A1A',
  },
  {
    url: item_2,
    alt: 'item',
    title: 'ETH Me Outside',
    likes: '159',
    countComment: '10',
    currentBid: '1.3 A1A',
  },
  {
    url: item_6,
    alt: 'item',
    title: 'ETH Me Outside',
    likes: '159',
    countComment: '10',
    currentBid: '1.3 A1A',
  },
  {
    url: item_4,
    alt: 'item',
    title: 'ETH Me Outside',
    likes: '159',
    countComment: '10',
    currentBid: '1.3 A1A',
  },
  {
    url: item_3,
    alt: 'item',
    title: 'ETH Me Outside',
    likes: '159',
    countComment: '10',
    currentBid: '1.3 A1A',
  },
  {
    url: item_5,
    alt: 'item',
    title: 'ETH Me Outside',
    likes: '159',
    countComment: '10',
    currentBid: '1.3 A1A',
  },
];*/

const FeaturedCollection = ({data}) => {
  return (
    <section className='py-24'>
      <div className='container'>
        <h2 className='mb-8 text-center font-display text-3xl text-jacarta-700 dark:text-white'>
          <span
            className='mr-1 inline-block h-6 w-6 bg-contain bg-center text-xl'
            style={{
              backgroundImage:
                "url('https://cdn.jsdelivr.net/npm/emoji-datasource-apple@7.0.2/img/apple/64/1f4a5.png')",
            }}></span>
          Featured items
        </h2>
        <SmSwiper data={data} />
      </div>
    </section>
  );
};

export { FeaturedCollection };
