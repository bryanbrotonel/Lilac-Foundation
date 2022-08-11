import React from 'react';
import { Link } from 'react-router-dom';
import FooterLink from './FooterLink';

function footer() {
  return (
    <div className="bg-secondary py-20 mt-20">
      <div className="container flex flex-col md:flex-row gap-y-10 md:gap-y-0">
        <div className="basis-1/3 order-last md:order-none prose prose-invert">
          <h2 className="font-serif text-4xl !mb-4">The Lilac Foundation</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
            blanditiis voluptates assumenda illo dolorum animi eveniet suscipit
            exercitationem impedit molestias.
          </p>
          <span className="text-gray-500">
            Made with &#128156; by&nbsp;
            <a
              href="https://bryanbrotonel.live"
              className="no-underline text-inherit hover:text-white-20"
            >
              Bryan
            </a>
          </span>
        </div>
        <div className="basis-1/3 flex justify-start md:justify-center">
          <div>
            <h3 className="font-sans text-sm uppercase mb-4 text-gray-400">
              Pages
            </h3>
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
              <li>
                <FooterLink to="">Facebook</FooterLink>
              </li>
              <li>
                <FooterLink to="">Instagram</FooterLink>
              </li>
              <li>
                <FooterLink to="">Mail</FooterLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default footer;
