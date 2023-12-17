import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.matchMedia('(max-width: 768px)').matches);

  const mediaQuery = window.matchMedia('(max-width: 768px)');

  useEffect(() => {
    const handleResize = () => setIsMobile(mediaQuery.matches);

    handleResize(); // Set initial mobile state

    const mediaQueryListener = () => {
      handleResize();
    };

    mediaQuery.addEventListener('change', mediaQueryListener);

    return () => {
      mediaQuery.removeEventListener('change', mediaQueryListener);
    };
  }, [mediaQuery]);

  const NavbarComponent = isMobile
    ? React.lazy(() => import('./views/navbar-mobile'))
    : React.lazy(() => import('./views/navbar-desktop'));

  return (
    <div className={`navbar-wrapper ${isMobile ? 'mobile' : 'desktop'}`}>
      <React.Suspense fallback={<div>Loading...</div>}>
        <NavbarComponent />
      </React.Suspense>
    </div>
  );
};

export default Navbar;