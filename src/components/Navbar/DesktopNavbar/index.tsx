import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../../app/hooks';
import { getNavbarTheme } from '../navbarSlice';

function DesktopNavbar(props: { links: string[][] }) {
  const { links } = props;

  const navbarTheme = useAppSelector(getNavbarTheme);

  var desktopLinks = [...links];

  // Remove  home page link and assign to variable
  const homeLink = desktopLinks.shift();

  // Remove register page and assign to variable
  const donateLink = desktopLinks.pop();

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
            {pages.map((link) => {
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
            <NavLink to={donateLink[0]}>
              <button className="bg-primary-50 hover:bg-primary-40 text-white-0 leading-6 font-semibold py-2 px-3 rounded-lg">
                {donateLink[1]}
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesktopNavbar;
