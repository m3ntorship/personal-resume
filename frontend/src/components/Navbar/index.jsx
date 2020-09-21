import React, { useEffect, useState } from 'react';
import { API } from '../../modules/apis';
import { Button } from '../shared/button';

export const Navbar = () => {
  // Fetching API from the backend
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
    setMobileNavState(!mobileNavState)
    // mobileNavState === 'hidden'
    //   ? setMobileNavState('')
    //   : setMobileNavState('hidden');
  };
  if (data) {
    const navLinks = data.linksList.map(({ title, linkUrl, id }) => {
      return (
        <a
          href={linkUrl}
          key={id}
          className="text-c300 hover:text-c100 uppercase font-medium m-4"
        >
          {title}
        </a>
      );
    });
    return (
      <div className="bg-c400 pb-6 lg:p-6 overflow-x-hidden">
        <nav className="flex items-center justify-between bg-white shadow-lg p-3 lg:w-5/6 lg:rounded-full lg:m-auto">
          <div className="mx-2 sm:mx-6 md:mx:8 lg:mx-10">
            <img src={data.logoUrl} alt="logo" className="w-16" />
          </div>
          <div className="flex items-center justify-end">
            <ul className="hidden lg:flex flex-row items-center justify-between ml-56 text-xl">
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
            {/* Hamburgur Menu*/}
            <div
              className="inline-block mx-3 lg:hidden"
              onClick={toggleMobileNav}
            >
              <div className="w-8 h-1 bg-c300 pointer-events-none"></div>
              <div className="w-8 h-1 bg-c300 mt-1 pointer-events-none"></div>
              <div className="w-8 h-1 bg-c300 mt-1 pointer-events-none"></div>
            </div>
          </div>
          <div className={`${mobileNavState ? '':'hidden'}`}>
            <div
              className="bg-black opacity-75 w-screen h-full absolute z-40 left-0 bottom-0"
              onClick={toggleMobileNav}
            ></div>
            <ul className="bg-white w-6/12 h-full absolute z-50 left-0 bottom-0 flex flex-col items-start justify-start text-xl">
              {error ? <p className="text-c100 text-xl"> Hi </p> : navLinks}
              <li>
                <Button
                  rounded={true}
                  customClassNames="p-2 ml-2 font-medium md:hidden"
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
        </nav>
      </div>
    );
  } else {
    return 'Data broken';
  }
};

export default Navbar;
