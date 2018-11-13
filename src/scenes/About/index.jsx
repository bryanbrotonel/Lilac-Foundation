import React from 'react';
import Proptypes from 'prop-types';

import { connect } from 'react-redux';
import { loadHeaderImage } from '../../store/base/base';

import PageHeader from '../../components/Page Header';
import AboutItem from './components/About Item';

import './styles.scss';

// Maps Redux dispatch actions to props
const mapDispatchToProps = dispatch => {
  return {
    loadHeaderImage: () => {
      dispatch(loadHeaderImage('NokqFw6LQWUmYUWWmicyg'));
    }
  };
};

// Maps Redux state to props
function mapStateToProps(state) {
  return { headerImage: state.base };
}

class About extends React.Component {
  componentDidMount() {
    const { loadHeaderImage } = this.props;

    // Dispatches headerImage()
    loadHeaderImage();
  }

  render() {
    const { headerImage } = this.props.headerImage;

    return (
      <div className="bg-gray">
        <PageHeader headerImage={headerImage}>
          <h1>About</h1>
          <h4>More behind the lilac</h4>
        </PageHeader>
        <div>
          <div className="about-timeline">
            <AboutItem title="Section Title">
              <p>
                During the Spanish Regime in the late 1800’s, a spring-fed pool
                containing water lilies whose flowers were of lilac dumbfounded
                a group of Spanish explorers. The unique shade of violet led to
                the Spaniards to refer to the place as Lilac that later evolved
                to what we know as present day Lila.
              </p>
            </AboutItem>
            <AboutItem title="Section Title">
              <p>
                The Lilac Foundation (TLF) is a non-profit organization
                dedicated to using Lila’s core values and influences to aid the
                quality of life of the community. Including the banner logo:
              </p>
            </AboutItem>
            <AboutItem title="Section Title">
              <h4>“To enrich the lives of those we embody.”</h4>
            </AboutItem>
            <AboutItem title="Section Title">
              <p>
                To be a leading example of an organization focused on uplifting
                the quality of life of Lilanians in areas such as education,
                housing, and nourishment.
              </p>
            </AboutItem>
            <AboutItem title="Section Title">
              <p>
                <strong> Integrity</strong>
                <br /> To always be honest, transparent and ethical with our
                goals, transactions, and decisions
              </p>
              <p>
                <strong> Motivated</strong>
                <br /> To doing our best in everything we do, express resilience
                and settling for nothing other than perfection
              </p>
              <p>
                <strong> Passion</strong>
                <br /> Which serves as the heart of our foundation, which leads
                our drive to engage and inspire Lilanians
              </p>
              <p>
                <strong> Service</strong>
                <br /> By augmenting the lives of those in need in order to
                achieve Lila’s long-term goals
              </p>
              <p>
                <strong>United</strong>
                <br /> To convey the essence of “Bayanihan”; a cooperative
                endeavour, hand-in-hand, selfless act of mutual cooperation for
                the public good
              </p>
            </AboutItem>
          </div>
        </div>
      </div>
    );
  }
}

About.propTypes = {
  loadHeaderImage: Proptypes.func,
  headerImage: Proptypes.object
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About);
