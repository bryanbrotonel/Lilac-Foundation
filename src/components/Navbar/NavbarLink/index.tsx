import React from 'react';
import styled from 'styled-components';
import {
  NavLink,
  LinkProps,
  useMatch,
  useResolvedPath,
} from 'react-router-dom';

const Link = styled(NavLink)<{ $isActive: boolean }>`
  text-decoration: none;
  align-self: center;

  font-family: var(--font-primary);
  font-size: var(--text-sm);
  color: ${(props) =>
    props.$isActive ? 'var(--colour-primary)' : 'var(--colour-black)'};

  &.homeLink {
    font-weight: bold;
    font-size: var(--text-lg);
    color: var(--colour-primary);
  }

  @media (min-width: 600px) {
    font-size: var(--text-md);
  }

  &:hover {
    color: var(--colour-primary);
  }
`;

function NavbarLink({ children, to }: LinkProps) {
  // Resolve current page to set active styling
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link to={to} $isActive={match ? true : false}>
      {children}
    </Link>
  );
}

export default NavbarLink;
