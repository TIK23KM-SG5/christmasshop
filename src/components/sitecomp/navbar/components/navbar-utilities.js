import React, { useState, useRef } from 'react';

import AuthorizationExample from '../../../AuthorizationExample';
import { DefaultUserIcon, ShoppingCartIcon } from './navbar-icons';



const DesktopPages = () => (
    <div className="desktop-pages">
      <p>Categories</p>
      <p>Products</p>
      <p>Outlet</p>
    </div>
  );



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
    <div className="nav-item">
      <DefaultUserIcon />
      <button onClick={handleLoginButtonClick}>Login</button>
      <ShoppingCartIcon />
      <LoginModal isOpen={isLoginDialogOpen} onClose={handleLoginDialogClose} />
    </div>
  );
};



const MobileDropdown = () => {
  return (
    <div className="dropdown-wrapper">
      <div className="dropdown-grid">
        <a href="/home" className="nav-item">Home</a>
        <a href="/products" className="nav-item">Products</a>
        <a href="/company" className="nav-item">Company</a>
        <a href="/contact" className="nav-item">Contact Us</a>

        <a href="/categories" className="nav-item">Categories</a>
        <a href="/trees" className="nav-item sub-item">Trees</a>
        <a href="/costumes" className="nav-item sub-item">Costumes</a>
        <a href="/decor" className="nav-item sub-item">Decor</a>
      </div>
    </div>
  );
};

export { UserInfo, MobileDropdown, LoginModal, DesktopPages };