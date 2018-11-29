import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

class NotFound extends React.Component {
  render() {
    return <div className="page-not-found hv-center">
        <div className="page-not-found-message container">
          <h1 className="message-404">404</h1>
          <h5 className="message-not-found">
            We&#39;re sorry, but the page you&#39;re looking for got lost in
            the Lilac field.
          </h5>
          <Link to="/">
            <button className="btn btn-primary">Go to homepage</button>
          </Link>
        </div>
      </div>;
  }
}

export default NotFound;
