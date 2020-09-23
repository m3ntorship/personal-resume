import React, { useState, useEffect } from 'react';
import Card from './Card';
import { API } from '../../modules/apis';
import { Heading } from '../shared/heading/index';
import { Container, CONTAINER_OPTIONS } from '../shared/container';

const BestExpertiseSection = () => {
  const [services, setServices] = useState(null);
  useEffect(() => {
    API('/services').then(({ data }) => {
      setServices(data);
    });
  }, []);
  if (services) {
    const cards = services.cards.map(({ title, details, button, id }) => {
      return <Card title={title} details={details} button={button} key={id} />;
    });
    const styling = {
      marginTop: '6.125rem'
    };
    return (
      <Container
        classNames="text-center"
        margin={CONTAINER_OPTIONS.MARGIN.TOP}
        inlineStyle={styling}
      >
        <Heading as="h2" className="mb-10">
          {services.title}
        </Heading>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8">
          {cards}
        </div>
      </Container>
    );
  } else {
    return <div>Cannot get data from server</div>;
  }
};

export default BestExpertiseSection;
