import React from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { loadFooterBlurb, loadSocialMedia } from '../../store/base/base';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DonateButton from '../Donate Button';

import './styles.scss';

// Maps Redux dispatch actions to props
const mapDispatchToProps = dispatch => {
  return {
    loadFooterBlurb: () => {
      dispatch(loadFooterBlurb('6KzSyVjmeWmq6weOe2AWsS'));
    },
    loadSocialMedia: () => {
      dispatch(loadSocialMedia('2umAjY8tMEQuOIYUmii08Y'));
    }
  };
};

// Maps Redux state to props
const mapStateToProps = state => {
  return { base: state.base };
};

class Footer extends React.Component {
  constructor() {
    super();

    this.state = { pages: ['about', 'team', 'projects', 'blog'], socials: [] };

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    const { loadFooterBlurb, loadSocialMedia } = this.props;

    // Dispatch loadFooterBlurb()
    loadFooterBlurb();

    // Dispatch loadSocialMedia()
    loadSocialMedia();
  }

  render() {
    const { pages } = this.state;
    const { footerBlurb, socials } = this.props.base;

    // Format footer blurb
    if (footerBlurb.length !== 0) {
      const { blurbTitle, blurbContent } = footerBlurb;

      var footerTitle = blurbTitle;
      var footerBlurbContent = blurbContent;
    }

    // Format footer page links
    const footerPageLinks = pages.map(page => {
      return (
        <li key={page}>
          <Link to={'/' + page}>{page}</Link>
        </li>
      );
    });

    // Format footer social media links
    if (socials.length != 0) {
      var footerSocialLinks = Object.keys(socials).map(key => {
        return (
          <li key={key}>
            <a href={socials[key]} target="_blank" rel="noopener noreferrer">
              {key}
            </a>
          </li>
        );
      });
    }

    return <div className="footer">
        <footer className="container">
          <div className="row align-items-top">
            <div className="footer-widget col-6 col-md-4">
              <ul className="list-unstyled">
                <li>Pages</li>
                {footerPageLinks}
              </ul>
            </div>
            <div className="footer-widget col-6 col-md-4">
              <ul className="list-unstyled">
                <li>Contact</li>
                {footerSocialLinks}
              </ul>
            </div>
            <div className="col-12 col-md-4 text-left">
              <h4 className="footer-title">{footerTitle}</h4>
              <p className="mb-3">{footerBlurbContent}</p>
              <DonateButton className="btn-light" />
            </div>
          </div>
          <div className="footer-credit">
            <span>
              Made with&#160;
              <FontAwesomeIcon icon="heart" size="sm" className="heart" /> by&#160;
              <a href="https://bryanbrotonel.com" target="_blank" rel="noopener noreferrer" className="credit-link">
                Bryan Brotonel
              </a>
            </span>
          </div>
        </footer>
      </div>;
  }
}

Footer.Proptypes = {
  loadSocialMedia: Proptypes.func,
  loadFooterBlurb: Proptypes.func,
  base: Proptypes.object
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);
