import React from 'react';
import {Button} from '../shared/button'
import {Heading, HEADING_OPTIONS} from '../shared/heading'


export const Prototype = () => {
  return (
    <div className="m-10">
      <h1> Shared Components Prototype </h1>

      <div>
        <Heading as='h1' fontSize={HEADING_OPTIONS.FONT_SIZES.LARGE}>Large - Black</Heading>
        <Heading as='h2' color={HEADING_OPTIONS.COLOR.SECONDARY}>Medium - Red</Heading>
        <Heading as='h3' fontSize={HEADING_OPTIONS.FONT_SIZES.SMALL} hasLineHeight={true} className='font-regular'>Small - Black - hasLineHeight</Heading>
        <Heading as='h4' fontSize={HEADING_OPTIONS.FONT_SIZES.XSMALL} hasLineHeight={true}>xSmall - Black - hasLineHeight</Heading>
      </div>
      
      <div>
        <h3 className='text-xlg'> Buttons </h3>
        <Button rounded={true} customClassNames='my-4 block w-64 h-20 font-medium' bgColor="c100">Large</Button>
        <Button rounded={true} customClassNames='my-4 block w-56 h-16' bgColor="c200">medium</Button>
        <Button rounded={true} customClassNames='my-4 block w-48 h-12'>small</Button>
      </div>
      <hr/>
      <div>
        <h3 className='text-xlg'>colors</h3>
        <ul>
          <li className='text-lg text-c100'> c100 </li>
          <li className='text-lg text-c200'> c200 </li>
          <li className='text-lg text-c300'> c300 </li>
          <li className='text-lg text-c400'> c400 </li>
          <li className='text-lg text-c600'> c600 </li>
          <li className='text-lg text-c700'> c700 </li>
          <li className='text-lg text-c800'> c800 </li>
        </ul>
      </div>
      <hr/>
      <div>
        <h3 className='text-xlg'>Font Size</h3>
        <p className='text-xxlg'> xxlg == 3.125rem </p>
        <p className='text-xlg'> xlg == 1.875rem </p>
        <p className='text-lg'> lg == 1.5rem </p>
        <p className='text-md'> md == 1.125rem </p>
        <p className='text-base'> base == 1rem </p>
        <p className='text-sm'> sm == 0.875rem </p>
      </div>
    </div>
  )
};
