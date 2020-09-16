import React, { useState } from 'react';
import { useEffect } from 'react';
import { API } from '../../modules/apis';
import Logo from './Logo.png';
import { Button } from '../shared/button';

export const Navbar = () => {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    API('/navigation').then(({ data: navigation }) => {
      setLinks(navigation);
    });
  }, []);
  console.log(links);
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
    <nav className="flex  items-center justify-between w-5/6  bg-white shadow-xl p-3 rounded-full m-auto">
      <div className="mx-12">
        <img src={Logo} alt="" className="w-16" />
      </div>
      <ul className="flex flex-row items-center justify-between ml-48 text-xl">
        <li>
          <a href="#" className=" text-c300 p-5 hover:text-c100 uppercase">
            HOME
          </a>
        </li>
        <li>
          <a href="#" className=" text-c300 p-5 hover:text-c100 uppercase">
            ABOUT US
          </a>
        </li>
        <li>
          <a href="#" className=" text-c300 p-5 hover:text-c100 uppercase">
            SERVICES
          </a>
        </li>
        <li>
          <a href="#" className=" text-c300 p-5 hover:text-c100 uppercase">
            PROJECTS
          </a>
        </li>
        <li>
          <a href="#" className=" text-c300 p-5 hover:text-c100 uppercase">
            TESTMONIALS
          </a>
        </li>
        <li>
          <a href="#" className=" text-c300 p-5 hover:text-c100 uppercase">
            BOLG
          </a>
        </li>
        <li>
          <a href="#" className=" text-c300 p-5 hover:text-c100">
            CONTACT
          </a>
        </li>
      </ul>
      <div className="">
        <Button
          rounded={true}
          customClassNames="w-64 h-20 font-medium my-0"
          bgColor="c100"
        >
          Download My CV
        </Button>
      </div>
    </nav>
  );
};
