import React, { useState, useEffect } from 'react';
import { useAppSelector } from '../../../app/hooks';
import { getNavbarTheme } from '../navbarSlice';
import NavMenu from './NavMenu';
import { NavLink } from 'react-router-dom';

function MobileNavbar(props: { links: string[][] }) {
  const { links } = props;

  const [toggleMenu, setToggleMenu] = useState(false);
  const navbarTheme = useAppSelector(getNavbarTheme);

  useEffect(() => {
    document.body.style.overflow = toggleMenu ? 'hidden' : 'unset';
  }, [toggleMenu]);

  var navbarLinks = [...links];

  // Remove  home page link and assign to variable
  const homeLink = navbarLinks.shift();

  return (
    <React.Fragment>
      <div className="md:hidden">
        <div className={`border-b  ${navbarTheme}`}>
          <div className="container py-6 flex justify-between items-baseline">
            <div>
              <NavLink className="text-xl font-serif" to={homeLink[0]}>
                {homeLink[1]}
              </NavLink>
            </div>
            <div>
              <button
                className="bg-primary-50 hover:bg-primary-40 text-white-0 leading-6 font-bold py-2 px-3 rounded-lg"
                onClick={() => setToggleMenu(true)}
              >
                Toggle
              </button>
            </div>
          </div>
        </div>
      </div>
      <NavMenu
        links={navbarLinks}
        display={toggleMenu}
        toggleMenu={setToggleMenu}
      />
    </React.Fragment>
  );
}

export default MobileNavbar;
