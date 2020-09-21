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
      <header className="w-full pb-40 pt-8 relative">
        <div style={{clipPath: "polygon(0 0, 99.9% 0, 55% 99%, 0 100%)"}} className='hidden lg:block z-10 absolute top-0 left-0 w-full h-full bg-c400 '></div>
        <div style={{clipPath: "polygon(0 0, 100% 0, 55% 100%, 0 100%)"}} className='hidden lg:block z-0 absolute top-0 left-0 w-full h-full bg-c100 opacity-25'></div>
        <div className="container z-20 flex flex-row lg:pt-24 relative">
          <div className="lg:mt-16">
            <div>
              <span className="text-c100 font-body text-lg lg:text-xxlg font-medium leading-1">
                I am
              </span>
              <Heading
                as="h1"
                fontSize={HEADING_OPTIONS.FONT_SIZES.LARGE}
                className="mb-3 hidden lg:block"
              >
                {data.heading}
              </Heading>
              <Heading
                as="h1"
                className="mb-3 whitespace-no-wrap lg:hidden"
              >
                {data.heading}
              </Heading>
              <p className="text-c300 font-body leading-1 md:leading-2 text-sm lg:text-lg mb-8 ">
                {data.paragraph}
              </p>
            </div>

            <div className="flex md:mt-4 md:pt-6">
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

          <div className="w-5 md:w-1/2 md:mb-8 md:pb-8 md:ml-6 ">
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
