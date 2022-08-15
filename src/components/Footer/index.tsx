import React, { useEffect, useState } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { fetchContentfulContentEntryByID } from '../../api/contentful';
import { TypeBlurb, TypeSocials, TypeSocialsFields } from '../../types';
import FooterLink from './FooterLink';

function Footer() {
  const [footerParagraph, setFooterParagraph] = useState<TypeBlurb>(null);
  const [socialLinks, setSocialLinks] = useState<TypeSocials>(null);

  useEffect(() => {
    (async () => {
      // Fetch footer paragraph
      const footerBlurb = (await fetchContentfulContentEntryByID(
        '6KzSyVjmeWmq6weOe2AWsS'
      )) as TypeBlurb;

      // Fetch social links
      const footerLinks = (await fetchContentfulContentEntryByID(
        '2umAjY8tMEQuOIYUmii08Y'
      )) as TypeSocials;

      setFooterParagraph(footerBlurb);
      setSocialLinks(footerLinks);
    })();
  }, []);

  return (
    <div className="bg-secondary py-20">
      <div className="container flex flex-col md:flex-row gap-y-10 md:gap-y-0">
        <div className="basis-1/3 order-last md:order-none prose prose-invert">
          <h2 className="font-serif text-4xl !mb-4">The Lilac Foundation</h2>
          <p>{footerParagraph && footerParagraph.fields.blurbContent}</p>
          <span className="text-gray-500">
            <div className="flex items-center">
              <span> Made with&nbsp;</span>
              <AiFillHeart className="inline-block text-primary-50" />
              <span>
                &nbsp;by&nbsp;
                <a
                  href="https://bryanbrotonel.live"
                  className="no-underline text-inherit hover:text-white-20"
                >
                  Bryan
                </a>
              </span>
            </div>
          </span>
        </div>
        <div className="basis-1/3 flex justify-start md:justify-center">
          <div>
            <h3 className="font-sans text-sm uppercase mb-4 text-gray-400">
              Pages
            </h3>
            <div></div>
            <ul className="list-none space-y-3 text-lg">
              <li>
                <FooterLink to="about">About</FooterLink>
              </li>
              <li>
                <FooterLink to="team">Team</FooterLink>
              </li>
              <li>
                <FooterLink to="projects">Projects</FooterLink>
              </li>
              <li>
                <FooterLink to="blog">Blog</FooterLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="basis-1/3 flex justify-start md:justify-center">
          <div>
            <h3 className="font-sans text-sm uppercase mb-4 text-gray-400">
              Contact
            </h3>
            <ul className="list-none space-y-3 text-lg">
              {socialLinks &&
                Object.keys(socialLinks.fields).map((key) => {
                  return (
                    <li key={`${key} Social Link`}>
                      <FooterLink
                        to={socialLinks.fields[key as keyof TypeSocialsFields]}
                      >
                        {key}
                      </FooterLink>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
