import React from 'react';
import { Button } from '../shared/button';
import ProgressBar from '../ProgressBar/ProgressBar';

const AboutUs = () => {
  const progressBarData = [
    { bgcolor: '#f9320c', completed: 60, label: 'Development' },
    { bgcolor: '#7a8baa', completed: 30, label: 'UI/UX Design' },
    { bgcolor: '#ed3ce3', completed: 53, label: 'Digital Marketing' },
    { bgcolor: '#74fa5e', completed: 73, label: 'Graphic Design' }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-start container">
      <div
        className="h-full flex"
        style={{
          backgroundImage: 'url(https://i.imgur.com/nALr0iT.png)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%'
        }}
      >
        <Button
          bgColor="c100"
          rounded={true}
          customClassNames="my-4 w-56 h-16 self-end mx-auto mb-24"
        >
          get in touch
        </Button>
      </div>
      <div>
        <h6
          className="text-xxlg text-c200 mt-1"
          style={{ fontFamily: 'PT serif' }}
        >
          Read About My Life Story
        </h6>
        <p className="mt-8 leading-7 text-c300">
          Donec commodo augue vitae metus interdum molestie. Fusce dapibus non
          mauris sit amet blandit. Maecenas quis massa nec sem laoreet vehicula
          quis sit amet tortor. Proin ornare, lorem ut pellentesque maximus, ex
          leo viverra lorem, ac dapibus neque tellus id dolor. Curabitur luctus
          tortor eget dolor ultrices fermentum.
        </p>
        {progressBarData.map(item => {
          const { bgcolor, completed, label } = item;
          return (
            <ProgressBar
              key={completed}
              bgcolor={bgcolor}
              completed={completed}
              label={label}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AboutUs;
