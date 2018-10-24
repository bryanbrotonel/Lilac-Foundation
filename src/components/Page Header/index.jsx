import React from 'react';
import Proptypes from 'prop-types';

const PageHeader = props => (
  <section className="pt-4">
    <div className="hero-body">
      <div className="container">
        <h1 className="title">{props.title}</h1>
        <h3 className="subtitle">{props.children}</h3>
      </div>
    </div>
  </section>
);

PageHeader.propTypes = {
  title: Proptypes.string.isRequired,
  children: Proptypes.any.isRequired
};

export default PageHeader;
