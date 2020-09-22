import React from 'react';
import { Button } from '../shared/button';
import { useEffect, useState } from 'react';
import { Heading } from '../shared/heading/index';
import { API } from '../../modules/apis';
import { Container, CONTAINER_OPTIONS } from '../shared/container';

const EstimateSection = () => {
  const [estimatesection, setData] = useState();

  useEffect(() => {
    API('/estimatesection').then(({ data }) => {
      setData(data);
    });
  }, []);
  const backImg = {
    backgroundImage: 'url(https://i.imgur.com/lSvq0BZ.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '92% 95%',
    backgroundPosition: '170px 0'
  };

  if (estimatesection) {
    const { title, subTitle, button } = estimatesection;
    return (
      <Container
        padding={CONTAINER_OPTIONS.PADDING.BIG}
        margin={CONTAINER_OPTIONS.MARGIN.TOW_SIDES}
        inlineStyle={backImg}
      >
        <span className="text-lg">{title}</span>
        <Heading as="h6" className="my-5">
          {subTitle}
        </Heading>
        <Button
          bgColor="c100"
          rounded={true}
          customClassNames="my-4 block w-56 h-16"
        >
          {button.label}
        </Button>
      </Container>
    );
  } else {
    return <div>Fetching..</div>;
  }
};

export default EstimateSection;
