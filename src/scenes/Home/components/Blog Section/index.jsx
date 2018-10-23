import React from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';

import PageSection from '../../../../components/Page Section';
import BlogSectionItem from './Blog Section Item';

import { loadBlog } from '../../../../store/blog';

// Maps Redux dispatch actions to props
const mapDispatchToProps = dispatch => {
  return {
    loadBlog: () => {
      dispatch(loadBlog());
    }
  };
};

// Maps Redux state to props
function mapStateToProps(state) {
  return { blog: state.blog };
}

class BlogSection extends React.Component {
  constructor() {
    super();

    this.state = { members: ['Title 1', 'Title 2', 'Title 3'] };
  }

  render() {
    const { members } = this.state;

    // Members section
    const blogItems = members.map(blogItem => {
      return <BlogSectionItem key={blogItem} title={blogItem} />;
    });

    return (
      <PageSection>
        <div className="container text-center">
          <div className="row justify-content-center pb-5">
            <div className="col-12 text-center">
              <h1>The Lilac Foundation Blog</h1>
            </div>
          </div>
          <div className="row justify-content-center">{blogItems}</div>
        </div>
        </PageSection>
    );
  }
}

BlogSection.propTypes = {
  loadBlog: Proptypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogSection);
