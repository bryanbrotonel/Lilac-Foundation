import React from 'react';
// import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './styles.scss';

export class Footer extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <footer className="footer container">
          <div className="row align-items-top">
            <div className="footer-widget col-4 d-none d-md-flex">
              <ul className="list-unstyled">
                <li>
                  <a href="#">Story</a>
                </li>
                <li>
                  <a href="#">Work</a>
                </li>
              </ul>
            </div>

            <div className="footer-widget col-4 d-none d-md-flex">
              <ul className="list-unstyled">
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            </div>

            <div className="col-12 col-md-4 text-left">
              <h5>The Lilac Foundation</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio pariatur excepturi voluptates aspernatur tempora
                consectetur.
              </p>
              <ul className="list-inline">
                <li className="list-inline-item">
                  <a href="">
                    <FontAwesomeIcon icon={['far', 'envelope']} />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="">
                    <FontAwesomeIcon icon={['fab', 'facebook']} />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="">
                    <FontAwesomeIcon icon={['fab', 'instagram']} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="copyright-footer col text-center">
              Copyright © All Rights Reserved {new Date().getFullYear()} |
              Website by{' '}
              <a
                href="https://bryanbrotonel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="copyrightlink"
              >
                Bryan Brotonel
              </a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
