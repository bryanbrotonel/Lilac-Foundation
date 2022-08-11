import React from 'react';

import { Link } from 'react-router-dom';

function FooterLink(props: { to: string; children: React.ReactNode }) {
  const { to, children } = props;

  return (
    <Link className=" text-white-0 hover:text-white-50" to={to}>
      {children}
    </Link>
  );
}

export default FooterLink;
