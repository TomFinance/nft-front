import React from 'react';
import { RankingFilters } from '../../components/RankingFilters';
import { RankingTable } from '../../components/RankingTable';

const RankingList = () => {
  return (
    <main>
      <section className='relative py-24'>
        <picture className='pointer-events-none absolute inset-0 -z-10 dark:hidden'>
          <img src='img/gradient_light.jpg' alt='gradient' className='h-full w-full' />
        </picture>
        <div className='container'>
          <h1 className='py-16 text-center font-display text-4xl font-medium text-jacarta-700 dark:text-white'>
            Rankings
          </h1>
          <RankingFilters />
          <div className='scrollbar-custom overflow-x-auto'>
            <RankingTable />
          </div>
        </div>
      </section>
    </main>
  );
};

export { RankingList };
