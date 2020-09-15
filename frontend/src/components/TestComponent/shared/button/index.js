import React, { Children } from 'react';
import './style.css';
import cn from 'classnames';

// Header Buttons (W:230, H:65)
// about Buttons (W:220, H:65)

export const Button = ({ Children, customClassNames, rounded, bgColor }) => {
  return (
    <button
      className={cn(
        'my-10 mx-auto uppercase bg-transparent text-gray-800 border-solid border-4 border-red-200 custom_styles',
        { 'rounded-full': rounded },
        { ['border-none text-red-100 bg__' + bgColor]: bgColor },
        customClassNames
      )}
    >
      {Children}
    </button>
  );
};
