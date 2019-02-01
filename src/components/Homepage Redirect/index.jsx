import React from 'react';
import { Link } from 'react-router-dom';


class HomepageRedirect extends React.Component {
  render() {
    return (
      <Link to="/">
        <button className="btn btn-primary mt-2">Go to homepage</button>
      </Link>
    );
  }
}

export default HomepageRedirect;