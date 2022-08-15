import React from 'react';
import { NavLink } from 'react-router-dom';

import { AiOutlineClose } from 'react-icons/ai';
import DonateButton from '../../../DonateButton';

interface PropTypes {
  links: string[][];
  display: boolean;
  toggleMenu: Function;
}

function NavMenu(props: PropTypes) {
  const { links, display, toggleMenu } = props;

  return (
    <div
      className={`${
        display ? 'transform-none' : 'translate-x-full'
      } md:hidden fixed top-0 right-0 z-40 h-screen w-screen bg-secondary transition-transform ease-linear duration-300`}
    >
      <div className="flex justify-end m-5 text-white-0">
        <AiOutlineClose size={20} onClick={() => toggleMenu(false)} />
      </div>
      <div className="container">
        <div className="flex flex-col gap-10 pt-5">
          {links.splice(0, links.length - 1).map((link) => {
            const linkPath = link[0];
            const linkName = link[1];

            return (
              <NavLink
                className="text-white-0 text-2xl uppercase font-bold"
                key={linkName}
                to={linkPath}
                onClick={() => toggleMenu(false)}
              >
                {linkName}
              </NavLink>
            );
          })}
          <div>
            <DonateButton
              color="primary-800"
              fontSize="lg"
              bgColor="bg-primary-50"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavMenu;
