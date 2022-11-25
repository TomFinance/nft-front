import React from 'react';
import { ModalFooter } from './ModalFooter';
import { ModalHeader } from './ModalHeader';
import styled from './Modal.module.css';

const Modal = ({ setModalIsOpen, title, btnTitle, childrenBody, styledWrapper, onClick }) => {
  return (
    <div className={styled.modalka} onClick={() => {
      setModalIsOpen(false);
    }}>
      <div className={styledWrapper} onClick={(e) => e.stopPropagation()}>
        <div className='modal-content'>
          <ModalHeader title={title} setModalIsOpen={setModalIsOpen} />
          {childrenBody}
          <ModalFooter btnTitle={btnTitle} onClick={onClick}
          />
        </div>
      </div>
    </div>
  );
};

export { Modal };
