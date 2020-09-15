import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex  items-start justify-between half-width w-3/4 bg-white shadow-xl p-6 rounded-full">
      <div>
        <img src="/" alt="" />
        <h1>Logo</h1>
      </div>
      <ul className="flex flex-row items-center justify-between">
        <li>
          <a href="#" className=" px-4 py-4 hover:text-red-100">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="p-1">
            About US
          </a>
        </li>
      </ul>
      <div className="button self-end">
        <button className="">Downoal My cv</button>
      </div>
    </nav>
  );
};
export default Navbar;
