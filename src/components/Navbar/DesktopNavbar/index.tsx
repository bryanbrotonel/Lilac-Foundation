import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../../app/hooks';
import DonateButton from '../../DonateButton';
import { getNavbarTheme } from '../navbarSlice';

function DesktopNavbar(props: { links: string[][] }) {
  const { links } = props;

  const navbarTheme = useAppSelector(getNavbarTheme);

  var desktopLinks = [...links];

  // Remove  home page link and assign to variable
  const homeLink = desktopLinks.shift();

  // Remaining pages
  const pages = desktopLinks;

  return (
    <div className="hidden md:block">
      <div className={`border-b  ${navbarTheme}`}>
        <div className="container grid grid-flow-col-dense lg:grid-cols-3 items-baseline py-6">
          <div>
            <NavLink className="text-2xl font-serif font-bold" to={homeLink[0]}>
              {homeLink[1]}
            </NavLink>
          </div>
          <div className="justify-self-center flex flex-row items-center gap-8">
            {/* Remove donate link */}
            {pages.splice(0, pages.length - 1).map((link) => {
              const linkPath = link[0];
              const linkName = link[1];

              return (
                <NavLink
                  className="font-bold hover:text-black-300"
                  key={linkName}
                  to={linkPath}
                >
                  {linkName}
                </NavLink>
              );
            })}
          </div>
          <div className="justify-self-end">
            <DonateButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesktopNavbar;
