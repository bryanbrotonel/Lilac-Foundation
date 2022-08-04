import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import NavbarLink from './NavbarLink';

const NavContainer = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;

  padding: 1rem 0;
  z-index: 1;
  background: var(--colour-white);
`;

const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;

  @media (min-width: 600px) {
    flex-direction: row;
  }
`;

const PagesWrapper = styled.div`
  display: flex;
  flex-grow: 0.3;
  gap: 2rem;
  flex-flow: end;
  justify-content: center;

  @media (min-width: 600px) {
    justify-content: flex-end;
    gap: 4rem;
  }
`;

const HomeLink = styled(NavLink)`
  text-decoration: none;
  align-self: center;

  font-family: var(--font-primary);
  color: var(--colour-black);

  font-weight: bold;
  font-size: var(--text-lg);
  color: var(--colour-primary);
`;

function Navbar() {
  return (
    <NavContainer>
      <NavWrapper className="container-sm">
        <HomeLink to="/">The Lilac Foundation</HomeLink>
        <PagesWrapper>
          <NavbarLink to="/about">About</NavbarLink>
          <NavbarLink to="/team">Team</NavbarLink>
          <NavbarLink to="/projects">Projects</NavbarLink>
          <NavbarLink to="/blog">Blog</NavbarLink>
        </PagesWrapper>
      </NavWrapper>
    </NavContainer>
  );
}

export default Navbar;
