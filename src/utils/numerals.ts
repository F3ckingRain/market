const getPriceTitle = (val: number): string => {
  const thousands = val / 1000;

  const valStr = thousands.toFixed(3);

  const result = valStr.split('.').join(' ');

  return `${result} ₽`;
};

export { getPriceTitle };
