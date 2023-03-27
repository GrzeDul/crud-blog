export const dateToString = (date) => {
  return date.toISOString().split('T')[0].split('-').reverse().join('/');
};
