import React from 'react';
import Card from './Card/Card';

const BestExpertiseSection = () => {
  const dummyJSONData = [
    {
      title: 'Web Development',
      details:
        'Nam eu massa vel quam auctor congue. Suspendisse semper erat id tellus entum ultricies. Nulla neck producw in ultrices devel odio sodales.'
    },
    {
      title: 'Web Development',
      details:
        'Nam eu massa vel quam auctor congue. Suspendisse semper erat id tellus entum ultricies. Nulla neck producw in ultrices devel odio sodales.'
    },
    {
      title: 'Web Development',
      details:
        'Nam eu massa vel quam auctor congue. Suspendisse semper erat id tellus entum ultricies. Nulla neck producw in ultrices devel odio sodales.'
    },
    {
      title: 'Web Development',
      details:
        'Nam eu massa vel quam auctor congue. Suspendisse semper erat id tellus entum ultricies. Nulla neck producw in ultrices devel odio sodales.'
    },
    {
      title: 'Web Development',
      details:
        'Nam eu massa vel quam auctor congue. Suspendisse semper erat id tellus entum ultricies. Nulla neck producw in ultrices devel odio sodales.'
    },
    {
      title: 'Web Development',
      details:
        'Nam eu massa vel quam auctor congue. Suspendisse semper erat id tellus entum ultricies. Nulla neck producw in ultrices devel odio sodales.'
    }
  ];
  const cards = dummyJSONData.map(card => {
    return <Card title={card.title} details={card.details} />;
  });
  return (
    <section className="container text-center">
      <h1 className="font-headings text-xxlg text-c200 my-10">My Best Expertise</h1>
      <div className="flex flex-wrap">{cards}</div>
    </section>
  );
};

export default BestExpertiseSection;
