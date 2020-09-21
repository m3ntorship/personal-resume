import React from 'react';
import { Button } from './../shared/button/index.js';
import { Heading, HEADING_OPTIONS } from '../shared/heading';
import { useEffect, useState } from 'react';
import { API } from '../../modules/apis';

const Header = () => {
  const [data, setData] = useState();
  useEffect(() => {
    API('/header').then(({ data }) => {
      setData(data);
    });
  }, []);
  if (data) {
    return (
      <header className=" w-full pb-48 relative">
        <div style={{clipPath: "polygon(0 0, 99.9% 0, 50% 99%, 0 100%)"}} className='z-10 absolute top-0 left-0 w-full h-full bg-c400 '></div>
        <div style={{clipPath: "polygon(0 0, 100% 0, 50% 100%, 0 100%)"}} className='z-0 absolute top-0 left-0 w-full h-full bg-c100 opacity-25'></div>
        <div className="container flex flex-row relative z-20">
          <div className=" mt-48 ">
            <div>
              <span className=" text-c100 font-body text-xxlg font-medium leading-1 ">
                I am
              </span>
              <Heading
                as="h1"
                fontSize={HEADING_OPTIONS.FONT_SIZES.LARGE}
                className="mb-3"
              >
                {data.heading}
              </Heading>
              <p className="text-c300 font-body leading-2 text-lg mb-8 ">
                {data.paragraph}
              </p>
            </div>

            <div className="mt-4 pt-3">
              <Button
                rounded={true}
                customClassNames="w-56 h-16 mr-6"
                bgColor="c100"
              >
                {data.webServicesButton.title}
              </Button>
              <Button
                rounded={true}
                customClassNames="w-56 h-16"
                bgColor="c200"
              >
                {data.recentWorkesButton.title}
              </Button>
            </div>
          </div>

          <div className="w-1/2 mb-8 pb-8 ml-6 ">
            <img
              src={data.dotsUrl}
              alt="dots"
              className=" absolute transform -translate-y-2  translate-x-2"
            />
            <img
              src={data.avatarUrl}
              alt="avatar"
              className=" transform  scale-100  object-cover absolute w-60 h-60 rounded-full border-8 border-white ml-10 z-10  top-10 "
            />
          </div>
        </div>
      </header>
    );
  } else {
    return null;
  }
};

export default Header;
