import React, { useEffect } from 'react';
import * as Contentful from 'contentful';
import Markdown from 'markdown-to-jsx';
import { BsFacebook, BsLinkedin, BsLink45Deg, BsTwitter } from 'react-icons/bs';
import { useAppDispatch } from '../../app/hooks';
import { resetNavbarTheme, setNavbarDarkTheme } from '../Navbar/navbarSlice';
import SocialShareLink from '../SocialShareLink';

function ContentPost(props: {
  title: Contentful.EntryFields.Text;
  headerImage: Contentful.Asset;
  content: Contentful.EntryFields.Text;
  date: Contentful.EntryFields.Date;
  subtitle?: Contentful.EntryFields.Symbol;
  author?: Contentful.EntryFields.Symbol;
}) {
  const { title, headerImage, content, date, subtitle, author } = props;

  const dispatch = useAppDispatch();

  useEffect(() => {
    // Set navbar theme to dark theme
    dispatch(setNavbarDarkTheme());
    return () => {
      // reset navbar theme to original theme
      dispatch(resetNavbarTheme());
    };
  }, []);

  // Format post date
  const formattedPostDate = new Date(date).toLocaleDateString('en-gb', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'utc',
  });

  return (
    <div className="mb-36">
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
            {subtitle && <p className="lead">{subtitle}</p>}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="flex flex-row items-center justify-between max-w-prose lg:text-xl mx-auto my-6">
          <div className="flex flex-col md:flex-row gap-x-1">
            <span>
              {author && (
                <React.Fragment>
                  <span className="font-bold">{author}</span>
                </React.Fragment>
              )}
            </span>
            <span>{formattedPostDate}</span>
          </div>
          <div>
            <div className="flex flex-row gap-4">
              <SocialShareLink
                tooltip="Share on Facebook"
                link={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
              >
                <BsFacebook size={25} />
              </SocialShareLink>
              <SocialShareLink
                tooltip="Share on Twitter"
                link={`https://twitter.com/intent/tweet?url=${
                  window.location.href
                }&text=${title}${author && '%20by%20Author'}`}
              >
                <BsTwitter size={25} />
              </SocialShareLink>
              <SocialShareLink
                tooltip="Share on LinkedIn"
                link={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}`}
              >
                <BsLinkedin size={25} />
              </SocialShareLink>
              <SocialShareLink tooltip="Copy to clipboard">
                <BsLink45Deg size={25} />
              </SocialShareLink>
            </div>
          </div>
        </div>
        <div className="prose prose-slate lg:prose-xl mx-auto mb-129 break-words">
          <hr className="border-white-30" />
          <div>
            <Markdown>{content}</Markdown>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentPost;
