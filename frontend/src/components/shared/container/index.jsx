import React from 'react';
import cn from 'classnames';

export const CONTAINER_OPTIONS = {
  PADDING: {
    ZERO: false, // no padding at all
    DEFAULT: 'default', // default padding == 2rem
    SMALL: 'small', // for footer section
    BIG: 'big', // big padding == 8rem,
    MOB_PADDING: 'mobile_padding'
  },
  MARGIN: {
    ZERO: false,
    TOW_SIDES: 'tow-sides',
    TOP: 'top',
    BOTTOM: 'bottom'
  }
};

export const Container = ({
  children,
  padding,
  margin,
  isBgGray,
  className,
  inlineStyle,
  widthOutContainerDiv
}) => {
  return (
    <section
      style={inlineStyle}
      className={cn(
        {
          'py-0': padding === CONTAINER_OPTIONS.PADDING.ZERO,
          'py-8': padding === CONTAINER_OPTIONS.PADDING.DEFAULT,
          'py-6': padding === CONTAINER_OPTIONS.PADDING.SMALL,
          'py-32': padding === CONTAINER_OPTIONS.PADDING.BIG,
          'py-10 lg:py-0': padding === CONTAINER_OPTIONS.PADDING.MOB_PADDING,
          'my-0': margin === CONTAINER_OPTIONS.MARGIN.ZERO,
          'my-24': margin === CONTAINER_OPTIONS.MARGIN.TOW_SIDES,
          'mt-12': margin === CONTAINER_OPTIONS.MARGIN.TOP,
          'mb-12': margin === CONTAINER_OPTIONS.MARGIN.BOTTOM,
          'bg-c400': isBgGray
        },
        className
      )}
    >
      <div className={cn(
        {"container mx-auto" : !widthOutContainerDiv}
      )}>{children}</div>
    </section>
  );
};
