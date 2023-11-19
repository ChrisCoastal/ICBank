import React, { FC } from 'react';

import paths from '@/components/ui/icons/paths'

type BackArrowIconProps = {
  path: keyof typeof paths;
  height?: string;
  width?: string;
  fill?: string;
  className?: string;
};

const BackArrowIcon: FC<BackArrowIconProps> = ({
  height = 24,
  width = 24,
  fill = '#333',
  className,
}) => {

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      width={width}
      viewBox="0 0 48 48"
      fill={fill}
      className={`svg ${className}`}
      shapeRendering="geometricPrecision"
    >
      paths[path]
    </svg>
  );
};

export default BackArrowIcon;
