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
      <section className="border-4 border-c1000 py-32 bg-c400 my-64">
        <Heading
          as="h1"
          fontSize={HEADING_OPTIONS.FONT_SIZES.MEDIUM}
          color={HEADING_OPTIONS.COLOR.PRIMARY}
          className="text-center mb-16"
        >
          {title}
        </Heading>

        <div className="container grid grid-cols-4 items-center justify-center ">
          {circleItem.map(item => {
            const { icon, title, id } = item;
            return (
              <div className="relative z-50 mx-auto" key={id}>
                <div className="mx-auto circle__container flex justify-center items-center h-40 w-40 rounded-full bg-c400 hover:bg-c100">
                  <div className="p-10 h-32 w-32 border border-dashed rounded-full border-c100 hover:border-c400">
                    <img src={icon} alt="" />
                  </div>
                </div>
                <Heading
                  fontSize={HEADING_OPTIONS.FONT_SIZES.XSMALL}
                  color={HEADING_OPTIONS.COLOR.PRIMARY}
                  className="text-center mt-10 w-full font-regular"
                >
                  {title}
                </Heading>
              </div>
            );
          })}
          <div className="h-2 w-2/5 absolute z-0 bg-c900 row-start-1 ml-40 mt-20"></div>
        </div>
      </section>
    );
  } else {
    return <div>Fetching..</div>;
  }
};

export default WorkProcess;