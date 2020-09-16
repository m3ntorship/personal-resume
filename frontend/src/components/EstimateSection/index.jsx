import React from 'react';
import { Button } from '../shared/button';
import './style.css';

const EstimateSection = () => {
  return (
    <div className="estimate__section_bg py-32">
      <div className="container">
        <span className="text-lg">Estimate your project!</span>
        <h6 className="text-xxlg my-12">Have Any Project On Mind</h6>
        <Button
          bgColor="c100"
          rounded={true}
          customClassNames="my-4 block w-56 h-16"
        >
          GET IN TOUCH
        </Button>
      </div>
    </div>
  );
};

export default EstimateSection;
