import React from 'react';
import { Button } from '../../shared/button/index';

const Card = ({ title, details }) => {
  const addHoverEffects = e => {
    console.log(e.target);
    e.target.getElementById('hover-effect').classList.toggle = 'hidden';
  };
  return (
    <article className="w-1/3">
      <div className="bg-c400 p-10 m-4 overflow-hidden relative group">
        {/* Hover Effect */}
        <div
          className="opacity-0 group-hover:opacity-100 absolute w-full h-full -mt-10 -ml-10 flex items-center justify-center transition-opacity duration-200"
        >
          <div className="bg-c900 w-70 h-70 rounded-full absolute z-30"></div>
          <div className="bg-c1000 w-90 h-90 rounded-full absolute z-20"></div>
          <div className="bg-c1100 w-110 h-110 rounded-full absolute"></div>
        </div>

        <div className="relative z-40">
          <div className="text-c100 w-20 h-20 my-5 mx-auto fill-current">
            <svg viewBox="0 0 496 496" xmlns="http://www.w3.org/2000/svg">
              <path d="M456 112h-40v16h40c13 0 24 11 24 24v216H16V152c0-13 11-24 24-24h40v-16H40c-22 0-40 18-40 40v256c0 22 18 40 40 40h104v32h-32v16h272v-16h-32v-32h104c22 0 40-18 40-40V152c0-22-18-40-40-40zM336 480H160v-32h176zm120-48H40c-13 0-24-11-24-24v-24h464v24c0 13-11 24-24 24zm0 0" />
              <path d="M384 400h16v16h-16zm0 0M416 400h16v16h-16zm0 0M448 400h16v16h-16zm0 0M352 336h112v16H352zm0 0M352 304h112v16H352zm0 0M368 272h96v16h-96zm0 0M400 240h64v16h-64zm0 0M96 122v22H32v208h160v-85l18 7 8 30h60l8-30c7-2 15-5 22-9l26 16 43-43-16-26c4-7 7-15 9-22l30-8v-60l-30-8c-2-7-5-15-9-22l16-26-43-43-26 16c-7-4-15-7-22-9l-8-30h-60l-8 30c-7 2-15 5-22 9l-26-16-43 43 16 26c-4 7-7 15-9 22zM48 336V160h48v22l30 8c2 7 5 15 9 22l-16 26 43 43 14-9v64zm91-209l1-4c3-10 6-19 11-27l2-4-14-24 25-25 24 14 4-2c8-5 17-9 27-11l4-1 7-27h36l7 27 4 1c10 3 18 6 27 11l4 2 24-14 25 25-14 24 2 4c5 8 8 17 11 27l1 4 27 7v36l-27 7-1 4c-3 10-6 18-11 27l-2 4 14 24-25 25-24-14-4 2c-8 5-17 8-27 11l-4 1-7 27h-36l-7-27-4-1c-10-3-18-6-27-11l-4-2-24 14-25-25 14-24-2-4c-5-8-8-17-11-27l-1-4-27-7v-36zm0 0" />
              <path d="M248 248a96 96 0 100-192 96 96 0 000 192zm0-176a80 80 0 110 160 80 80 0 010-160zm0 0" />
              <path d="M248 216a64 64 0 100-128 64 64 0 000 128zm0-112a48 48 0 110 96 48 48 0 010-96zm0 0" />
              <path d="M224 144h16v16h-16zm0 0M256 144h16v16h-16zm0 0M64 176h16v16H64zm0 0M64 208h32v16H64zm0 0M64 240h32v16H64zm0 0M64 272h64v16H64zm0 0M64 304h96v16H64zm0 0" />
            </svg>
          </div>
          <h1 className="font-headings font-bold text-lg">{title}</h1>
          <p className="text-base mt-5">{details}</p>
          <Button
            rounded={true}
            customClassNames="my-6 mx-auto block w-48 h-12 font-bold group-hover:bg-c100 group-hover:text-white transition-colors duration-200 focus:outline-none focus:shadow-outline"
          >
            get this service
          </Button>
        </div>
      </div>
    </article>
  );
};

export default Card;
