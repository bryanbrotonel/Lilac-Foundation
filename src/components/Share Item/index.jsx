import React from 'react';
import Proptypes from 'prop-types';

import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  EmailShareButton
} from 'react-share';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './styles.scss';

class ShareItem extends React.Component {
  render() {
    const { pageTitle } = this.props;

    return (
      <div className="share-item row no-gutters">
        <div className="col hv-center">
          <FacebookShareButton quote={pageTitle} url={window.location.href}>
            <FontAwesomeIcon
              icon={['fab', 'facebook-square']}
              size="2x"
              className="share-icon"
            />
          </FacebookShareButton>
        </div>
        <div className="col hv-center">
          <LinkedinShareButton
            description={pageTitle}
            url={window.location.href}
          >
            <FontAwesomeIcon
              icon={['fab', 'linkedin-in']}
              size="2x"
              className="share-icon"
            />
          </LinkedinShareButton>
        </div>
        <div className="col hv-center">
          <TwitterShareButton title={pageTitle} url={window.location.href}>
            <FontAwesomeIcon
              icon={['fab', 'twitter']}
              size="2x"
              className="share-icon"
            />
          </TwitterShareButton>
        </div>
        <div className="col hv-center">
          <EmailShareButton subject={pageTitle} url={window.location.href}>
            <FontAwesomeIcon icon="envelope" size="2x" className="share-icon" />
          </EmailShareButton>
        </div>
      </div>
    );
  }
}

ShareItem.propTypes = {
  pageTitle: Proptypes.string
};

export default ShareItem;
