import React from 'react';
import Proptypes from 'prop-types';
import * as Markdown from 'react-markdown';

import { connect } from 'react-redux';
import { loadHeaderImage, loadAboutItems } from '../../store/base/base';

import PageHeader from '../../components/Page Header';
import AboutItem from './components/About Item';

import './styles.scss';

// Maps Redux dispatch actions to props
const mapDispatchToProps = dispatch => {
  return {
    loadHeaderImage: photoID => {
      dispatch(loadHeaderImage(photoID));
    },
    loadAboutItems: () => {
      dispatch(loadAboutItems());
    }
  };
};

// Maps Redux state to props
function mapStateToProps(state) {
  return { base: state.base };
}

class About extends React.Component {
  componentDidMount() {
    const { loadHeaderImage, loadAboutItems } = this.props;

    // Dispatches headerImage()
    loadHeaderImage('5sySaWfDFK2qiQAo8Imi0U');

    // Dispatches headerImage()
    loadAboutItems();
  }

  render() {
    const { headerImage, aboutItems } = this.props.base;

    if (aboutItems) {
      var aboutItemsSection = Object.keys(aboutItems).map(key => {
        var item = aboutItems[key].fields;
        return (
          <AboutItem
            key={key}
            title={item.title}
            headerImage={item.headerImage.fields.file.url}
          >
            <Markdown className="markdown-content" source={item.description} />
          </AboutItem>
        );
      });
    }

    return (
      <div className="bg-gray">
        <PageHeader headerImage={headerImage}>
          <h1>About</h1>
        </PageHeader>
        <div>
          <div className="about-timeline">{aboutItemsSection}</div>
        </div>
      </div>
    );
  }
}

About.propTypes = {
  loadHeaderImage: Proptypes.func,
  loadAboutItems: Proptypes.func,
  base: Proptypes.object
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About);
