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
      <header className="w-full md:pb-40 pt-8 relative border-b-4 border-c100 md:border-none ">
        <div
          style={{ clipPath: 'polygon(0 0, 99.9% 0, 55% 99%, 0 100%)' }}
          className="hidden md:block z-10 absolute top-0 left-0 w-full h-full bg-c400 "
        ></div>
        <div
          style={{ clipPath: 'polygon(0 0, 100% 0, 55% 100%, 0 100%)' }}
          className="hidden md:block z-0 absolute top-0 left-0 w-full h-full bg-c100 opacity-25"
        ></div>
        <div className="md:container m-auto w-90 sm:w-auto z-20 flex flex-row relative">
          <div className="w-70 ml-8 mr-32 lg:ml-16 lg:mr-40 xl:m-auto xl:w-auto xl:my-32">
            <div>
              <span className="text-c100 font-body text-lg xl:text-xxlg font-medium leading-1">
                I am
              </span>
              <Heading
                as="h1"
                fontSize={HEADING_OPTIONS.FONT_SIZES.LARGE}
                className="mb-3 hidden xl:block"
              >
                {data.heading}
              </Heading>
              <Heading as="h1" className="mb-3 whitespace-no-wrap xl:hidden">
                {data.heading}
              </Heading>
              <div className="">
                <img
                  src={data.avatarUrl}
                  alt="avatar"
                  className="sm:hidden w-64 rounded-md"
                />
              </div>
              <p className="text-c300 font-body leading-1 md:leading-2 text-md w-90 xl:w-auto xl:text-lg my-8">
                {data.paragraph}
              </p>
            </div>
            <div className="flex my-6 md:mt-4 md:pt-6">
              <Button
                rounded={true}
                customClassNames="w-32 md:w-56 h-12 md:h-16 mr-6"
                bgColor="c100"
              >
                {data.webServicesButton.title}
              </Button>
              <Button
                rounded={true}
                customClassNames="w-32 md:w-56 h-12 md:h-16"
                bgColor="c200"
              >
                {data.recentWorkesButton.title}
              </Button>
            </div>
          </div>
          <div className="hidden sm:block w-1/2 mb-8 pb-8 md:ml-6 ">
            <img
              src={data.dotsUrl}
              alt="dots"
              className="w-3/12 xl:w-4/12 absolute xl:transform xl:-translate-y-2  xl:translate-x-2"
            />
            <img
              src={data.avatarUrl}
              alt="avatar"
              className="w-6/12 xl:w-7/12 transform scale-100 object-cover absolute rounded-full border-8 border-white xl:ml-10 z-10 top-10 "
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
