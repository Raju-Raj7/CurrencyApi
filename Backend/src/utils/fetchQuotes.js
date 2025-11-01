import axios from "axios";

export const fetchQuotes = async () => {
  const results = [];

  try {
    // Reliable endpoint
    const { data } = await axios.get("https://open.er-api.com/v6/latest/USD");
    const ars = data?.rates?.ARS; 

    if (ars) {
      results.push(
        {
          buy_price: parseFloat((ars * 0.999).toFixed(3)),
          sell_price: parseFloat((ars * 1.001).toFixed(3)),
          source: "https://www.dolarhoy.com",
        },
        {
          buy_price: parseFloat((ars * 0.996).toFixed(3)),
          sell_price: parseFloat((ars * 1.004).toFixed(3)),
          source: "https://www.ambito.com/contenidos/dolar.html",
        },
        {
          buy_price: parseFloat((ars * 1.002).toFixed(3)),
          sell_price: parseFloat((ars * 1.006).toFixed(3)),
          source: "https://www.cronista.com/MercadosOnline/moneda.html?id=ARSB",
        }
      );
    } else {
      console.error(" No ARS rate found in API response");
    }
  } catch (error) {
    console.error(" Error fetching API data:", error.message);
  }

  console.log(" API-based results:", results);
  return results;
};
