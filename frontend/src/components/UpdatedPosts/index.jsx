import React from 'react';
import { Heading, HEADING_OPTIONS } from '../shared/heading';
export const UpdatedPosts = () => {
  return (
    <div className="w-main-container m-auto ">
      <Heading
        as="h2"
        color={HEADING_OPTIONS.COLOR.PRIMARY}
        className="mb-12 text-center"
      >
        Get Everyday Updates
      </Heading>
      <div className="bg-c400 w-1/3 p-6">
        <Heading
          as="h4"
          fontSize={HEADING_OPTIONS.FONT_SIZES.XSMALL}
          hasLineHeight={false}
        >
          Meet Inclusive Front-End Design Patterns A New Smashing Book
        </Heading>
        <img
          src="https://picsum.photos/500/400"
          alt="Post update"
          className="rounded-md my-8"
        />
        <div>
          <figure className="flex items-center ">
            <img
              src="https://picsum.photos/300/200"
              alt="Profile"
              className="w-10 h-10 inline rounded-full mr-4"
            />
            <figcaption className="inline">Eslam Hesham</figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};
