import React, { useCallback } from 'react';

import styles from './Card.module.scss';

import { useNavigateWithUtm } from '@/hooks/useNavigateWithUtm';
import useThemeState from '@/store/recoil/configState/configState';
import Favorite from '@/svg/Favorite';
import { CardItemType } from '@/types/card';
import { getPriceTitle } from '@/utils/numerals';

interface CardProps extends CardItemType {
  isFavorite: boolean;
  setIsFavorite: (id: number) => void;
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
  setIsFavorite,
}: CardProps) {
  const navigate = useNavigateWithUtm();

  const [{ theme }] = useThemeState();

  const navigateHandler = useCallback(() => {
    navigate(`product/id=${id}`);
  }, []);

  const addFavoriteHandler = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();

      setIsFavorite(id);
    },
    [setIsFavorite, id],
  );

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
              <>
                <h3 className={`${styles.price__title} ${styles.price__hot}`}>
                  {getPriceTitle(price)}
                </h3>

                <span className={styles.price__lastPrice}>
                  {getPriceTitle(lastPrice)}
                </span>
              </>
            ) : (
              <h3 className={styles.price__title}>{getPriceTitle(price)}</h3>
            )}
          </div>
          {!!split && (
            <div className={styles.split}>
              <span
                className={styles.split__price}
              >{`${getPriceTitle(split.payment)} x ${split.count}`}</span>

              <p className={styles.split__description}>в сплит</p>
            </div>
          )}
        </div>

        <span className={styles.content__name}>{title}</span>

        <div className={styles.content__delivery}>
          {inStock && <p className={styles.delivery__now}>сейчас</p>}{' '}
          <p className={styles.delivery__default}>{delivery.default} дней</p>{' '}
          <p className={styles.delivery__fast}>{delivery.fast} дней</p>
        </div>
      </div>

      <button className={styles.btnFavorite} onClick={addFavoriteHandler} type={'button'}>
        <Favorite favorite={isFavorite} />
      </button>
    </div>
  );
}

export default Card;
