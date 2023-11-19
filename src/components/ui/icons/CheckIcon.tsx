import React, { FC } from 'react';

type SettingsIconProps = {
  height?: string;
  width?: string;
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
        d="M24,0.378C10.953,0.378,0.378,10.953,0.378,24c0,13.044,10.575,23.622,23.622,23.622c13.048,0,23.622-10.578,23.622-23.622
	C47.622,10.953,37.048,0.378,24,0.378z M3.767,24c0-11.173,9.06-20.233,20.233-20.233c11.174,0,20.233,9.06,20.233,20.233
	c0,11.174-9.06,20.232-20.233,20.232C12.827,44.232,3.767,35.174,3.767,24z M36.563,14.826c0.748-1.052,0.495-2.512-0.564-3.257
	c-1.052-0.742-2.512-0.487-3.254,0.568L19.556,30.88l-5.434-5.538c-0.905-0.924-2.386-0.938-3.309-0.032
	c-0.919,0.909-0.933,2.39-0.027,3.309l7.401,7.53c0.484,0.499,1.167,0.752,1.857,0.697c0.693-0.056,1.324-0.418,1.721-0.986
	L36.563,14.826z"
      />
    </svg>
  );
};

export default SettingsIcon;
