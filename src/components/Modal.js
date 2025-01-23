import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { openModal } from '../action/ModalAction';  
import './Modal.css';

const Modal = () => {
  const dispatch = useDispatch();
  const modal = useSelector(state => state.modal);
  const { openClose, content } = modal;

  useEffect(() => {
    if (openClose === 'open') {
      document.body.style.overflow = 'hidden'; 
    } else {
      document.body.style.overflow = '';
    }

    // Cleanup the effect on component unmount
    return () => {
      document.body.style.overflow = ''; // Ensure scrolling is re-enabled on unmount
    };
  }, [openClose]);

  const closeModalHandler = () => {
    dispatch(openModal("close", ''));
  };

  return (
    <div className={`site-modal ${openClose === 'open' ? 'open' : 'closed'}`} role="dialog" aria-hidden={openClose === 'closed'}>
      <div className='modal-content'>
        <div>
          <span onClick={closeModalHandler} className='close'>&times;</span>
        </div>
        <div>{content}</div>
      </div>
    </div>
  );
};

export default Modal;
