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
      <header className=" w-full  bg-c400  border-c100 border-b-4 pb-48">
        <div className="container flex flex-row relative">
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

            <div className="mt-4 pt-6">
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

          <div className="w-1/2 mb-8 pb-8 ">
            <img
              src={data.dotsUrl}
              alt="dots"
              className=" absolute   mb-24   transform  translate-x-4  -translate-y-4   "
            />
            <img
              src={data.avatarUrl}
              alt="avatar"
              className=" transform  scale-100 object-cover absolute w-60 h-60 rounded-full border-8 border-white ml-8 z-10  top-10 "
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
