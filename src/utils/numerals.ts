const getPriceTitle = (val: number): string => {
  const thousands = val / 1000;

  const valStr = thousands.toFixed(3);

  const result = valStr.split('.').join(' ');

  return `${result} ₽`;
};

const calculateRatting = (ratting: number, maxRatting: number, index: number): number => {
  const relativeRatting = ratting / maxRatting;

  const calc = relativeRatting * 10 - index + 1;

  const result = calc > 1 ? 100 : calc * 100;

  return Number(result);
};

export { getPriceTitle, calculateRatting };
