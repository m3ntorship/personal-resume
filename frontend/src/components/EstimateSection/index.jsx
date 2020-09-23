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

  if (estimatesection) {
    const { desktopImage, title, subTitle, button } = estimatesection;
    const backImg = {
      backgroundImage: `url(${desktopImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'right',
      height: 'auto',
      width: '100%',
      marginTop: '8.125rem'
    };
    return (
      <Container
        padding={CONTAINER_OPTIONS.PADDING.BIG}
        margin={CONTAINER_OPTIONS.MARGIN.TOW_SIDES}
        inlineStyle={backImg}
        className="relative"
      >
        <div className="absolute z-10 inset-0" style={{background: "#eee", opacity: ".5"}}></div>
        <div className="lg:text-left z-20 relative text-center h-auto text-c200">
          <span className="text-lg">{title}</span>
          <Heading as="h6" className="my-5">
            {subTitle}
          </Heading>
          <Button
            bgColor="c100"
            rounded={true}
            customClassNames="lg:my-4 my-0 block w-56 h-16 lg:mx-0 mx-auto"
          >
            {button.label}
          </Button>
        </div>
      </Container>
    );
  } else {
    return <div>Fetching..</div>;
  }
};

export default EstimateSection;
