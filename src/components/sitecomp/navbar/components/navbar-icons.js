import React from 'react';
import { Icon } from '../../../uicomp/icon';

import shoppingCartIcon from '../../../media/shoppingcart.jpeg';
import logoIcon from '../../../media/logo.png';
import HamburgerMenuIcon from '../../../media/hamburgermenu.png';
import defaultUserIcon from '../../../media/defaultuser.jpeg';



const LogoIcon = () => {
  const handleClick = () => {
    console.log('Home button clicked!');
  };

  return (
    <Icon
      src={logoIcon}
      alt="Christmas Shop"
      onClick={handleClick}
      className="logo-icon"
    />
  );
};

export { LogoIcon };


const HamburgerIcon = ({ toggleAccordion }) => {
    return (
      <Icon
        src={HamburgerMenuIcon}
        alt="Christmas Shop"
        onClick={toggleAccordion}
        className="hamburger-icon"
      />
    );
  };
  
  export { HamburgerIcon };




  const DefaultUserIcon = () => {
    const handleClick = () => {
      console.log('Default user clicked!');
    };
  
    return (
      <Icon
        src={defaultUserIcon}
        alt="No user"
        onClick={handleClick}
        className="default-user-icon"
      />
    );
  };
  
  export { DefaultUserIcon };


  const ShoppingCartIcon = () => {
    const handleClick = () => {
      console.log('Shopping cart clicked!');
    };
  
    return (
      <Icon
        src={shoppingCartIcon}
        alt="Shopping Cart"
        onClick={handleClick}
        className="shopping-cart-icon"
      />
    );
  };
  
  export { ShoppingCartIcon };