import React from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import * as Markdown from 'react-markdown';

import PageSection from '../../../../components/Page Section';
import { Loader } from '../../../../components/Loader';

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
  constructor(props) {
    super(props);

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    const { loadBlog } = this.props;

    // Dispatches loadBlog()
    loadBlog();
  }

  render() {
    const { loading, posts } = this.props.blog;
    var latestPost;

    if (!loading && posts.length !== 0) {
      // Assignes latest to post to first post from sorted blog entries
      latestPost = posts[0].fields;
    }

    return !loading && posts.length !== 0 ? (
      <div>
        <div className="row no-gutters">
          <div className="col-12 col-md-6">
            <PageSection className="p-0">
              <img
                className="w-100"
                src={latestPost.headerImage.fields.file.url}
                alt=""
              />
            </PageSection>
          </div>
          <div className="col-12 col-md-6">
            <PageSection height="100%">
              <div className="container">
                <div className="p-2 px-md-5">
                  <h1>The Lilac Foundation Blog</h1>
                  <h4 className="text-muted">The latest from the team</h4>
                  <br />
                  <h3>{latestPost.title}</h3>
                  <h5>{latestPost.subtitle}</h5>
                  <Markdown
                    source={latestPost.content
                      .split('')
                      .splice(0, 150)
                      .join('')
                      .concat('...')}
                  />
                  <a href="https://www.froala.com">Read More &gt;</a>
                </div>
              </div>
            </PageSection>
          </div>
        </div>
      </div>
    ) : (
      <Loader className="has-text-primary" />
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
