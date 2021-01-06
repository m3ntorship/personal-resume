import React from 'react';
import { Button } from './../shared/button/index.js';
import { Heading, HEADING_OPTIONS } from '../shared/heading';
import { Container, CONTAINER_OPTIONS } from '../shared/container';
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
      <Container
        padding={CONTAINER_OPTIONS.PADDING.DEFAULT}
        className=" relative border-b-4 border-c100 md:border-none"
      >
        <div
          style={{ clipPath: 'polygon(0 0, 99.8% 0, 54.8% 99.5%, 0 99.5%)' }}
          className="hidden md:block z-10 absolute top-0 left-0 w-full h-full bg-c400 "
        ></div>
        <div
          style={{ clipPath: 'polygon(0 0, 100% 0, 55% 100%, 0 100%)' }}
          className="hidden md:block z-0 absolute top-0 left-0 w-full h-full bg-c100 opacity-25"
        ></div>
        <div className="m-auto z-20 flex flex-row relative">
          <div className="w-70 m-auto lg:ml-16 lg:mr-32 lg:mt-8 xl:m-auto xl:w-auto xl:my-32">
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
              <Heading as="h1" className="mb-3 md:whitespace-no-wrap xl:hidden">
                {data.heading}
              </Heading>
              <div className="">
                <img
                  src={data.avatarUrl}
                  alt="avatar"
                  className="sm:hidden w-64 rounded-md"
                />
              </div>
              <p className="text-c300 font-body leading-1 md:leading-2 text-md xl:w-110 xl:text-lg my-8">
                {data.paragraph}
              </p>
            </div>
            <div className="flex flex-col xl:flex-row my-6 md:mt-4">
              <Button
                rounded={true}
                customClassNames="w-48 md:w-56 h-12 md:h-16"
                bgColor="c100"
              >
                {data.webServicesButton.title}
              </Button>
              <Button
                rounded={true}
                customClassNames="w-48 md:w-56 h-12 md:h-16 mt-4 xl:mt-0 xl:ml-10"
                bgColor="c200"
              >
                {data.recentWorkesButton.title}
              </Button>
            </div>
          </div>
          <div className="hidden sm:block w-1/2 mb-8 pb-8 md:ml-6">
            <img
              src={data.dotsUrl}
              alt="dots"
              className="w-3/12 absolute xl:transform xl:-translate-y-2  xl:translate-x-1"
            />
            <img
              src={data.avatarUrl}
              alt="avatar"
              className="w-5/12 xl:w-6/12 transform scale-100 object-cover absolute rounded-full border-8 border-white md:ml-12 xl:-ml-2 z-10 top-10 "
            />
          </div>
        </div>
      </Container>
    );
  } else {
    return null;
  }
};

export default Header;
