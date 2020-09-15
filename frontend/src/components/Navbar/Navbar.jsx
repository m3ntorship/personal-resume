import React from 'react';
import Logo from './Logo.png';
const Navbar = () => {
  // colors: {
  //   c100: '#f9320c', // red
  //   c200: '#141f32', // dark-blue
  //   c300: '#7a8baa', // grayish-blue
  //   c400: '#f9f7ff', // off-white
  //   c600: '#8072fc', // light-blue
  //   c700: '#ed3ce3', // purple
  //   c800: '#74fa5e'  // light-green
  // },
  return (
    <nav className="flex  items-center justify-between w-5/6  bg-white shadow-xl p-3 my-8 rounded-full m-auto">
      <div className="mx-8">
        <img src={Logo} alt="" className="m-2 w-12" />
      </div>
      <ul className="flex flex-row items-center justify-between">
        <li>
          <a href="#" className=" text-c300 p-3 hover:text-c100">
            Home
          </a>
        </li>
        <li>
          <a href="#" className=" text-c300 p-3 hover:text-c100">
            About us
          </a>
        </li>
        <li>
          <a href="#" className=" text-c300 p-3 hover:text-c100">
            Services
          </a>
        </li>
        <li>
          <a href="#" className=" text-c300 p-3 hover:text-c100">
            Projects
          </a>
        </li>
        <li>
          <a href="#" className=" text-c300 p-3 hover:text-c100">
            Testmonials
          </a>
        </li>
        <li>
          <a href="#" className=" text-c300 p-3 hover:text-c100">
            Blog
          </a>
        </li>
        <li>
          <a href="#" className=" text-c300 p-3 hover:text-c100">
            Contact
          </a>
        </li>
      </ul>
      <div className="button self-end">
        <button className="bg-c100 px-12 py-5 rounded-full m-0">
          Downoal My cv
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
