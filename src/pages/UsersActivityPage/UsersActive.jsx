import React from 'react';
import gradient_light from '../../img/gradient_light.jpg';
import { Link } from 'react-router-dom';
import avatar_2 from '../../img/avatars/avatar_2.jpg';
import item_21_sm from '../../img/products/item_21_sm.jpg';
import item_22_sm from '../../img/products/item_22_sm.jpg';
import item_23_sm from '../../img/products/item_23_sm.jpg';
import item_24_sm from '../../img/products/item_24_sm.jpg';
import { ActivitySearch } from '../../components/ActivitySearch';
import { Activity } from '../../components/Activity';

//!need svg!

// const btnData = [
// { url: svg_6, title: 'Listing' },
// { url: svg_7, title: 'Bids' },
// { url: svg_8, title: 'Transfer' },
// { url: svg_9, title: 'Likes' },
// { url: svg_10, title: 'Purchases' },
// ];

// {btnData.map((btn) => {
// 	return <ActivityButton key={btn.title} url={btn.url} title={btn.title} />;
// })}

const UsersActive = () => {
  return (
    <main>
      <section className='relative py-24'>
        <picture className='pointer-events-none absolute inset-0 -z-10 dark:hidden'>
          <img src={gradient_light} alt='gradient' className='h-full w-full' />
        </picture>
        <div className='container'>
          <h1 className='py-16 text-center font-display text-4xl font-medium text-jacarta-700 dark:text-white'>
            Activity
          </h1>

          <Activity />
        </div>
      </section>
    </main>
  );
};

export { UsersActive };
