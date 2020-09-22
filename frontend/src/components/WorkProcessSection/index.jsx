import React from 'react';
import { Heading, HEADING_OPTIONS } from '../shared/heading';
import { useState, useEffect } from 'react';
import { API } from '../../modules/apis';
import './style.css';

const WorkProcess = () => {
  const [workProcessData, setData] = useState();
  useEffect(() => {
    API('workProcess').then(({ data }) => setData(data));
  }, []);

  if (workProcessData) {
    const { title, circleItem } = workProcessData;

    return (
      <section className="border-4 border-c1000 lg:pt-24 pt-16 lg:pb-32 pb-8 bg-c400 lg:rounded-tl-md lg:mt-24 mx-auto">
        <div className="container relative">
          <Heading
            as="h1"
            fontSize={HEADING_OPTIONS.FONT_SIZES.MEDIUM}
            color={HEADING_OPTIONS.COLOR.PRIMARY}
            className="text-center mb-16"
          >
            {title}
          </Heading>
          <div className=" grid  lg:grid-cols-4 sm:grid-cols-2  grid-cols-1 items-center justify-center ">
            {circleItem.map(item => {
              const { icon, title, id } = item;
              return (
                <div className="relative z-50 mx-auto lg:mb-0 mb-12" key={id}>
                  <div className="mx-auto circle__container flex justify-center items-center h-40 w-40  rounded-full parent-circle bg-white hover:bg-c100">
                    <div className="p-8 border border-dashed rounded-full border-c100 child-circle">
                      <img src={icon} alt="" />
                    </div>
                  </div>
                  <Heading
                    fontSize={HEADING_OPTIONS.FONT_SIZES.XSMALL}
                    color={HEADING_OPTIONS.COLOR.PRIMARY}
                    className="text-center lg:mt-10 mt-4 w-full font-regular"
                  >
                    {title}
                  </Heading>
                </div>
              );
            })}
          </div>
          <div
            style={{ top: '55%', left: '10%' }}
            className="h-2 w-4/5 lg:block hidden absolute z-0 bg-c100 opacity-25"
          ></div>
        </div>
      </section>
    );
  } else {
    return <div>Fetching..</div>;
  }
};

export default WorkProcess;
