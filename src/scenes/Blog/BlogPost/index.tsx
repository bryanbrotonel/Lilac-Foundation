import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchContentfulPostsEntry } from '../../../api/contentful';
import ContentPost from '../../../components/ContentPost';
import Loading from '../../../components/Loading';
import NotFound from '../../NotFound';

import { TypeBlogPost } from '../../../types';

function BlogPost() {
  const params = useParams();

  const [currentPost, setCurrentPost] = useState(null);

  useEffect(() => {
    fetchContentfulPostsEntry('blogPost', params.postId).then((post) => {
      setCurrentPost(post as TypeBlogPost);
    });
  }, []);

  let blogPost;

  if (currentPost === null) blogPost = <Loading />;

  if (currentPost === undefined) blogPost = <NotFound />;

  if (currentPost !== null && currentPost !== undefined) {
    const {
      fields: { title, subtitle, content, author, headerImage },
      sys: { createdAt },
    } = currentPost;

    document.title = `${title} by ${author} | The Lilac Foundation`;

    blogPost = (
      <ContentPost
        title={title}
        subtitle={subtitle}
        author={author}
        headerImage={headerImage}
        content={content}
        date={createdAt}
      />
    );
  }

  return <div>{blogPost}</div>;
}

export default BlogPost;
