export const formatPrice = (num) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(num / 100);
};

export const getUniqueValues = (item, cato) => {
  const filterData = item.map((item) => item[cato]);
  return ['all', ...new Set(filterData)];
};
