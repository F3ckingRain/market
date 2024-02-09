import React from 'react';

import styles from './CardContainer.module.scss';

import Card from '@/components/Card/Card';
import CartModel from '@/models/CartModel/CartModel';
import { CardItemType } from '@/types/card';

interface CardContainerProps {
  title: string;
  cards: CardItemType[];
  subtitle?: string;
}
function CardContainer({ title, cards, subtitle }: CardContainerProps) {
  const { checkIsFavorite } = CartModel();

  return (
    <div className={styles.cardContainer}>
      <h2 className={styles.cardContainer__title}>{title}</h2>
      {subtitle && <p className={styles.cardContainer__subtitle}>{subtitle}</p>}

      <div className={styles.grid}>
        {cards.map((el, index) => (
          <Card
            {...el}
            isFavorite={checkIsFavorite(el.id)}
            key={`${el.id}_${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default CardContainer;
