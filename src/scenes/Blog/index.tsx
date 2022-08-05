import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchPosts, selectAllPosts } from './blogSlice';

const BlogContainer = styled.div`
  & > div {
    margin-bottom: 5rem;
  }
  @media (min-width: 768px) {
    & > div {
      margin-bottom: 12rem;
    }
  }
`;

function Blog() {
  const dispatch = useAppDispatch();

  const postsStatus = useAppSelector((state) => state.blog.status);
  const posts = useAppSelector(selectAllPosts);

  useEffect(() => {
    if (postsStatus === 'idle') {
      dispatch(fetchPosts());
    }
  }, [postsStatus, dispatch]);

  let blogPostsList;

  if (postsStatus === 'succeeded') {
    blogPostsList = (
      <BlogContainer>
        {posts.map((post) => (
          <div key={post.sys.id}>
            <h2>{post.fields.title}</h2>
            <p>{post.fields.content}</p>
          </div>
        ))}
      </BlogContainer>
    );
  }

  return (
    <BlogContainer className="container">
      <h1>Blog</h1>
      <div className="container">{blogPostsList}</div>
    </BlogContainer>
  );
}

export default Blog;
