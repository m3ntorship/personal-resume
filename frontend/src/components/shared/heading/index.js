import React from 'react';
import cn from 'classnames';

export const HEADING_OPTIONS = {
  FONT_SIZES: {
    XSMALL: 'xsmall', //1.5rem = 24px
    SMALL: 'small', //1.875rem = 30px
    MEDIUM: 'medium', //3.125rem = 50px
    LARGE: 'large' //6.25rem = 100px
  },
  COLOR: {
    PRIMARY: 'primary',
    SECONDARY: 'secondary'
  }
};

export const Heading = ({
  children,
  className,
  fontSize = 'medium',
  color = 'primary',
  hasLineHeight,
  as = 'p'
}) => {
  const classes = cn(
    'font-bold font-headings',
    {
      'text-md': fontSize === HEADING_OPTIONS.FONT_SIZES.XSMALL,
      'text-lg': fontSize === HEADING_OPTIONS.FONT_SIZES.SMALL,
      'text-xlg sm:text-xxlg': fontSize === HEADING_OPTIONS.FONT_SIZES.MEDIUM,
      'text-xxlg': fontSize === HEADING_OPTIONS.FONT_SIZES.LARGE,
      'text-c200': color === HEADING_OPTIONS.COLOR.PRIMARY,
      'text-c100': color === HEADING_OPTIONS.COLOR.SECONDARY,
      'leading-3': hasLineHeight
    },
    className
  );

  return <>{React.createElement(as, { className: classes }, children)}</>;
};
