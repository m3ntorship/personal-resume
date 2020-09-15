import React from 'react';
import cn from 'classnames';

export const Button = ({ children, customClassNames, rounded, bgColor }) => {
  return (
    <button
      className={cn(
        'my-10 mx-auto uppercase text-sm font-regular text-c200 bg-transparent border-solid border-4 border-c100 border-opacity-25 custom_styles',
        { 'rounded-full': rounded },
        { ['border-none text-white bg-' + bgColor]: bgColor },
        customClassNames
      )}
    >
      {children}
    </button>
  );
};

// Buttons Widths and heights
