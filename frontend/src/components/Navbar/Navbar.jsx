import React, { useState } from 'react';
import { useEffect } from 'react';
import { API } from '../../modules/apis';
import { Button } from '../shared/button';
import Logo from './Logo.png';
import Icon from './Icon.svg';
export const Navbar = () => {
  // Fetching API from the backend
  const [links, setLinks] = useState([]);
  useEffect(() => {
    API('/navigation').then(({ data: navigation }) => {
      setLinks(navigation);
    });
  }, []);
  return (
    <nav className="flex  items-center justify-between w-5/6  bg-white shadow-lg p-3 my-10 rounded-full m-auto">
      <div className="mx-12">
        <img src={Logo} alt="" className="w-16" />
      </div>
      <ul className="flex flex-row items-center justify-between ml-56 text-xl">
        {/* Looping Menu items */}
        {links.map((link, index) => {
          return (
            <a
              href="/"
              key={index}
              className=" text-c300 hover:text-c100 uppercase font-medium  m-4 "
            >
              {link.title}
            </a>
          );
        })}
      </ul>
      <div>
        {/* Reusable button compnenet */}
        <Button
          rounded={true}
          customClassNames="w-64 h-20 font-medium my-0"
          bgColor="c100"
        >
          Download My CV
          <span className="ml-2">
            <img src={Icon} alt="Download" className="w-5 inline" />
          </span>
        </Button>
      </div>
    </nav>
  );
};
