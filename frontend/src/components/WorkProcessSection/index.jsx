import React from 'react';
import './style.css';

const WorkProcess = () => {
  return (
    <div className="relative m-64">
      <div className="marker mfirst timeline-icon one bg-c200">
        <div className="marker__inner p-6 flex justify-center items-center">
          <img
            className="self-center mt-1 ml-2"
            src="https://i.imgur.com/7lxp07y.png"
            alt=""
          />
        </div>
      </div>
      <div id="timeline" className="h-2 bg-c100 relative timeline__1"></div>

      <div className="marker m2 timeline-icon two">
        <div className="marker__inner p-6 flex justify-center items-center">
          <img src="https://i.imgur.com/7lxp07y.png" alt="" />
        </div>
      </div>
      <div id="timeline" className="h-2 bg-c100 relative timeline__2"></div>

      <div className="marker m3 timeline-icon three">
        <div className="marker__inner p-6 flex justify-center items-center">
          <img src="https://i.imgur.com/7lxp07y.png" alt="" />
        </div>
      </div>
      <div id="timeline" className="h-2 bg-c100 relative timeline__3"></div>
      <div className="marker mlast timeline-icon four">
        <div className="marker__inner p-6 flex justify-center items-center">
          <img src="https://i.imgur.com/7lxp07y.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;
