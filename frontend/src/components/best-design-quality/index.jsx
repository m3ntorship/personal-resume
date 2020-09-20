// import React, { useState, useEffect } from 'react';
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
      if (i === 0) return null;
      return (
        <img
          key={image.id}
          className="object-cover object-center  border-4 border-white mb-3"
          style={{
            height: '8.75rem',
            width: '7.5rem'
          }}
          src={image.url}
          alt="mock image"
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
              <span className="text-c100">
                <svg
                  className="fill-current opacity-25 w-40 absolute"
                  style={{
                    top: '120'
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M478 231c-22-22-50-35-81-36v-8c0-15 11-60 18-85l7-25h-87l-6 9c-2 4-57 94-57 229a120 120 0 10206-84zm-86 164c-44 0-80-36-80-80 0-99 33-173 46-198h12c-6 23-13 54-13 70 0 13 1 23 6 31 4 8 12 17 30 17h1a80 80 0 01-2 160zM206 231c-22-22-50-35-81-36v-8c0-15 11-60 18-85l7-25H63l-6 9c-2 4-57 94-57 229a120 120 0 10206-84zm-86 164c-44 0-80-36-80-80 0-99 33-173 46-198h12c-6 23-13 54-13 70 0 13 1 23 6 31 4 8 12 17 30 17h1a80 80 0 01-2 160z" />
                </svg>
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
