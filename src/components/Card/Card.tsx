import React, { useCallback } from 'react';

import styles from './Card.module.scss';

import { useNavigateWithUtm } from '@/hooks/useNavigateWithUtm';
import useThemeState from '@/store/recoil/themeState/themeState';
import { CardItemType } from '@/types/card';

interface CardProps extends CardItemType {
  isFavorite: boolean;
}

function Card({
  image,
  price,
  lastPrice,
  inStock,
  split,
  title,
  id,
  delivery,
  isFavorite,
}: CardProps) {
  const navigate = useNavigateWithUtm();

  const [theme] = useThemeState();

  const navigateHandler = useCallback(() => {
    navigate(`product/id=${id}`);
  }, []);

  return (
    <div
      className={`${styles.card} ${styles[`card__${theme}`]}`}
      onClick={navigateHandler}
      aria-hidden
    >
      <div className={styles.card__img} style={{ backgroundImage: `url(${image})` }} />

      <div className={styles.content}>
        <div className={styles.content__price}>
          <div className={styles.price}>
            {!!lastPrice ? (
              <div>
                <h3 className={`${styles.price__title} ${styles.price__hot}`}>
                  {price} P
                </h3>

                <span className={styles.price__lastTitle}>{lastPrice} P</span>
              </div>
            ) : (
              <h3 className={styles.price__title}>{price} P</h3>
            )}
          </div>
          {!!split && (
            <div className={styles.split}>
              <span>{`${split.payment} x ${split.count}`}</span>

              <p>в сплит</p>
            </div>
          )}
        </div>

        <span className={styles.content__name}>{title}</span>

        <div className={styles.content__delivery}>
          {inStock && <p>сейчас</p>} <p>{delivery.default}</p> <p>{delivery.fast}</p>
        </div>
      </div>

      <button
        className={
          isFavorite
            ? `${styles.btnFavorite} ${styles.btnFavorite__active}`
            : styles.btnFavorite
        }
      />
    </div>
  );
}

export default Card;
