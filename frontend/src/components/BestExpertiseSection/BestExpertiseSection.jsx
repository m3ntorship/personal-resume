import React, { useState, useEffect } from 'react';
import Card from './Card';
import { API } from '../../modules/apis';
import { Heading } from '../shared/heading/index';

const BestExpertiseSection = () => {
  const [services, setServices] = useState(null);
  useEffect(() => {
    API('/services').then(({ data }) => {
      setServices(data);
    });
  }, []);
  if (services) {
    const cards = services.cards.map(({ title, details, button, key }) => {
      return <Card title={title} details={details} button={button} key={key} />;
    });
    return (
      <section className="container text-center">
        <Heading as='h2' className='my-10'>{services.title}</Heading>
        <div className="grid grid-cols-3 gap-8">{cards}</div>
      </section>
    );
  } else {
    return <div>Cannot get data from server</div>;
  }
};

export default BestExpertiseSection;
