import React from 'react';
import {Button} from './shared/button'

export const TestComponent = () => {
  return (
    <div className="text-center my-10">
      <h1> Shared Components Prototype </h1>
      <div>
        <h3> Buttons </h3>
        <Button Children='First One' rounded={true} customClassNames='mt-20 block' />
        <Button Children='Second One' rounded={true} customClassNames='mt-10 block' bgColor="red" />
        <Button Children='Third One' rounded={true} customClassNames='mt-15 block' bgColor="blue" />
      </div>
    </div>

  )
};
