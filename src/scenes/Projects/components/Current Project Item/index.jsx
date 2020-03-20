import React from 'react';
import Proptypes from 'prop-types';

import { connect } from 'react-redux';
import { loadPlaceholderImage } from 'store/base/base';
import { createURL } from 'helpers';

import PageItem from 'components/Page Item';

import './styles.scss';

// Maps Redux dispatch actions to props
const mapDispatchToProps = dispatch => {
  return {
    loadPlaceholderImage: () => {
      dispatch(loadPlaceholderImage());
    }
  };
};

// Maps Redux state to props
function mapStateToProps(state) {
  return { base: state.base };
}

class CurrentProjectItem extends React.Component {
  
  componentDidMount() {
    const { loadPlaceholderImage } = this.props;

    // Dispatches loadPlaceholderImageSuccess()
    loadPlaceholderImage();
  }

  render() {
    const { base, id, title, headerImage } = this.props;

    const path = createURL`${title}${id}`;

    return (
      <PageItem
        path={`/projects/${path}`}
        title={title}
        headerImage={
          headerImage ? headerImage.fields.file.url : base.headerImage
        }
      />
    );
  }
}

CurrentProjectItem.propTypes = {
  loadPlaceholderImage: Proptypes.func,
  base: Proptypes.object,
  id: Proptypes.string,
  title: Proptypes.string,
  headerImage: Proptypes.object
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentProjectItem);
