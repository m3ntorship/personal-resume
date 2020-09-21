import React, { useState } from 'react';
import { useEffect } from 'react';
import { API } from '../../modules/apis';
import { Button } from '../shared/button';

export const Navbar = () => {
  // Fetching API from the backend
  const [data, setData] = useState(null);
  const [error, setError] = useState();
  useEffect(() => {
    API('/navigation')
      .then(({ data }) => {
        setData(data);
      })
      .catch(error => {
        setError(error.message);
      });
  }, []);
  if (data) {
    return (
      <div className="bg-c400 p-12">
        <nav className="flex  items-center justify-between w-5/6  bg-white  shadow-lg p-3  rounded-full m-auto">
          <div className="mx-12">
            <img src={data.logoUrl} alt="" className="w-16" />
          </div>
          <ul className="flex flex-row items-center justify-between ml-56 text-xl">
            {error ? (
              <p className="text-c100 text-xl"> Hi </p>
            ) : (
              data.linksList.map(({ title, linkUrl, id }) => {
                return (
                  <a
                    href={linkUrl}
                    key={id}
                    className=" text-c300 hover:text-c100 uppercase font-medium  m-4 "
                  >
                    {title}
                  </a>
                );
              })
            )}
          </ul>
          <div>
            {/* Reusable button compnenet */}
            <Button
              rounded={true}
              customClassNames="w-64 h-20 font-medium my-0"
              bgColor="c100"
            >
              {data.downloadBtn}
              <span className="ml-2">
                <img src={data.iconUrl} alt="Download" className="w-5 inline" />
              </span>
            </Button>
          </div>
        </nav>
      </div>
    );
  } else {
    return 'Data broken';
  }
};

export default Navbar;
