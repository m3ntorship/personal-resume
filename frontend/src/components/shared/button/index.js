import React from 'react';
import cn from 'classnames';

export const Button = ({ children, customClassNames, rounded, bgColor }) => {
  return (
    <button
      className={cn(
        'uppercase text-sm font-regular text-c200 bg-transparent border-solid border-4 border-c100 border-opacity-25 custom_styles',
        { 'rounded-full': rounded },
        { ['border-none text-white bg-' + bgColor]: bgColor },
        customClassNames
      )}
    >
      {children}
    </button>
  );
};

export const Heading = ({
  children,
  customClassNames,
  red,
  black,
  small,
  medium,
  large,
  lineHeight
}) => {
  return (
    <p
      className={cn(
        'font-headings font-bold',
        { 'text-c200': black },
        { 'text-c100': red },
        { 'text-xlg': small },
        { 'text-xxlg': medium },
        { 'text-xxxlg': large },
        { 'leading-3': lineHeight },
        customClassNames
      )}
    >
      {children}
    </p>
  );
};
