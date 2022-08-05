import React from 'react';

interface BlogPostProps {
  title: string;
  content: string;
}

function BlogPost(props: BlogPostProps) {
  const { title, content } = props;

  return (
    <div>
      <div>
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default BlogPost;
