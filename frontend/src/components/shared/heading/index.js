import React from 'react';
import cn from 'classnames';

export const Heading = ({
  children,
  customClassNames,
  fontSize,
  largeLineHeight
}) => {
  return (
    <p
      className={cn(
        'font-headings font-bold custom_styles',
        {
          ['text-' + color]: color,
          ['text-lg']: fontSize === 'xsmall', //xsmall = 1.5rem
          ['text-xlg']: fontSize === 'small', //small = 1.875rem
          ['text-xxlg']: fontSize === 'medium', //medium = 3.125rem
          ['text-xxxlg']: fontSize === 'large', //large = 6.25rem
          ['leading-3']: largeLineHeight  //lineHeight = 4.375rem
        },
        customClassNames
      )}
    >
      {children}
    </p>
  );
};
