import React, { useState, useEffect } from 'react';
import { API } from '../../modules/apis';

const Footer = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    API('/footer').then(({ data }) => {
      setData(data);
    });
  }, []);

  const scrollTop = e => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  // flex flex-row flex-wrap justify-between items-center
  if (data) {
    return (
      <footer className="container m-auto grid grid-cols-2 gap-y-12 md:gap-0 md:grid-cols-3 py-4">
        <div>
          <a href="/">
            <img src={data.logo} alt="Logo" className="w-14" />
          </a>
        </div>
        <a
          onClick={scrollTop}
          href={data.topUrl}
          className="text-md font-medium text-c100 text-right py-3 md:col-auto justify-self-center md:justify-self-start self-center"
        >
          Back To Top
          <img
            src={data.upWardsArrow}
            alt="back to top"
            className="w-3 ml-2 inline-block"
          />
        </a>
        <span className="text-base text-c300 lg:text-md col-span-2 md:col-auto justify-self-center self-center">
          {data.copyRights}
        </span>
      </footer>
    );
  } else {
    return 'Data Broken';
  }
};

export default Footer;
