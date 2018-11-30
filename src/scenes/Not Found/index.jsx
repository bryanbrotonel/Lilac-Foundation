import React from 'react';

import DocumentTitle from 'react-document-title';

import HomepageRedirect from 'components/Homepage Redirect';

import './styles.scss';

class NotFound extends React.Component {
  render() {
    return (
      <DocumentTitle title="Not Found | The Lilac Foundation">
        <div className="page-not-found hv-center">
          <div className="page-not-found-message container">
            <h1 className="message-404">404</h1>
            <h5 className="message-not-found">
              We&#39;re sorry, but the page you&#39;re looking for got lost in
              the Lilac field.
            </h5>
            <HomepageRedirect />
          </div>
        </div>
      </DocumentTitle>
    );
  }
}

export default NotFound;
