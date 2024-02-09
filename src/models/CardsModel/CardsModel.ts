import { useCallback, useMemo } from 'react';

import { Categories } from '@/store/recoil/cardsState';
import useCardsState from '@/store/recoil/cardsState/cardsState';

const CardsModel = () => {
  const [state, setState] = useCardsState();

  const sortByPrice = useCallback((key: Categories, direction: 'low' | 'high') => {
    if (direction === 'high') {
      return setState(prev => ({
        ...prev,
        [key]: prev[key].toSorted((a, b) => b.price - a.price),
      }));
    }

    return setState(prev => ({
      ...prev,
      [key]: prev[key].toSorted((a, b) => a.price - b.price),
    }));
  }, []);

  const result = useMemo(() => ({ cardsState: state, sortByPrice }), [state]);

  return { ...result };
};

export default CardsModel;
