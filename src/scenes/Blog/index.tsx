import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchPosts, selectAllPosts } from './blogSlice';
import BlogCard from '../../components/BlogCard';
import FeaturePost from './FeaturePost';
import Loading from '../../components/Loading';

function Blog() {
  const dispatch = useAppDispatch();

  const blogStatus = useAppSelector((state) => state.blog.status);
  const posts = useAppSelector(selectAllPosts);

  useEffect(() => {
    if (blogStatus === 'idle') {
      dispatch(fetchPosts());
    }
  }, [blogStatus, dispatch]);

  let mainComponent;
  let mainPost;
  let featurePosts;
  let blogPostsList;

  if (blogStatus === 'loading' || blogStatus === 'idle') {
    mainComponent = <Loading />;
  }

  if (blogStatus === 'succeeded') {
    let postsList = [...posts];

    // Get primary post from list
    const firstPost = postsList.shift();

    mainPost = (
      <FeaturePost
        key={firstPost.sys.id}
        createdAt={firstPost.sys.createdAt}
        blogFields={firstPost.fields}
        main
      />
    );

    featurePosts = postsList
      .splice(0, 3)
      .map((post) => (
        <FeaturePost
          key={post.sys.id}
          createdAt={post.sys.createdAt}
          blogFields={post.fields}
        />
      ));

    if (postsList.length > 0) {
      blogPostsList = (
        <div>
          <hr className="my-8 border-white-30" />
          <div className="flex flex-wrap gap-8 justify-evenly">
            {postsList.map((post) => (
              <div key={post.sys.id} className="basis-1/4">
                <BlogCard
                  createdAt={post.sys.createdAt}
                  blogFields={post.fields}
                />
              </div>
            ))}
          </div>
        </div>
      );

      mainComponent = (
        <div className="container mt-12 mb-36">
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
  }

  return <React.Fragment>{mainComponent}</React.Fragment>;
}

export default Blog;
