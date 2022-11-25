import React from 'react';
import { Link } from 'react-router-dom';
import partner_logo_1 from '../../img/partners/partner_logo_1.png';
import partner_logo_2 from '../../img/partners/partner_logo_2.png';
import partner_logo_3 from '../../img/partners/partner_logo_3.png';
import partner_logo_4 from '../../img/partners/partner_logo_4.png';
import partner_logo_5 from '../../img/partners/partner_logo_5.png';

const Partners = () => {
  return (
    <div className='bg-light-base dark:bg-jacarta-800'>
      <div className='container'>
        <div className='grid grid-cols-2 py-8 sm:grid-cols-5'>
          <Link to='#'>
            <img src={partner_logo_1} alt='partner 1' />
          </Link>
          <Link to='#'>
            <img src={partner_logo_2} alt='partner 2' />
          </Link>
          <Link to='#'>
            <img src={partner_logo_3} alt='partner 3' />
          </Link>
          <Link to='#'>
            <img src={partner_logo_4} alt='partner 4' />
          </Link>
          <Link to='#'>
            <img src={partner_logo_5} alt='partner 5' />
          </Link>
        </div>
      </div>
    </div>
  );
};

export { Partners };
