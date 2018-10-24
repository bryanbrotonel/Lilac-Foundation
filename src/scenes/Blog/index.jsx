import React from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';

import PageHeader from '../../components/Page Header';
import { Loader } from '../../components/Loader';
import BlogItem from './components/BlogItem';

import { loadBlog } from '../../store/blog';

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

class Blog extends React.Component {
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
    
    return (
      <div className="container">
        <PageHeader color="is-info" title="Lilac Foundation Blog">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni velit
          numquam saepe nam asperiores, optio ex. Beatae blanditiis perferendis
          molestiae temporibus harum facere, eaque delectus ut assumenda
          recusandae porro non?
        </PageHeader>
        <br />
        {loading ? (
          <Loader className="has-text-primary" />
        ) : (
          posts.map(({ fields, sys }, i) => (
            <BlogItem key={i} {...fields} {...sys} />
          ))
        )}
      </div>
    );
  }
}

Blog.propTypes = {
  loadBlog: Proptypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Blog);
