import React, { useState, useEffect } from 'react';
import Card from './Card';
import { API } from '../../modules/apis';

const BestExpertiseSection = () => {
  const [services, setServices] = useState(null);
  useEffect(() => {
    API('/services').then(({ data }) => {
      setServices(data);
    });
  }, []);
  if (services) {
    const cards = services.cards.map(({ title, details, button }) => {
      return (
        <Card
          title={title}
          details={details}
          button={button}
          key={Math.random()}
        />
      );
    });
    return (
      <section className="container text-center">
        <h2 className="font-headings text-xxlg text-c200 my-10">
          {services.title}
        </h2>
        <div className="grid grid-cols-3 gap-8">{cards}</div>
      </section>
    );
  }else{
    return <div>Cannot get data from server</div>
  }
};

export default BestExpertiseSection;
