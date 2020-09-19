import React from 'react';
import { Heading, HEADING_OPTIONS } from '../shared/heading';
import { useState } from 'react';
import './style.css';

const WorkProcess = () => {
  const circleStyling = {
    width: '130px',
    height: '130px',
    lineHeight: '50px',
    fontSize: '1.4em',
    textAlign: 'center',
    borderRadius: '50%',
    backgroundColor: '#fff'
  };

  const circleOnHover = {
    backgroundColor: '#f9320c',
    transform: `scale(1.7)`,
    transition: 'all 300ms ease-in-out',
    borderRadius: '50%'
  };

  const innerCircle = {
    width: '90px',
    height: '90px',
    borderRadius: '50%',
    top: '20px',
    left: '20.5px',
    border: '1px dashed #f9320c'
  };

  const innerCircleHover = {
    border: '1px dashed #fff'
  };

  const [circleItem, setStyle] = useState(circleStyling);
  const [innerCircleItem, setInnerCirlce] = useState(innerCircle);

  return (
    <>
      <Heading
        as="h1"
        fontSize={HEADING_OPTIONS.FONT_SIZES.MEDIUM}
        color={HEADING_OPTIONS.COLOR.PRIMARY}
        className="text-center mb-16"
      >
        My Work Process
      </Heading>
      <div className="flex items-center justify-center">
        <div className="relative">
          <div
            className="bg-c100 flex justify-center items-center"
            style={circleItem}
            onMouseEnter={() => setStyle(circleOnHover)}
            onMouseLeave={() => setStyle(circleStyling)}
          >
            <div className="p-6" style={markerInner}>
              <img src="https://i.imgur.com/7lxp07y.png" alt="" />
            </div>
          </div>
          <h4 className="mt-10 absolute">Make Wireframe</h4>
        </div>
        <div className="w-32 h-2 bg-c100"></div>
        <div className="relative">
          <div className="marker bg-c100 flex justify-center items-center">
            <div className="marker__inner p-6">
              <img src="https://i.imgur.com/7lxp07y.png" alt="" />
            </div>
          </div>
          <h4 className="mt-10 absolute">Make Wireframe</h4>
        </div>
        <div className="w-32 h-2 bg-c100"></div>
        <div className="relative">
          <div className="marker bg-c100 flex justify-center items-center">
            <div className="marker__inner p-6">
              <img src="https://i.imgur.com/7lxp07y.png" alt="" />
            </div>
          </div>
          <h4 className="mt-10 absolute">Make Wireframe</h4>
        </div>
        <div className="w-32 h-2 bg-c100"></div>
        <div className="relative">
          <div className="marker bg-c100 flex justify-center items-center">
            <div className="marker__inner p-6">
              <img src="https://i.imgur.com/7lxp07y.png" alt="" />
            </div>
          </div>
          <h4 className="mt-10 absolute">Make Wireframe</h4>
        </div>
      </div>
    </>
  );
};

export default WorkProcess;
