import React from 'react';
import { useLocation } from 'react-router-dom';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';

function Navbar() {
  const links = [
    ['/', 'The Lilac Foundation'],
    ['/about', 'About'],
    ['/team', 'Team'],
    ['/projects', 'Projects'],
    ['/blog', 'Blog'],
    ['', 'Donate'],
  ];

  const darkNavbarPaths = ['/blog/postId'];
  const location = useLocation();
  const darkNavbar = darkNavbarPaths.includes(location.pathname);

  return (
    <React.Fragment>
      <DesktopNavbar links={links} darkNavbar={darkNavbar} />
      <MobileNavbar links={links} darkNavbar={darkNavbar} />
    </React.Fragment>
  );
}

export default Navbar;
