const getPriceTitle = (val: number): string => {
  const thousands = val / 1000;

  const valStr = thousands.toFixed(3);

  const result = valStr.split('.').join(' ');

  return `${result} ₽`;
};

const calculateRatting = (ratting: number, maxRatting: number, index: number): number => {
  const prev = index >= 1 ? ratting / ((maxRatting / 10) * index - 1) : 0;
  const now = index > 1 && prev <= 1 ? 0 : ratting / ((maxRatting / 10) * index);

  const result = now >= 1 ? 1 : now.toFixed(3);

  return Number(result);
};

export { getPriceTitle, calculateRatting };
