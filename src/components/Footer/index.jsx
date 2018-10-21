import React from 'react';

import './styles.scss';

export class Footer extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
              <div className="ft-logo">
                <h2>The Lilac Foundation</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <div className="footer-widget">
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Work</a>
                  </li>
                  <li>
                    <a href="#">Mission</a>
                  </li>
                  <li>
                    <a href="#">Story</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-4">
              <div className="footer-widget">
                <ul className="list-unstyled">
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Team</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-4">
              <div className="footer-widget">
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Instagram</a>
                  </li>
                  <li>
                    <a href="#">Twitter</a>
                  </li>
                  <li>
                    <a href="#">Facebook</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-center">
              <div className="tiny-footer">
                <p>
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
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
