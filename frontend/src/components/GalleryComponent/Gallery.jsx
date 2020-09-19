import React, { useState, useEffect } from 'react';
import { API } from '../../modules/apis';
import { Button } from '../shared/button/index';
import { Heading, HEADING_OPTIONS } from '../shared/heading/index';

const Gallery = () => {
  const [works, setWorks] = useState({});
  useEffect(() => {
    API('/RecentWorks').then(({ data }) => {
      setWorks(data);
    });
  }, []);
  if (works.listItems) {
    const listItems = works.listItems.map(item => {
      return (
        <li className="uppercase mr-8 text-sm font-medium text-c300 hover:text-c100">
          {item}
        </li>
      );
    });
    const images = works.imagesURL.map(image => {
      return (
        <li>
          <img src={image} alt={image} />
        </li>
      );
    });
    return (
      <section className="container text-center mt-35">
          <Heading as='h2' className="mb-10">{works.title}</Heading>
          <ul className="flex justify-center items-center mb-10 px">
            {listItems}
          </ul>
          <ul className="grid grid-cols-3 gap-8">{images}</ul>
          <Button rounded={true} bgColor="c100" customClassNames="my-12 py-4 px-10">more projects</Button>
      </section>
    );
  } else {
    return <div>Cannot load data from api ...</div>;
  }
};

export default Gallery;
