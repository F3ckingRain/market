type CategoryType = {
  title: string;
  path: string;
};

type CardItemType = {
  id: number;
  title: string;
  image: string;
  price: number;
  inStock: boolean;
  ratting: number;
  delivery: {
    default: number;
    fast?: number;
  };
  categories: CategoryType[];
  lastPrice?: number;
  split?: {
    payment: number;
    count: number;
  };
};

export { CardItemType, CategoryType };
