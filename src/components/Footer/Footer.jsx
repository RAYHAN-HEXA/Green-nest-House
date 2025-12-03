import React from 'react';
import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="https://x.com/" target="_blank">
            <FaTwitter />
          </a>
          <a href="https://www.facebook.com/" target="_blank">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <FaInstagram />
          </a>
          <a href="https://github.com/" target="_blank">
            <FaGithub />
          </a>
        </div>
      </nav>
      <aside>
        <p>Copyright © {new Date().getFullYear()} - GreenNest. All rights reserved</p>
      </aside>
    </footer>
  );
};

export default Footer;