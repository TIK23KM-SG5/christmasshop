import React, { useState } from 'react';

import { HamburgerIcon } from '../components/navbar-icons';
import { UserInfo, MobileDropdown } from '../components/navbar-utilities';
import SearchBar from '../../../uicomp/searchbar';

const NavbarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className='nav-item mobile-left-wrapper'>
        <HamburgerIcon toggleAccordion={toggleAccordion} />
        <SearchBar />
      </div>
      <div className='nav-item mobile-center-wrapper'>
      </div>
      <div className='nav-item mobile-right-wrapper'>
        <UserInfo />
      </div>
      {isOpen && (
        <MobileDropdown />
      )}
    </>
  );
};

export default NavbarMobile;