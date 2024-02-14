import React from 'react';

import { NavLink } from 'react-router-dom';

import styles from './CardOpen.module.scss';

import { CategoryType } from '@/types/card';
import Ratting from '@/ui/Ratting/Ratting';

interface CardOpenProps {
  title: string;
  image: string;
  categories: CategoryType[];
  ratting: number;
}

function CardOpen({ title, categories, image, ratting }: CardOpenProps) {
  return (
    <div className={styles.container}>
      <div className={styles.image} style={{ backgroundImage: `url(${image})` }}>
        <div className={styles.ratting}>
          <Ratting ratting={ratting} />
        </div>
      </div>

      <div className={styles.info}>
        <div className={styles.info__header}>
          <div className={styles.categories}>
            {categories.map((el, index) => (
              <NavLink
                to={`/category/${el.path}`}
                className={styles.category}
                key={`${el}_${index + 1}`}
              >
                {el.title}
              </NavLink>
            ))}
          </div>
          <h2>{title}</h2>
        </div>

        <div>d</div>

        <div></div>
      </div>
    </div>
  );
}

export default CardOpen;
