import React, { FC } from 'react';

type BackArrowIconProps = {
  height?: string;
  width?: string;
  color?: string;
  className?: string;
};

const BackArrowIcon: FC<BackArrowIconProps> = ({
  height = 24,
  width = 24,
  color = '#fff',
  className,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      width={width}
      viewBox="0 0 48 48"
      fill={color}
      className={`svg ${className}`}
      shapeRendering="geometricPrecision"
    >
      <path d="M13.105,27.223l15.491,15.49L24,47.239L0.761,24L24,0.761l4.596,4.526l-15.491,15.49h34.134v6.446H13.105z" />
    </svg>
  );
};

export default BackArrowIcon;
