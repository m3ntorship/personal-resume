import React from 'react';

const ProgressBar = props => {
  const { bgcolor, completed, label, icon } = props;

  const containerStyles = {
    height: 8,
    width: '100%',
    backgroundColor: '#e0e0de',
    borderRadius: 50
  };

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'right'
  };

  return (
    <div className="flex flex-col justify-center my-10">
      <div className="flex justify-between mb-1">
        <h6 className="text-base flex">
          <img className="w-4 mr-1" src={icon} alt="" />

          {label}
        </h6>
        <p className="text-c200">{`${completed}%`}</p>
      </div>
      <div style={containerStyles}>
        <div style={fillerStyles}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
