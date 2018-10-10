import React from 'react';
import * as contentful from 'contentful';

import PageHeader from '../../components/PageHeader';
import BlogItem from './components/BlogItem';

class Blog extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };

    this.client = contentful.createClient({
      space: 's85q1dv8e3m5',
      accessToken:
        'e1f99556ca22933d807bbeba1f93e70d5ebaa2bd37d43e099d26f653e9ade466'
    });

    this.componentDidMount = this.componentDidMount.bind(this);
    this.fetchPosts = this.fetchPosts.bind(this);
    this.setPosts = this.setPosts.bind(this);
  }

  componentDidMount() {
    this.fetchPosts().then(this.setPosts);
  }

  // Get blog posts from client
  fetchPosts() {
    return this.client.getEntries();
  }

  // Set blog posts from client
  setPosts(response) {
    this.setState({ posts: response.items });
  }

  render() {
    return (
      <div className="container">
        <PageHeader color="is-info" title="Lilac Foundation Blog">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni velit
          numquam saepe nam asperiores, optio ex. Beatae blanditiis perferendis
          molestiae temporibus harum facere, eaque delectus ut assumenda
          recusandae porro non?
        </PageHeader>
        <br />
        {this.state.posts.map(({ fields }, i) => (
          <BlogItem key={i} {...fields} />
        ))}
      </div>
    );
  }
}

export default Blog;
