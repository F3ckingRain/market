import { CardItemType } from '@/types/card';

type Categories = 'mostPopular' | 'getToday';

const fullCardsList: CardItemType[] = [
  {
    id: 1,
    price: 12421,
    lastPrice: 14221,
    split: { payment: 6260, count: 2 },
    title: 'Nike',
    image: '',
    inStock: true,
    rating: 9199,
    delivery: { default: 25, fast: 10 },
  },

  {
    id: 2,
    price: 10000,
    split: { payment: 5000, count: 2 },
    title: 'Asics',
    image: '',
    inStock: true,
    rating: 222,
    delivery: { default: 5, fast: 2 },
  },
];

const initialCardsState: { [key in Categories]: CardItemType[] } = {
  mostPopular: fullCardsList.filter(el => el.rating >= 7000),
  getToday: fullCardsList.filter(el => el.inStock),
};

export { Categories, fullCardsList, initialCardsState };
