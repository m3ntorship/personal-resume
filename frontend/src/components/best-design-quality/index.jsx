// import React, { useState, useEffect } from 'react';
import React from 'react';
import { Heading, HEADING_OPTIONS } from '../shared/heading/index';

export const BestDesignQuality = () => {
  return (<section className="text-c400 container relative grid grid-cols-5">
    <div>
      <Heading color={HEADING_OPTIONS.COLOR.SECONDARY} fontSize={HEADING_OPTIONS.FONT_SIZES.XSMALL}>“Best Design Quality”</Heading>
      <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inci- didunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exe- rcitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    </div>
    <div>
      <div className="absolute"><img src="./images/img-gray-laptop-codes.png" alt=""/></div>
      <img src="./images/silver-imac-displaying-collage-photos.png" alt=""/>
      <img src="./images/person-using-black-and-white-smartphone-and-holding-blue-card.png" alt=""/>
      <img src="./images/black-samsung-tablet-computer.png" alt=""/>
    </div>
  </section>);
};
