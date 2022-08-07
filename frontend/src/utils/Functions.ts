export const toPrecision = (num: number | string, delimiter?: boolean) => {
  const parts = Number(num).toFixed(2).split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  return delimiter === false ? parts[0] : parts.join(',');
};
