import React from 'react';
import { TableElement } from './TableElement/TableElement';
import avatar_1 from '../../img/avatars/avatar_1.jpg';
import avatar_2 from '../../img/avatars/avatar_2.jpg';
import avatar_3 from '../../img/avatars/avatar_3.jpg';
import avatar_4 from '../../img/avatars/avatar_4.jpg';
import avatar_5 from '../../img/avatars/avatar_5.jpg';
import avatar_6 from '../../img/avatars/avatar_6.jpg';
import avatar_7 from '../../img/avatars/avatar_7.jpg';
import { TableTitle } from './TableTitle';

const data = [
  {
    url: avatar_1,
    alt: 'avatar 1',
    order: '1',
    title: 'NFT Funny Cat',
    volume: '30,643.01',
    day: '-35.75',
    week: '-49.99',
    floorPrice: '15.49',
    owners: '3.5K',
    items: '10.0K',
    verified: true,
  },
  {
    url: avatar_2,
    alt: 'avatar 2',
    order: '2',
    title: 'Cryptopank',
    volume: '18,973.17',
    day: '+25.75',
    week: '-10.28',
    floorPrice: '7.57',
    owners: '6.2K',
    items: '8.2K',
    verified: false,
  },
  {
    url: avatar_3,
    alt: 'avatar 3',
    order: '3',
    title: 'Bored Bunny',
    volume: '13,503.09',
    day: '+71.77',
    week: '-61.16',
    floorPrice: '3.31',
    owners: '11.5K',
    items: '6.2K',
    verified: false,
  },
  {
    url: avatar_4,
    alt: 'avatar 4',
    order: '4',
    title: 'NFT stars',
    volume: '6,098.71',
    day: '-35.75',
    week: '+27.79',
    floorPrice: '7.57',
    owners: '5K',
    items: '8.2K',
    verified: false,
  },
  {
    url: avatar_5,
    alt: 'avatar 5',
    order: '5',
    title: 'Arcahorizons',
    volume: '4,689.20',
    day: '-73.64',
    week: '+98.87',
    floorPrice: '0.55',
    owners: '3.4K',
    items: '5.2K',
    verified: false,
  },
  {
    url: avatar_6,
    alt: 'avatar 6',
    order: '6',
    title: 'Wow Frens',
    volume: '4,342.51',
    day: '-8.65',
    week: '+58.15',
    floorPrice: '1.84',
    owners: '5.4K',
    items: '6.2K',
    verified: false,
  },
  {
    url: avatar_7,
    alt: 'avatar 7',
    order: '7',
    title: 'Asumitsu',
    volume: '3,156.51',
    day: '+40.79',
    week: '-55.40',
    floorPrice: '3.74',
    owners: '2.1K',
    items: '10.1K',
    verified: true,
  },
];

const RankingTable = () => {
  return (
    <div
      role='table'
      className='w-full min-w-[736px] border border-jacarta-100 bg-white text-sm dark:border-jacarta-600 
			dark:bg-jacarta-700 dark:text-white lg:rounded-2lg'>
      <TableTitle />

      {data.map((tableElement) => {
        return (
          <TableElement
            key={tableElement.order}
            url={tableElement.url}
            alt={tableElement.alt}
            order={tableElement.order}
            title={tableElement.title}
            volume={tableElement.volume}
            day={tableElement.day}
            week={tableElement.week}
            floorPrice={tableElement.floorPrice}
            owners={tableElement.owners}
            items={tableElement.items}
            verified={tableElement.verified}
          />
        );
      })}
    </div>
  );
};

export { RankingTable };
