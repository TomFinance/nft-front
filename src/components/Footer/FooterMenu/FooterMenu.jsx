import React from 'react';
import { Link } from 'react-router-dom';

const FooterMenu = ({ title, data }) => {
  return (
    <>
      <h3 className='mb-6 font-display text-sm text-jacarta-700 dark:text-white'>{title}</h3>
      <ul className='flex flex-col space-y-1 dark:text-jacarta-300'>
        {data?.map((item) => {
          return (
            <li key={item.name}>
              <Link to={item.url} className='hover:text-accent dark:hover:text-white'>
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export { FooterMenu };
