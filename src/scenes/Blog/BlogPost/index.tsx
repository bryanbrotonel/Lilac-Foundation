import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchContentfulBlogEntry } from '../../../api/contentful';
import ContentPost from '../../../components/ContentPost';
import Loading from '../../../components/Loading';

function BlogPost() {
  const params = useParams();

  const [currentPost, setCurrentPost] = useState(null);

  useEffect(() => {
    fetchContentfulBlogEntry(params.postId).then((post) => {
      setCurrentPost(post);
    });
  }, []);

  let blogPost;

  if (currentPost === null) blogPost = <Loading />;

  if (currentPost !== null) {
    const {
      fields: { title, subtitle, content, author, headerImage },
      sys: { createdAt },
    } = currentPost;

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
