import React from 'react';

import { LogoIcon } from '../components/navbar-icons';
import { DesktopPages } from '../components/navbar-utilities';
import { UserInfo } from '../components/login-utilities';
import SearchBar from '../../../uicomp/searchbar';

const NavbarDesktop = () => (
  <div className='navbar-wrapper'>
    <div className='nav-item desktop-wrapper-left'>
          <LogoIcon />
          <SearchBar />
    </div>
    <div className='nav-item desktop-wrapper-center'>
        <DesktopPages />
    </div>
    <div className='nav-item desktop-wrapper-right'>
        <UserInfo />
    </div>
  </div>
);

export default NavbarDesktop;