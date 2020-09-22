import React from 'react';
import { Button } from '../shared/button';
import { useEffect, useState } from 'react';
import { Heading } from '../shared/heading/index';
import { API } from '../../modules/apis';

const EstimateSection = () => {
  const [estimatesection, setData] = useState();

  useEffect(() => {
    API('/estimatesection').then(({ data }) => {
      setData(data);
    });
  }, []);

  if (estimatesection) {
    const { desktopImage, title, subTitle, button } = estimatesection;
    return (
      <section
        className="py-32 h-auto text-c200 lg:text-left text-center"
        style={{
          backgroundImage: `url(${desktopImage})`,
          backgroundRepeat: 'no-repeat',
          height: 'auto',
          width: '100%',
          marginTop: '8.125rem'
        }}
      >
        <div className="container lg:text-left text-center">
          <span className="text-lg">{title}</span>
          <Heading as="h6" className="my-5">
            {subTitle}
          </Heading>
          <Button
            bgColor="c100"
            rounded={true}
            customClassNames="lg:my-4 my-0  block w-56 h-16 lg:mx-0 mx-auto "
          >
            {button.label}
          </Button>
        </div>
      </section>
    );
  } else {
    return <div>Fetching..</div>;
  }
};

export default EstimateSection;
