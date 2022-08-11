import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchPosts, selectAllPosts } from './blogSlice';
import BlogCard from './BlogCard';
import FeaturePost from './FeaturePost';

function Blog() {
  const dispatch = useAppDispatch();

  const blogStatus = useAppSelector((state) => state.blog.status);
  const posts = useAppSelector(selectAllPosts);

  useEffect(() => {
    if (blogStatus === 'idle') {
      dispatch(fetchPosts());
    }
  }, [blogStatus, dispatch]);

  let mainPost;
  let featurePosts;
  let blogPostsList;

  if (blogStatus === 'succeeded') {
    let postsList = [...posts];

    // Get primary post from list
    const firstPost = postsList.shift();

    mainPost = (
      <FeaturePost
        key={firstPost.sys.id}
        title={firstPost.fields.title}
        subtitle={firstPost.fields.subtitle}
        image={firstPost.fields.headerImage.fields.file.url}
        author={firstPost.fields.author}
        date={firstPost.sys.createdAt}
        slug={firstPost.fields.slug}
        main
      />
    );

    featurePosts = postsList
      .splice(0, 3)
      .map((post) => (
        <FeaturePost
          key={post.sys.id}
          title={post.fields.title}
          subtitle={post.fields.subtitle}
          image={post.fields.headerImage.fields.file.url}
          author={post.fields.author}
          date={post.sys.createdAt}
          slug={post.fields.slug}
        />
      ));

    if (postsList.length > 0) {
      blogPostsList = (
        <div>
          <hr className="my-8 border-white-30" />
          <div className="flex flex-wrap gap-8">
            {postsList.map((post) => (
              <BlogCard
                key={post.sys.id}
                title={post.fields.title}
                subtitle={post.fields.subtitle}
                image={post.fields.headerImage.fields.file.url}
                author={post.fields.author}
                date={post.sys.createdAt}
                slug={post.fields.slug}
              />
            ))}
          </div>
        </div>
      );
    }
  }

  return (
    <div className="container mt-12">
      <h1 className="font-bold font-serif text-6xl">Blog</h1>
      <hr className="mt-4 mb-8 border-white-30" />
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 lg:mb-12 divide-y divide-white-30 lg:divide-y-0">
        <div className="basis-7/12">{mainPost}</div>
        <div className="basis-5/12 flex flex-col justify-start divide-y divide-white-30 lg:divide-y-0 gap-5">
          {featurePosts}
        </div>
      </div>
      {blogPostsList}
    </div>
  );
}

export default Blog;
