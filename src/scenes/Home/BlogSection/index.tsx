import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { fetchPosts, selectAllPosts } from '../../Blog/blogSlice';
import BlogCard from '../../../components/BlogCard';

function BlogSection() {
  const dispatch = useAppDispatch();

  const blogStatus = useAppSelector((state) => state.blog.status);
  const posts = useAppSelector(selectAllPosts);

  let blogFeatureRow;

  useEffect(() => {
    if (blogStatus === 'idle') {
      dispatch(fetchPosts());
    }
  }, [blogStatus, dispatch]);

  if (blogStatus === 'succeeded') {
    let postsList = [...posts];

    blogFeatureRow = postsList
      .splice(0, 3)
      .map((post) => (
        <BlogCard
          key={post.sys.id}
          createdAt={post.sys.createdAt}
          blogFields={post.fields}
        />
      ));
  }

  return (
    <div className="container my-24">
      <h1 className="font-serif font-bold text-5xl mb-16">
        The Latest Blog Posts
      </h1>
      <div className="container bg-white-20 py-24">
        <div className="flex md:flex-wrap flex-col md:flex-row gap-y-8 md:gap-0">
          {blogFeatureRow}
        </div>
      </div>
    </div>
  );
}

export default BlogSection;
