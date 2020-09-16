import React from 'react';
import {Button} from '../shared/button'

export const TestComponent = () => {
  return (
    <div className="text-center my-10">
      <h1> Shared Components Prototype </h1>
      <div>
        <h3> Buttons </h3>
        <Button rounded={true} customClassNames='w-48 h-12'>Hello Two</Button>
        <Button rounded={true} customClassNames='w-56 h-16' bgColor="c200">Hello Three</Button>
        <Button rounded={true} customClassNames='w-64 h-20 font-medium' bgColor="c100">Download My CV</Button>
      </div>
    </div>
  )
};
