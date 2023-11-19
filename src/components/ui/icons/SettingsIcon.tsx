import React, { FC } from 'react';

type SettingsIconProps = {
  height: string;
  width: string;
  color?: string;
  className?: string;
};

const SettingsIcon: FC<SettingsIconProps> = ({
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
      <path
        d="M19.13,47.5l-0.943-7.553c-0.836-0.25-1.734-0.647-2.708-1.184c-0.969-0.54-1.79-1.116-2.468-1.733l-6.966,2.963
	l-4.871-8.486l6.018-4.539c-0.077-0.472-0.138-0.958-0.189-1.458c-0.051-0.5-0.076-0.987-0.076-1.459c0-0.438,0.025-0.9,0.076-1.384
	c0.051-0.482,0.112-1.028,0.189-1.635l-6.018-4.539l4.871-8.384l6.916,2.912c0.78-0.65,1.622-1.237,2.529-1.759
	c0.908-0.521,1.79-0.923,2.647-1.209L19.13,0.5h9.74l0.943,7.604c1.005,0.349,1.887,0.754,2.657,1.208
	c0.765,0.454,1.555,1.025,2.371,1.708l7.114-2.912l4.87,8.384l-6.222,4.689c0.143,0.538,0.225,1.033,0.245,1.484
	c0.015,0.451,0.021,0.895,0.021,1.333c0,0.405-0.016,0.831-0.046,1.282c-0.036,0.452-0.112,0.997-0.235,1.635l6.125,4.59
	l-4.875,8.486l-6.997-3.014c-0.816,0.683-1.632,1.27-2.458,1.759c-0.821,0.49-1.678,0.872-2.57,1.158L28.87,47.5H19.13z
	 M23.93,30.527c1.82,0,3.364-0.632,4.629-1.896S30.456,25.82,30.456,24c0-1.821-0.633-3.366-1.897-4.631
	c-1.265-1.265-2.809-1.897-4.629-1.897c-1.831,0-3.376,0.632-4.636,1.897c-1.26,1.265-1.892,2.81-1.892,4.631
	c0,1.82,0.632,3.366,1.892,4.631C20.553,29.896,22.099,30.527,23.93,30.527z"
      />{' '}
    </svg>
  );
};

export default SettingsIcon;
