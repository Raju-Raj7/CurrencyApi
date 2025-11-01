export const calculateSlippage = (quotes, average) => {
  return quotes.map((q) => ({
    source: q.source,
    buy_price_slippage: parseFloat(
      ((q.buy_price - average.average_buy_price) / average.average_buy_price).toFixed(4)
    ),
    sell_price_slippage: parseFloat(
      ((q.sell_price - average.average_sell_price) / average.average_sell_price).toFixed(4)
    )
  }));
};
