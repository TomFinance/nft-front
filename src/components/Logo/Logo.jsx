import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';
import logo_white from '../../img/logo_white.png';

const Logo = () => {
  return (
    <Link to='/index' className='shrink-0 '>
      <img src={logo} className='max-h-12 dark:hidden' alt='Xhibiter | NFT Marketplace' />
      <img
        src={logo_white}
        className='hidden max-h-12 dark:block'
        alt='Xhibiter | NFT Marketplace'
      />
    </Link>
  );
};

export { Logo };
