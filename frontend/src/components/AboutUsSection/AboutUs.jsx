import React from 'react';
import { Button } from '../shared/button';
import ProgressBar from '../ProgressBar/ProgressBar';
import { useEffect, useState } from 'react';
import { API } from '../../modules/apis';

const AboutUs = () => {
  const [sectionData, setSectionData] = useState();

  useEffect(() => {
    API('/aboutUs').then(({ data }) => {
      setSectionData(data);
    });
  }, []);

  if (sectionData) {
    const {
      title,
      paragraph,
      leftSectionImg,
      btnLabel,
      progressbars
    } = sectionData;

    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 items-start container">
        <div
          className="h-full flex"
          style={{
            backgroundImage: `url(${leftSectionImg})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%'
          }}
        >
          <Button
            bgColor="c100"
            rounded={true}
            customClassNames="my-4 w-56 h-16 self-end mx-auto mb-24"
          >
            {btnLabel}
          </Button>
        </div>
        <div>
          <h6
            className="text-xxlg text-c200 mt-1"
            style={{ fontFamily: 'PT serif' }}
          >
            {title}
          </h6>
          <p className="mt-8 leading-7 text-c300">{paragraph}</p>
          {progressbars.map(item => {
            const { bgcolor, progress, label, icon, id } = item;
            return (
              <ProgressBar
                icon={icon}
                key={id}
                bgcolor={bgcolor}
                progress={progress}
                label={label}
              />
            );
          })}
        </div>
      </div>
    );
  } else {
    return <div>Fetching..</div>;
  }
};

export default AboutUs;
