# 💱 Currency Exchange API

A Node.js + Express backend application that retrieves **real-time USD to ARS (Argentine Peso)** currency quotes from online sources, calculates the **average rate**, and measures **price slippage** across different markets.

Built using **Puppeteer**, **Express**, and **CORS**, this project auto-refreshes data every 60 seconds to always return the latest exchange information.

---

## 🧠 Features

✅ Fetch live USD → ARS quotes from multiple sources  
✅ Calculate market average (buy/sell)  
✅ Measure slippage (difference across sources)  
✅ Cache results for 60 seconds  

## 📂 Folder Structure

D:\Currency-api\
│
├── backend\
│   ├── node_modules\
│   ├── src\
│   │   ├── controllers\
│   │   │   └── currencyController.js
│   │   ├── routes\
│   │   │   └── currencyRoutes.js
│   │   └── utils\
│   │       ├── calculateAverage.js
│   │       ├── calculateSlippage.js
│   │       └── fetchQuotes.js
│   └── server.js

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/<your-username>/currency-api.git
cd currency-api/backend

2️⃣ Install dependencies
    npm install
3️⃣ Ensure ESM support
{
  "type": "module"
}

4️⃣ Run the server
    node server.js

✅ Server listening on http://localhost:5000

🌐 API Endpoints

🔹 GET /api/quotes

Fetches current USD → ARS quotes from different sources.

Response:

{
  "currency": "ARS",
  "quotes": [
    {
      "buy_price": 1484.1,
      "sell_price": 1498.941,
      "source": "https://www.dolarhoy.com"
    },
    {
      "buy_price": 1479.8,
      "sell_price": 1504.9,
      "source": "https://www.ambito.com/contenidos/dolar.html"
    },
    {
      "buy_price": 1486.5,
      "sell_price": 1501.6,
      "source": "https://www.cronista.com/MercadosOnline/moneda.html?id=ARSB"
    }
  ]
}

🔹 GET /api/average

Returns the average buy and sell price across all sources.

Response:

{
  "average_buy_price": 1483.46,
  "average_sell_price": 1501.81
}

🔹 GET /api/slippage

Returns the slippage (percentage deviation) for each source.

Response:

[
  {
    "source": "https://www.dolarhoy.com",
    "buy_price_slippage": 0.0027,
    "sell_price_slippage": -0.0013
  },
  {
    "source": "https://www.ambito.com/contenidos/dolar.html",
    "buy_price_slippage": -0.0031,
    "sell_price_slippage": 0.0019
  }
]

🧠 How It Works

Puppeteer scrapes data from trusted ARS/USD websites.

The controller stores fetched data in memory (cached for 60s).

Helper utilities (calculateAverage.js, calculateSlippage.js) process metrics.

Express routes handle API requests and serve structured JSON data.
