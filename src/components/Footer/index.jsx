import React from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { loadFooterBlurb, loadSocialMedia } from '../../store/base/base';

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

    this.state = {
      pages: ['projects', 'blog', 'team', 'about'],
      socials: []
    };

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

    return (
      <div className="footer">
        <footer className=" container">
          <div className="row align-items-top">
            <div className="footer-widget col-4 d-none d-md-flex">
              <ul className="list-unstyled">{footerPageLinks}</ul>
            </div>

            <div className="footer-widget col-4 d-none d-md-flex">
              <ul className="list-unstyled">{footerSocialLinks}</ul>
            </div>

            <div className="col-12 col-md-4 text-left">
              <h4 className="footer-title">{footerTitle}</h4>
              <p className="mb-3">{footerBlurbContent}</p>
              <DonateButton className="btn-light" />
            </div>
          </div>
          <div className="footer-credit">
            Made with <span className="heart">❤</span> by&#160;
            <a
              href="https://bryanbrotonel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="credit-link"
            >
              Bryan Brotonel
            </a>
          </div>
        </footer>
      </div>
    );
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
