const formatter = new Intl.NumberFormat('en-AU', {
  style: 'currency',
  currency: 'AUD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

const formattedAmount = (number: number) => {
  return formatter.format(number);
};

export default formattedAmount;