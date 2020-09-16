import React from 'react';
import art from '../../images/img-art.png';
import battle from '../../images/img-battle-board-game.png';
import blackandwhite from '../../images/img-black-and-white.png';
import graylaptop from '../../images/img-gray-laptop-codes.png';
import imac from '../../images/img-photo-of-imac.png';
import woman from '../../images/img-young-woman-thinking.png';

const Gallery = () => {
  return (
    <React.Fragment>
      <div className="container mx-auto ">
        <div className="mb-16 text-center ">
          <h2>My Recent Works </h2>
        </div>
        <div className="mb-16 text-center">
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
    </React.Fragment>
  );
};

export default Gallery;
