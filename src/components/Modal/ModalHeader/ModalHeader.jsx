import React from 'react';

const ModalHeader = ({ title, setModalIsOpen }) => {
  return (
    <div className='modal-header'>
      <h5 className='modal-title'>{title}</h5>
      <button className='btn-close' onClick={() => setModalIsOpen(false)}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          width='24'
          height='24'
          className='h-6 w-6 fill-jacarta-700 dark:fill-white'>
          <path fill='none' d='M0 0h24v24H0z' />
          <path
            d='M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 
					4.95-4.95-4.95-4.95L7.05 5.636z'
          />
        </svg>
      </button>
    </div>
  );
};

export { ModalHeader };
