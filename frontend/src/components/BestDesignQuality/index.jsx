import React, { useState, useEffect } from 'react';
import { API } from '../../modules/apis';
import { Heading, HEADING_OPTIONS } from '../shared/heading/index';

const BestDesignQuality = () => {
  const [bestDesign, setBestDesign] = useState();
  useEffect(() => {
    API('/bestDesign').then(({ data }) => {
      setBestDesign(data);
    });
  }, []);
  if (bestDesign) {
    const images = bestDesign.imagesURL.map((image, i) => {
      if (i === 0 || i === 1) return null;
      return (
        <img
          key={image.id}
          className="object-cover object-center  border-4 border-white mb-3"
          style={{
            height: '8.75rem',
            width: '7.5rem'
          }}
          src={image.url}
          alt="mock"
        />
      );
    });
    return (
      <section
        className="text-c300 bg-c400"
        style={{
          height: '33rem',
          marginTop: '8.125rem'
        }}
      >
        <div className="container grid grid-cols-1 lg:grid-cols-2 lg:gap-16 justify-center">
          <div className="flex flex-col justify-center items-start">
            <Heading
              color={HEADING_OPTIONS.COLOR.SECONDARY}
              fontSize={HEADING_OPTIONS.FONT_SIZES.SMALL}
              className="mb-6"
            >
              {bestDesign.title}
            </Heading>
            <p className="mt-2 font-headings font-medium italic text-lg relative">
              {bestDesign.details}
              <span
                className="absolute left-0 hidden lg:block"
                style={{
                  top: '150px'
                }}
              >
                <img src={bestDesign.imagesURL[1].url} alt="" />
              </span>
            </p>
          </div>
          <div
            className="flex justify-around items-end mx-auto mt-10 lg:mt-0"
            style={{
              background: `url(${bestDesign.imagesURL[0].url}) no-repeat`,
              backgroundSize: 'contain',
              width: '28.4375rem',
              height: '33rem'
            }}
          >
            {images}
          </div>
        </div>
      </section>
    );
  } else {
    return null;
  }
};

export default BestDesignQuality;
