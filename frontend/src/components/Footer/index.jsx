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
      <footer className="w-main-container m-auto flex flex-row justify-between items-center my-8">
        <div className="mx-12">
          <a href="/">
            <img src={data.logo} alt="Logo" className="w-16" />
          </a>
        </div>
        <a
          href={data.topUrl}
          className="text-md font-medium text-c100 flex items-center align-middle"
        >
          Back To Top <span className="font-bold mx-1">^</span>
        </a>
        <span className="text-md text-c300">{data.copyRights}</span>
      </footer>
    );
  } else {
    return 'Data Broken';
  }
};
