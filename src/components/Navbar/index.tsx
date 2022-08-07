import React from 'react';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';

function Navbar() {

  const links = [
    ['/', 'The Lilac Foundation'],
    ['/about', 'About'],
    ['/team', 'Team'],
    ['/projects', 'Projects'],
    ['/Blog', 'Blog'],
    ['', 'Donate'],
  ];

  return (
    <React.Fragment>
      <DesktopNavbar links={links} />
      <MobileNavbar links={links} />
    </React.Fragment>
  );
}

export default Navbar;
