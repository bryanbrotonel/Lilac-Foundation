import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';

import { fetchContentfulProjectEntry } from '../../../api/contentful';
import { useAppDispatch } from '../../../app/hooks';
import Loading from '../../../components/Loading';

import { BsTwitter, BsFacebook, BsLinkedin } from 'react-icons/bs';

import {
  resetNavbarTheme,
  setNavbarDarkTheme,
} from '../../../components/Navbar/navbarSlice';

function ProjectPost() {
  const params = useParams();
  const dispatch = useAppDispatch();

  const [currentPost, setCurrentPost] = useState(null);

  useEffect(() => {
    fetchContentfulProjectEntry(params.postId).then((post) => {
      setCurrentPost(post);
    });
  }, []);

  useEffect(() => {
    // Set navbar theme to dark theme
    dispatch(setNavbarDarkTheme());

    return () => {
      // reset navbar theme to original theme
      dispatch(resetNavbarTheme());
    };
  }, []);

  let projectPost;

  if (currentPost === null) projectPost = <Loading />;

  if (currentPost !== null) {
    const {
      fields: { title, content, headerImage },
      sys: { createdAt },
    } = currentPost;

    // Format date
    const formattedPostDate = new Date(createdAt).toLocaleDateString('en-gb', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'utc',
    });
    projectPost = (
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
            </div>
          </div>
        </div>
        <div className="container">
          <div className="flex flex-row items-baseline justify-between max-w-prose lg:text-xl mx-auto mb-6">
            <span>{formattedPostDate}</span>
            <div className="mt-6">
              <div className="flex flex-row gap-4 text-black-700">
                <a href="">
                  <BsTwitter size={25} />
                </a>
                <a href=" ">
                  <BsFacebook size={25} />
                </a>
                <a href=" ">
                  <BsLinkedin size={25} />
                </a>
              </div>
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

  return <div>{projectPost}</div>;
}

export default ProjectPost;
