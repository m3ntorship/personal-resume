import React, { useState, useEffect } from 'react';
import { API } from '../../modules/apis';
import { Button } from '../shared/button/index';
import { Heading } from '../shared/heading/index';
import { Container, CONTAINER_OPTIONS } from '../shared/container/index';

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
        <li
          key={item.id}
          className="uppercase mr-4 p-1 text-sm font-medium text-c300 hover:text-c100 flex-shrink"
        >
          <a href={item.itemUrl}> {item.title}</a>
        </li>
      );
    });
    const images = works.imagesURL.map(image => {
      return <li key={image.id}>{<img src={image.url} alt={image} />}</li>;
    });
    return (
      // <section
      //   className="m-auto sm:container md:w-11/12 container mt-35 text-center"
      //   style={{ marginTop: '5.3125rem' }}
      // >
      <Container padding={CONTAINER_OPTIONS.PADDING.BIG} margin={CONTAINER_OPTIONS.MARGIN.TOW_SIDES} className="text-center">
        <Heading as="h2" className="mb-10">
          {works.title}
        </Heading>
        <ul className="flex  justify-center items-center  flex-wrap mb-10">
          {listItems}
        </ul>
        <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3  grid-cols-2  gap-2 sm:gap-2 md:gap-4 lg:gap-8">
          {images}
        </ul>
        <Button
          rounded={true}
          bgColor="c100"
          customClassNames="mt-16 py-4 px-10"
        >
          <a href={works.button.url}>{works.button.title}</a>
        </Button>
      </Container>
    );
  } else {
    return <div>Cannot load data from api ...</div>;
  }
};

export default Gallery;
