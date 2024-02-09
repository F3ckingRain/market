import React, { FC, memo } from 'react';

interface FavoriteSvgProps {
  favorite: boolean;
}

const Favorite: FC<FavoriteSvgProps> = memo(({ favorite }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      stroke="#8d8d9a"
      strokeWidth={favorite ? 0 : 1}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ fill: favorite ? '#389d9f' : 'none', transition: 'all .5s ease-in-out' }}
    >
      <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
    </svg>
  );
});

export default Favorite;
