import React from 'react';
import BlogCard from '../../../components/BlogCard';

function BlogSection() {
  return (
    <div className="container my-24">
      <h1 className="font-serif font-bold text-5xl mb-16">
        The Latest Blog Posts
      </h1>
      <div className="container bg-white-20 py-24">
        <div className="flex md:flex-wrap flex-col md:flex-row">
          <BlogCard
            title={''}
            subtitle={''}
            image={''}
            author={''}
            date={''}
            slug={''}
          />
          <BlogCard
            title={''}
            subtitle={''}
            image={''}
            author={''}
            date={''}
            slug={''}
          />
          <BlogCard
            title={''}
            subtitle={''}
            image={''}
            author={''}
            date={''}
            slug={''}
          />
        </div>
      </div>
    </div>
  );
}

export default BlogSection;
