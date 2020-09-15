import React from 'react';
import {Button} from '../shared/button'

export const TestComponent = () => {
  return (
    <div className="text-center my-10">
      <h1> Shared Components Prototype </h1>
      <div>
        <h3> Buttons </h3>
        <Button rounded={true} customClassNames='mt-20 block w-64 h-20 font-medium' bgColor="c100">Download My CV</Button>
        <Button rounded={true} customClassNames='mt-10 block w-48 h-12'>Hello Two</Button>
        <Button rounded={true} customClassNames='mt-15 block w-56 h-16' bgColor="c200">Hello Three</Button>
      </div>
    </div>
  )
};
