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
    ratting: 9199,
    delivery: { default: 25, fast: 10 },
    categories: [
      { title: 'Обувь для спорта', path: 'shoes/sport' },
      { title: 'Тренировочные', path: 'shoes/training' },
    ],
  },

  {
    id: 2,
    price: 10000,
    split: { payment: 5000, count: 2 },
    title: 'Asics',
    image: '',
    inStock: true,
    ratting: 222,
    delivery: { default: 5, fast: 2 },
    categories: [
      { title: 'Обувь для спорта', path: 'shoes/sport' },
      { title: 'Тренировочные', path: 'shoes/training' },
    ],
  },
];

const initialCardsState: { [key in Categories]: CardItemType[] } = {
  mostPopular: fullCardsList.filter(el => el.ratting >= 7000),
  getToday: fullCardsList.filter(el => el.inStock),
};

export { Categories, fullCardsList, initialCardsState };
