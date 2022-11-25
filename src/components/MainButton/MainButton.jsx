import React from 'react';
import { Link } from 'react-router-dom';

const MainButton = ({ title, onClick }) => {
  return (
    <Link
      onClick={onClick}
      to='#'
      className='rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all
			hover:bg-accent-dark'>
      {title}
    </Link>
  );
};

export { MainButton };
