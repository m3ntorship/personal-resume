import React from 'react';
import Logo from './Logo.png';
export const Footer = () => {
  return (
    <footer className="w-main-container m-auto flex flex-row justify-between items-center my-8">
      <div className="mx-12">
        <a href="/">
          <img src={Logo} alt="Logo" className="w-16" />
        </a>
      </div>
      <a
        href="/"
        className="text-md font-medium text-c100 flex items-center align-middle"
      >
        Back To Top <span className="font-bold mx-1">^</span>
      </a>
      <span className="text-md text-c300">
        Copyrights By&copy;Example - 2020
      </span>
    </footer>
  );
};
