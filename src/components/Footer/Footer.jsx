import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../../components/Logo';
import { FooterMenu } from './FooterMenu';

const marketplace = [{ name: 'All NFTs', url: '#' }];

const company = [
  { name: 'Contact Us', url: '#' },
  { name: 'FAQ', url: '#' },
];

const myAccount = [
  { name: 'Authors', url: '#' },
  { name: 'Collection', url: '#' },
  { name: 'Author Profile', url: '#' },
  { name: 'Create Item', url: '#' },
];

const Footer = () => {
  return (
    <footer className='page-footer bg-white dark:bg-jacarta-900'>
      <div className='container'>
        <div className='grid grid-cols-6 gap-x-7 gap-y-14 pt-24 pb-12 md:grid-cols-12'>
          <div className='col-span-3 md:col-span-4'>
            <div className='mb-6 inline-block'>
              <Logo />
            </div>
            <p className='mb-12 dark:text-jacarta-300'>Social-based NFT platform - SkyHall</p>

            <div className='flex space-x-5'>
              <Link to='https://twitter.com/aoneaaonea' className='group'>
                <svg
                  aria-hidden='true'
                  focusable='false'
                  data-prefix='fab'
                  data-icon='twitter'
                  className='h-5 w-5 fill-jacarta-300 group-hover:fill-accent dark:group-hover:fill-white'
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 512 512'>
                  <path
                    d='M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452
										0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568
										130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0
										18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431
										13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258
										216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502
										12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273
										41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z'></path>
                </svg>
              </Link>
            </div>
          </div>
          <div className='col-span-full sm:col-span-3 md:col-span-2 md:col-start-7'>
            <FooterMenu title='Marketplace' data={marketplace} />
          </div>
          <div className='col-span-full sm:col-span-3 md:col-span-2'>
            <FooterMenu title='Company' data={company} />
          </div>
          <div className='col-span-full sm:col-span-3 md:col-span-2'>
            <FooterMenu title='My Account' data={myAccount} />
          </div>
        </div>

        <div className='flex flex-col items-center justify-between space-y-2 py-8 sm:flex-row sm:space-y-0'>
          <span className='text-sm dark:text-jacarta-400'>
            &copy;
            <script>document.write(new Date().getFullYear())</script>
            SkyHall. All Rights Reserved
          </span>
          <ul className='flex flex-wrap space-x-4 text-sm dark:text-jacarta-400'>
            <li>
              <Link to='/Terms_and_conditions' className='hover:text-accent dark:hover:text-white'>
                Terms and conditions
              </Link>
            </li>
            <li>
              <Link to='Privacy_policy' className='hover:text-accent dark:hover:text-white'>
                Privacy policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
