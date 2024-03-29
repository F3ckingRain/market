import React, { FC } from 'react';

interface StartProps {
  fill: number;
  id: number;
}

const Star: FC<StartProps> = ({ fill, id }) => {
  const identify = `MyGradient_${id}`;

  return (
    <svg
      height="100%"
      width="100%"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 53.867 53.867"
      xmlSpace="preserve"
    >
      <defs>
        <linearGradient id={identify}>
          <stop
            offset={`${fill}%`}
            stopColor="#eeb200
         "
          />
          <stop offset={`${100 - fill}%`} stopColor="#fff" />
        </linearGradient>
      </defs>
      <polygon
        fill={!!fill ? `url(#${identify})` : '#fff'}
        stroke={'#eeb200'}
        strokeWidth={2}
        points="26.934,1.318 35.256,18.182 53.867,20.887 40.4,34.013 43.579,52.549 26.934,43.798
	10.288,52.549 13.467,34.013 0,20.887 18.611,18.182 "
      />
    </svg>
  );
};

export default Star;
