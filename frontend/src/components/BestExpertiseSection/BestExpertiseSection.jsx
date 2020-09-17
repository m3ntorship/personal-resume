import React, {useState, useEffect} from 'react';
import Card from './Card';
import { API } from '../../modules/apis';


const BestExpertiseSection = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    API('/services').then(({ data: services }) => {
      setServices(services);
    });
  }, []);
  const cards = services.map(({title, details, button}) => {
    return <Card title={title} details={details} button={button} key={Math.random()}/>;
  });
  return (
    <section className="container text-center">
      <h2 className="font-headings text-xxlg text-c200 my-10">
        My Best Expertise
      </h2>
      <div className="flex flex-wrap">{cards}</div>
    </section>
  );
};

export default BestExpertiseSection;
