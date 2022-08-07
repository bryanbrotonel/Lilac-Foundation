import React from 'react';
import { NavLink } from 'react-router-dom';

interface PropTypes {
  links: string[][];
}

function DesktopNavbar(props: PropTypes) {
  const { links } = props;

  // Remove  home page link and assign to variable
  const homeLink = links.shift();

  // Remove register page and assign to variable
  const donateLink = links.pop();

  // Remaining pages
  const pages = links;

  return (
    <div className="hidden md:block">
      <div className="sticky bg-transparent">
        <div className="container flex justify-between items-center py-6">
          <div>
            <NavLink className="text-xl" to={homeLink[0]}>{homeLink[1]}</NavLink>
          </div>
          <div className="flex flex-row items-center gap-8">
            {pages.map((link) => {
              const linkPath = link[0];
              const linkName = link[1];

              return (
                <NavLink
                  className="font-bold text-black-700 hover:text-black-300"
                  key={linkName}
                  to={linkPath}
                >
                  {linkName}
                </NavLink>
              );
            })}
          </div>
          <div>
            <NavLink to={donateLink[0]}>
              <button className="bg-primary-50 hover:bg-primary-40 text-white-0 leading-6 font-bold py-2 px-3 rounded-lg">
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
