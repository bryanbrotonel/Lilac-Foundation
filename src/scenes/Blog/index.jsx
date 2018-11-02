import React from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import { loadBlog } from '../../store/blog/blog';

import { Loader } from '../../components/Loader';
import BlogItem from './components/BlogItem';

import PageHeader from '../../components/Page Header';

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

    return <div className="bg-gray">
        <div className="container">
          <PageHeader>
            <h1>The Lilac Foundation Blog</h1>
            <h6>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
              minima quos atque perferendis amet nihil exercitationem iusto
              quia pariatur, quidem officia tenetur ullam. Praesentium, ut
              placeat fuga at non dignissimos?
            </h6>
          </PageHeader>
          <div className="row justify-content-between">
            {loading ? <div className="col-12">
                <Loader />
              </div> : posts.map(({ fields, sys }, i) => (
                <BlogItem key={i} {...fields} {...sys} />
              ))}
          </div>
        </div>
      </div>;
  }
}

Blog.propTypes = {
  loadBlog: Proptypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Blog);
