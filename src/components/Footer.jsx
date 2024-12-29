import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="bg-white rounded-lg shadow m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link
              to="/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img
                src="https://i.ibb.co/9Gnb4LQ/logo.png"
                className="h-8"
                alt="Severn Valley Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap">
                Severn Valley
              </span>
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
              {/* <li>
                <a href="/about" className="hover:underline me-4 md:me-6">
                  About
                </a>
              </li> */}
              <li>
                <Link to="/" className="hover:underline me-4 md:me-6">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:underline me-4 md:me-6">
                  Licensing
                </Link>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center">
            © 2024{" "}
            <Link to="/" className="hover:underline">
              Severn Valley™
            </Link>
            . All Rights Reserved. Designed <a href="https://sarangpachari.netlify.app" target="_blank">SNG</a>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
