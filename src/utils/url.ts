const getIdFromUrl = (url: string) => {
  const str = url.replace('/product/id=', '');
  const slashIndex = str.indexOf('/');

  return slashIndex !== -1 ? str.substring(0, slashIndex) : str;
};

export { getIdFromUrl };
