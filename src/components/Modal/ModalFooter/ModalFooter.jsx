import React from 'react';
import { MainButton } from '../../MainButton';

const ModalFooter = ({ btnTitle, onClick }) => {
  return (
    <div className='modal-footer'>
      <div className='flex items-center justify-center space-x-4'>
        <MainButton title={btnTitle} onClick={onClick} />
      </div>
    </div>
  );
};

export { ModalFooter };
