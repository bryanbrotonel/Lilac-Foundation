import Markdown from 'markdown-to-jsx';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchContentfulBlogEntry } from '../../../api/contentful';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import Loading from '../../../components/Loading';
import {
  // fetchPostBySlug,
  selectCurrentPost,
} from '../blogSlice';

function BlogPost() {
  const params = useParams();
  const dispatch = useAppDispatch();

  const blogStatus = useAppSelector((state) => state.blog.status);
  const post = useAppSelector(selectCurrentPost);

  const [currentPost, setCurrentPost] = useState(null);

  useEffect(() => {
    fetchContentfulBlogEntry(params.postId).then((post) => {
      console.log(post);
      setCurrentPost(post);
    });
  }, []);

  let blogPost;

  if (currentPost === null) {
    blogPost = <Loading />;
  } else if (currentPost !== null) {
    const {
      fields: { title, subtitle, content, author, headerImage },
      sys: { createdAt },
    } = currentPost;

    // Format date
    const formattedPostDate = new Date(createdAt).toLocaleDateString('en-gb', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'utc',
    });
    blogPost = (
      <React.Fragment>
        <div className="relative bg-secondary py-12">
          <div className="container">
            <div className="w-full max-w-prose lg:text-xl aspect-video mx-auto mb-12 bg-primary-50 overflow-hidden">
              <img
                className="w-full h-full object-cover object-center"
                src={headerImage.fields.file.url}
                alt={`${title} - Image`}
                loading="lazy"
              />
            </div>
            <div className="prose lg:prose-xl prose-invert mx-auto">
              <h1 className="font-serif !mb-0">{title}</h1>
              <p className="lead">{subtitle}</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="max-w-prose lg:text-xl mx-auto my-6">
            <span>
              <span className="font-bold">{author}</span>&nbsp;&#124;&nbsp;
              {formattedPostDate}
            </span>
            <div className="mt-4">
              <span>
                Twitter&nbsp;&#124;&nbsp;Facebook&nbsp;&#124;&nbsp;LinkedIn
              </span>
            </div>
          </div>
          <div className="prose prose-slate lg:prose-xl mx-auto mb-129">
            <hr className="border-white-30" />
            <Markdown>{content}</Markdown>
          </div>
        </div>
      </React.Fragment>
    );
  }

  return <div>{blogPost}</div>;
}

export default BlogPost;
