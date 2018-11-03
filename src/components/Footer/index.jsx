import React from 'react';
// import { NavLink } from 'react-router-dom';

import DonateButton from '../Donate Button';

import './styles.scss';

export class Footer extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="footer">
        <footer className=" container">
          <div className="row align-items-top">
            <div className="footer-widget col-4 d-none d-md-flex">
              <ul className="list-unstyled">
                <li>Projects</li>
                <li>Blog</li>
                <li>About</li>
                <li>Team</li>
              </ul>
            </div>

            <div className="footer-widget col-4 d-none d-md-flex">
              <ul className="list-unstyled">
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Mail</li>
              </ul>
            </div>

            <div className="col-12 col-md-4 text-left">
              <h5>
                <strong>The Lilac Foundation</strong>
              </h5>
              <p className="mb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio pariatur excepturi voluptates aspernatur tempora
                consectetur.
              </p>
              <DonateButton className="btn-light" />
            </div>
          </div>
          <div className="footer-credit">
            Made with <span className="heart">❤</span> by&#160;
            <a
              href="https://bryanbrotonel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="credit-link"
            >
              Bryan Brotonel
            </a>
          </div>
        </footer>
      </div>
    );
  }
}
