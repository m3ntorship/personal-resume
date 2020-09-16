import React from 'react';
import { Button } from '../shared/button';
import ProgressBar from '../ProgressBar/ProgressBar';
import './style.css';

function AboutUs() {
  const progressBarData = [
    { bgcolor: '#f9320c', completed: 60, label: 'Development' },
    { bgcolor: '#7a8baa', completed: 30, label: 'UI/UX Design' },
    { bgcolor: '#ed3ce3', completed: 53, label: 'Digital Marketing' },
    { bgcolor: '#74fa5e', completed: 73, label: 'Graphic Design' }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-start container">
      <div className="relative">
        <img
          className="h-full object-cover"
          src="https://i.imgur.com/nALr0iT.png"
          alt=""
        />

        <Button
          bgColor="c100"
          rounded={true}
          customClassNames="my-4 block w-56 h-16 absolute button__position"
        >
          GET IN TOUCH
        </Button>
      </div>
      <div>
        <h6 className="text-xxlg text-c200 mt-1">Read About My Life Story</h6>
        <p className="mt-8 leading-7 text-c300">
          Donec commodo augue vitae metus interdum molestie. Fusce dapibus non
          mauris sit amet blandit. Maecenas quis massa nec sem laoreet vehicula
          quis sit amet tortor. Proin ornare, lorem ut pellentesque maximus, ex
          leo viverra lorem, ac dapibus neque tellus id dolor. Curabitur luctus
          tortor eget dolor ultrices fermentum.
        </p>
        {progressBarData.map((item, idx) => (
          <ProgressBar
            key={idx}
            bgcolor={item.bgcolor}
            completed={item.completed}
            label={item.label}
          />
        ))}
      </div>
    </div>
  );
}

export default AboutUs;
