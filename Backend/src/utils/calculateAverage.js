export const calculateAverage = (quotes) => {
  if (!quotes.length) return {};

  const avgBuy =
    quotes.reduce((sum, q) => sum + q.buy_price, 0) / quotes.length;
  const avgSell =
    quotes.reduce((sum, q) => sum + q.sell_price, 0) / quotes.length;

  return {
    average_buy_price: parseFloat(avgBuy.toFixed(4)),
    average_sell_price: parseFloat(avgSell.toFixed(4))
  };
};
