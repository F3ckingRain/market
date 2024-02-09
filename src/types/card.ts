type CardItemType = {
  id: number;
  title: string;
  image: string;
  price: number;
  inStock: boolean;
  rating: number;
  delivery: {
    default: number;
    fast?: number;
  };
  lastPrice?: number;
  split?: {
    payment: number;
    count: number;
  };
};

export { CardItemType };
