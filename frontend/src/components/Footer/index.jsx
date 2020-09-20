import React, { useState, useEffect } from 'react';
import { API } from '../../modules/apis';
export const Footer = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    API('/footer').then(({ data }) => {
      setData(data);
    });
  }, []);
  if (data) {
    return (
      <footer className="w-main-container m-auto flex flex-row justify-between items-center">
        <div className="mx-12">
          <a href="/">
            <img src={data.logo} alt="Logo" className="w-16" />
          </a>
        </div>
        <a
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
