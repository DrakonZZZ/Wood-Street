export const formatPrice = (num) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(num / 100);
};

export const getUniqueValues = () => {};
