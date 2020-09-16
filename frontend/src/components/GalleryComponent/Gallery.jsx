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
      <div className="container mx-auto">
        <div>
          <h2>My Recent Works </h2>
        </div>
        <div></div>
        <div className=" grid grid-rows-3 gap-4 grid-cols-3 ">
          <div>
            <img src={art} alt="" />
          </div>
          <div>
            <img src={battle} alt="" />
          </div>
          <div>
            <img src={blackandwhite} alt="" />
          </div>
          <div>
            <img src={graylaptop} alt="" />
          </div>
          <div>
            <img src={imac} alt="" />
          </div>
          <div>
            <img src={woman} alt="" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Gallery;
