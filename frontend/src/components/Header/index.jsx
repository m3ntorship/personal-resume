import React from 'react';
import dots from './assets/dots3.png';
import avatar from './assets/avata1r.png';
import { Button } from './../shared/button/index.js';
import { Heading, HEADING_OPTIONS } from '../shared/heading';
// import { useEffect } from 'react';
// import { API } from './../../modules/apis';
import './custom.css';

const Header = () => {
  return (
    <header className=" w-full  bg-c400  border-c100 border-b-4 pb-32">
      <div className="container flex flex-row pt-64 relative">
        <div className="  mt-16  ">
          <div className="  ">
            <span className=" text-c100 font-body text-xxlg font-medium leading-1 ">
              I am
            </span>
            <Heading as="h1" fontSize={HEADING_OPTIONS.FONT_SIZES.LARGE}>
              Mark Parker
            </Heading>
            <p className="text-c300 font-body leading-2 text-lg mb-8 ">
              I am professional UI Designer and Web Developer. I am working in
              UI Park as a UI/UX Designer.
            </p>
          </div>

          <div className="  ">
            <Button
              rounded={true}
              customClassNames="w-56 h-16 mr-4"
              bgColor="c100"
            >
              web services
            </Button>
            <Button rounded={true} customClassNames="w-56 h-16" bgColor="c200">
              recent works
            </Button>
          </div>
        </div>

        <div className="w-1/2 mb-8 pb-8 ">
          <img
            src={dots}
            alt=""
            className=" absolute  mb-32   transform  translate-x-8  -translate-y-8   "
          />
          <img
            src={avatar}
            alt=""
            className=" object-cover w-60 h-60 relative rounded-full border-8 border-white ml-16 z-10 "
          />
        </div>
      </div>
      <div className="stick absolute flex "></div>
      <div className="triangle absolute  flex "></div>
    </header>
  );
};

export default Header;
