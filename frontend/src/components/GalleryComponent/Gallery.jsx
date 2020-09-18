import React from 'react';
import art from '../../images/img-art.png';
import battle from '../../images/img-battle-board-game.png';
import blackandwhite from '../../images/img-black-and-white.png';
import graylaptop from '../../images/img-gray-laptop-codes.png';
import imac from '../../images/img-photo-of-imac.png';
import woman from '../../images/img-young-woman-thinking.png';

import { Button } from '../shared/button/index';
import { Heading, HEADING_OPTIONS } from '../shared/heading/index';


const Gallery = () => {
  return (
    <section>
      <div className="container my-32">
        <Heading>My Recent Works</Heading>
        <div className="mb-10 text-center text-xxlg">
          <h2> </h2>
        </div>
        <div className="mb-10 text-center text-sm ">
          <p>
            <span className="uppercase  inline-block m-5 ">all works </span>
            <span className="uppercase  inline-block m-5 ">ui/ux</span>
            <span className="uppercase  inline-block m-5 ">branding</span>
            <span className="uppercase  inline-block m-5 ">logo</span>
            <span className="uppercase  inline-block m-5 ">development</span>
          </p>
        </div>
        <div className=" grid grid-rows-2  grid-cols-3 gap-x-8 gap-y-6 ">
          <div className="max-w-sm">
            <img className="w-full" src={art} alt="" />
          </div>
          <div className="max-w-sm">
            <img className="w-full" src={battle} alt="" />
          </div>
          <div className="max-w-sm">
            <img className="w-full" src={blackandwhite} alt="" />
          </div>
          <div className="max-w-sm">
            <img className="w-full" src={graylaptop} alt="" />
          </div>
          <div className="max-w-sm">
            <img className="w-full" src={imac} alt="" />
          </div>
          <div className="max-w-sm">
            <img className="w-full" src={woman} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
