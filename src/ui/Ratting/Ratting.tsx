import React, { FC, memo } from 'react';

import styles from './Ratting.module.scss';

import { MAX_RATTING } from '@/constants/ratting';
import { calculateRatting } from '@/utils/numerals';

interface RattingProps {
  ratting: number;
  maxRatting?: number;
}

const Ratting: FC<RattingProps> = memo(({ ratting, maxRatting = MAX_RATTING }) => {
  const stars = Array(10)
    .fill('')
    .map((_, index) => ({
      id: index + 1,
      fill:
        ratting >= maxRatting ? 100 : calculateRatting(ratting, maxRatting, index + 1),
    }));

  console.log(stars);

  return (
    <div className={styles.container}>
      {stars.map((s, i) => (
        <button className={styles.star} key={`${s.id}_${i + 1}`} />
      ))}
    </div>
  );
});

export default Ratting;
