import React, { useState, useRef } from 'react';

import AuthorizationExample from '../../../AuthorizationExample';
import { DefaultUserIcon, ShoppingCartIcon } from './navbar-icons';



const LoginModal = ({ isOpen, onClose }) => {
    const closeButtonRef = useRef(null);
  
    const handleShow = () => {
      if (isOpen) {
        closeButtonRef.current.focus();
      }
    };
  
    const handleClose = () => {
      onClose();
    };
  
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
  
    return (
      <>
        <dialog
          open={isOpen}
          onShow={handleShow}
          onClose={handleClose}
          onKeyDown={handleKeyDown}
        >
          <button ref={closeButtonRef} onClick={handleClose} autoFocus>
            Close
          </button>
          <div>
            <AuthorizationExample />
          </div>
        </dialog>
      </>
    );
  };



const UserInfo = () => {
  const [isLoginDialogOpen, setIsLoginDialogOpen] = useState(false);

  const handleLoginButtonClick = () => {
    setIsLoginDialogOpen(true);
  };

  const handleLoginDialogClose = () => {
    setIsLoginDialogOpen(false);
  };

  return (
    <div className="nav-item user-wrapper">
      <DefaultUserIcon />
      <button onClick={handleLoginButtonClick}>Login</button>
      <ShoppingCartIcon />
      <LoginModal isOpen={isLoginDialogOpen} onClose={handleLoginDialogClose} />
    </div>
  );
};

export { UserInfo, LoginModal };