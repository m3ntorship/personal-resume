import React, { useEffect, useState } from 'react';
import { API } from '../../modules/apis';
import { Button } from '../shared/button';
import { Container } from '../shared/container';

export const Navbar = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [mobileNavState, setMobileNavState] = useState(false);
  useEffect(() => {
    API('/navigation')
      .then(({ data }) => {
        setData(data);
      })
      .catch(error => {
        setError(error.message);
      });
  }, []);
  const toggleMobileNav = () => {
    setMobileNavState(!mobileNavState);
  };
  if (data) {
    const navLinks = data.linksList.map(({ title, linkUrl, id }) => {
      return (
        <li
          key={id}
          className=" text-c300 hover:text-c100 uppercase font-medium m-3 whitespace-no-wrap"
        >
          <a href={linkUrl}>{title}</a>
        </li>
      );
    });
    return (
      <Container
        widthOutContainerDiv
        isBgGray
        className="shadow-lg w-screen lg:py-8"
      >
        <nav className="flex items-center justify-between bg-white shadow-lg p-3 lg:rounded-full lg:m-auto lg:w-4/5 xl:min-w-navbar">
          <div className="mx-2 sm:mx-6 md:mx:8 lg:mx-10">
            <img src={data.logoUrl} alt="logo" className="w-16" />
          </div>
          <div className="flex items-center justify-end">
            <ul className="hidden xl:flex flex-row items-center justify-between ml-32 text-xl">
              {error ? <p className="text-c100 text-xl"> Hi </p> : navLinks}
            </ul>
            {/* Reusable button compnenet */}
            <Button
              rounded={true}
              customClassNames="hidden md:block w-48 h-16 lg:w-64 lg:h-20 font-medium my-0"
              bgColor="c100"
            >
              {data.downloadBtn}
              <span className="ml-2">
                <img src={data.iconUrl} alt="Download" className="w-5 inline" />
              </span>
            </Button>
            {/* Hamburgur Button*/}
            <div
              className="inline-block mx-8 xl:hidden"
              onClick={toggleMobileNav}
            >
              <div className="w-8 h-1 bg-c300 pointer-events-none"></div>
              <div className="w-8 h-1 bg-c300 mt-1 pointer-events-none"></div>
              <div className="w-8 h-1 bg-c300 mt-1 pointer-events-none"></div>
            </div>
          </div>
        </nav>
        <div>
          <div
            className={`${
              mobileNavState ? 'opacity-75' : 'opacity-0 pointer-events-none'
            } transition-all duration-200 bg-black w-screen h-full fixed z-60 left-0 bottom-0`}
            onClick={toggleMobileNav}
          ></div>
          <ul
            className={`bg-c400 ${
              mobileNavState ? 'w-7/12 md:w-1/4' : 'w-0'
            } transition-all duration-200 ease-in overflow-hidden h-full fixed z-60 left-0 bottom-0 flex flex-col items-start justify-start text-xl`}
          >
            {error ? <p className="text-c100 text-xl"> Hi </p> : navLinks}
            <li>
              <Button
                rounded={true}
                customClassNames="p-2 ml-2 font-medium md:hidden whitespace-no-wrap"
                bgColor="c100"
              >
                {data.downloadBtn}
                <span className="ml-2">
                  <img
                    src={data.iconUrl}
                    alt="Download"
                    className="w-5 inline"
                  />
                </span>
              </Button>
            </li>
          </ul>
        </div>
      </Container>
    );
  } else {
    return null;
  }
};

export default Navbar;
