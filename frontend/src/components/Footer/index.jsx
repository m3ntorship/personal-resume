import React, { useState, useEffect } from 'react';
import { API } from '../../modules/apis';

const Footer = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    API('/footer').then(({ data }) => {
      setData(data);
    });
  }, []);

  const scrollTop = (e) => {
    e.preventDefault()
    window.scrollTo({top: 0, behavior: 'smooth'})
  }

  if (data) {
    return (
      <footer className="container m-auto flex flex-row justify-between py-4 items-center">
        <div className="mx-12">
          <a href="/">
            <img src={data.logo} alt="Logo" className="w-14" />
          </a>
        </div>
        <a
        onClick={scrollTop}
          href={data.topUrl}
          className="text-md font-medium text-c100 flex items-center"
        >
          Back To Top
          <img src={data.upWardsArrow} alt="back to top" className="w-3 ml-2" />
        </a>
        <span className="text-md text-c300">{data.copyRights}</span>
      </footer>
    );
  } else {
    return 'Data Broken';
  }
};

export default Footer;
