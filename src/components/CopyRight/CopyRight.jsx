import React from 'react';
import { Link } from 'react-router-dom';

const handleLinkClick = (event, data) => {
  window.location.href = "mailto:" + data.email;
  event.preventDefault();
};

const CopyRight = ({data}) => {
  return (
    <>
    &copy; {data.date_} {data.right_}<br/>
    {data.address}<br/>
    Email : <Link to="#" onClick={event => handleLinkClick(event, data)} className='hover:text-accent dark:hover:text-white'>{data.email}</Link>
    </>
  );
};

export { CopyRight };