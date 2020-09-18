import React from 'react';
import { Button } from '../shared/button';
import { useEffect, useState } from 'react';
import { Heading, HEADING_OPTIONS } from '../shared/heading/index';
import { API } from '../../modules/apis';

const EstimateSection = () => {
  const [estimatesection, setData] = useState();

  useEffect(() => {
    API('/estimatesection').then(({ data }) => {
      setData(data);
    });
  }, []);

  if (estimatesection) {
    const { title, subTitle, button } = estimatesection;
    return (
      <section
        className="py-32 text-c200"
        style={{
          backgroundImage: 'url(https://i.imgur.com/lSvq0BZ.png)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '92% 95%',
          backgroundPosition: '170px 0'
        }}
      >
        <div className="container">
          <span className="text-lg">{title}</span>
          <Heading className="my-5">{subTitle}</Heading>
          <Button
            bgColor="c100"
            rounded={true}
            customClassNames="my-4 block w-56 h-16"
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
