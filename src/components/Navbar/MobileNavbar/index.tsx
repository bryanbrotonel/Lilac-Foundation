import React, { useState, useEffect } from 'react';
import NavMenu from './NavMenu';
import { NavLink } from 'react-router-dom';

interface PropTypes {
  links: string[][];
}

function MobileNavbar(props: PropTypes) {
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    document.body.style.overflow = toggleMenu ? 'hidden' : 'unset';
  }, [toggleMenu]);

  return (
    <React.Fragment>
      <div className="md:hidden py-4 container">
        <div className="flex justify-between items-center">
          <div>
            <NavLink to="/">Lilac</NavLink>
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
      <NavMenu
        links={props.links}
        display={toggleMenu}
        toggleMenu={setToggleMenu}
      />
    </React.Fragment>
  );
}

export default MobileNavbar;
