import React, { useState, useEffect } from 'react';
import { API } from '../../modules/apis';
import { Heading, HEADING_OPTIONS } from '../shared/heading/index';

export const BestDesignQuality = () => {
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
        className="text-c300 bg-c400 mt-35"
        style={{
          height: '33rem'
        }}
      >
        <div
          className="container grid gap-16"
          style={{ gridTemplateColumns: '1fr 1fr' }}
        >
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
                className="absolute"
                style={{
                  top: '150px',
                  left: '0'
                }}
              >
                <img src={bestDesign.imagesURL[1].url} alt="" />
              </span>
            </p>
          </div>
          <div
            className="flex justify-around items-end"
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
